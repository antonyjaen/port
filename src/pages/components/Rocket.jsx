import React from 'react'
import { motion} from "framer-motion";
import SvgRocket from "./SvgRocket"

export const Rocket = () => {
  return (
    <>
     <motion.div style={{ marginLeft:"-5%",marginTop:'20%'}} className="rocket" transition={{duration:3}} 
     animate={
      {
      
       x:700,
       y:-600,
       opacity:0
      }}
      >
      <SvgRocket/>
      </motion.div>
    </>
  )
}
