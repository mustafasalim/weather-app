import { Minus } from "@phosphor-icons/react"
import React, { useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface DrawerProps {
  isOpen: boolean
  onClose: () => void
  closeOnOverlayClick?: boolean
  children?: any
  title: string
}

const Drawer: React.FC<DrawerProps> = (props) => {
  const { isOpen, onClose, closeOnOverlayClick = true, children } = props
  const drawerRef = useRef<HTMLDivElement>(null)

  const handleEscapeKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose()
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey)
    } else {
      document.removeEventListener("keydown", handleEscapeKey)
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey)
    }
  }, [isOpen])

  const handleOverlayClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (closeOnOverlayClick && e.target === drawerRef.current) {
      onClose()
    }
  }

  return (
    <>
      {isOpen && (
        <div
          className="w-full h-screen flex items-end justify-center  z-40 fixed top-0 left-0 bg-gray-950/50 transition-all"
          onClick={handleOverlayClick}
          ref={drawerRef}
        >
          <motion.div
            className="w-full"
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className=" bg-base-gray-800 w-full h-auto rounded-tl-3xl rounded-tr-3xl "
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full flex items-center justify-center  ">
                <Minus
                  className="text-gray-500"
                  size={32}
                />
              </div>
              <div className="flex items-center justify-center p-6">
                {children}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  )
}

export default Drawer
