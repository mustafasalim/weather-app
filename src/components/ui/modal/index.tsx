import { XCircle } from "@phosphor-icons/react"
import React, { useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  closeOnOverlayClick?: boolean
  children?: any
  title: string
}

const Modal: React.FC<ModalProps> = (props) => {
  const { isOpen, onClose, closeOnOverlayClick = true, children, title } = props
  const modalRef = useRef<HTMLDivElement>(null)

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
    if (closeOnOverlayClick && e.target === modalRef.current) {
      onClose()
    }
  }

  return (
    <>
      {isOpen && (
        <div
          className="w-full h-screen flex  items-center justify-center z-50 fixed top-0 left-0 bg-gray-950/50 transition-all"
          onClick={handleOverlayClick}
          ref={modalRef}
        >
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className=" bg-base-gray-800 rounded-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full flex items-center justify-between p-6  ">
                <span className="text-heading-md text-base-gray-200">
                  {title}
                </span>
                <div
                  onClick={onClose}
                  className=" text-white"
                >
                  {/* <XSquare
                  
                  size={25}
                /> */}
                  <XCircle
                    className="text-base-gray-200 cursor-pointer"
                    size={27}
                  />
                </div>
              </div>
              <div className="p-6">{children}</div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  )
}

export default Modal
