import { SpinnerGap } from "@phosphor-icons/react"
import { motion } from "framer-motion"

const Loading = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-screen bg-base-gray-700 flex items-center justify-center "
    >
      <SpinnerGap
        className=" text-product-blue-light animate-spin"
        size={50}
      />
    </motion.div>
  )
}

export default Loading
