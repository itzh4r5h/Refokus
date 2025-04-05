import { motion } from "motion/react"

const Cursor = ({x,y}) => {
  return (
    <motion.div className='h-4 w-4 bg-white rounded-full fixed z-100 -translate-x-1/2 -translate-y-1/2 mix-blend-difference pointer-events-none' style={{top:y,left:x}}></motion.div>
  )
}

export default Cursor