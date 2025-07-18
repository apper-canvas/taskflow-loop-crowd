import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'
import Button from '@/components/atoms/Button'
import CategorySidebar from '@/components/organisms/CategorySidebar'

const Layout = ({ children }) => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)

return (
<div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-3 lg:px-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileSidebarOpen(true)}
className="lg:hidden border border-gray-300"
            >
              <ApperIcon name="Menu" size={20} />
            </Button>
            
            <div className="flex items-center gap-2">
<div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <ApperIcon name="CheckSquare" size={20} className="text-white" />
              </div>
<h1 className="text-2xl font-display font-semibold text-gray-900">
                TaskFlow
              </h1>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">
              <ApperIcon name="Bell" size={20} />
            </Button>
            <Button variant="ghost" size="sm">
              <ApperIcon name="Settings" size={20} />
            </Button>
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-4rem)]">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <CategorySidebar />
        </div>

        {/* Mobile Sidebar Overlay */}
        <AnimatePresence>
          {isMobileSidebarOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                onClick={() => setIsMobileSidebarOpen(false)}
              />
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
exit={{ x: '-100%' }}
                transition={{ type: 'tween', duration: 0.3 }}
className="fixed left-0 top-0 bottom-0 w-64 bg-white z-50 lg:hidden shadow-lg border-r border-gray-200"
              >
<div className="p-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-display font-semibold text-gray-900">
                      TaskFlow
                    </h2>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsMobileSidebarOpen(false)}
                    >
                      <ApperIcon name="X" size={20} />
                    </Button>
                  </div>
                </div>
                <div className="overflow-y-auto">
                  <CategorySidebar />
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout