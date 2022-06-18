import React from 'react'
import { motion } from "framer-motion";
export const Star = () => {
  return (
    <>
      <motion.div style={{ height: '20px', width: '20px', marginTop: "10%", marginLeft: "80%", backgroundColor: "#385160", position: 'absolute', clipPath: "polygon(0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0%" }} className="rocket" transition={{ duration: 3 }}
        animate={
          {
            scale: [1, 2, 4, 1],
            rotate: [0, -360, 45],

          }}
      >
      </motion.div>
    </>
  )
}
