import { useState,useEffect } from 'react'
import { useParallax } from 'react-scroll-parallax'
import { ParallaxProvider } from "react-scroll-parallax"
import ParticlesBg from 'particles-bg'
import Lottie from "lottie-react";
import { useLottie } from "lottie-react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

/* react,angular,ionic,mongo,prisma,pg,python,ts,solidity,git,node*/

import reactJson from "../imgs/296-react-logo.json"
import angularJson from "../imgs/animation_l4b3ehch.json"
import ionicJson from "../imgs/ionic.json"
import mongoJson from "../imgs/mongo.json"
import prismaJson from "../imgs/prisma.json"//
import pgJson from "../imgs//pg.json"//
import pythonJson from "../imgs/python.json"
import tsJson from "../imgs//ts.json"
import gitJson from "../imgs/git.json"
import solidityJson from "../imgs/solidity.json"
import node from "../imgs/node.json"
import downArrow from "../imgs/arrow-down.json"
import SvgRocket from ".//SvgRocket"

import { useMediaQuery } from 'react-responsive'

function Home() {

 // const [date, setDate] = useState(new Date());
 useEffect(()=>{
  
 },[])



const { scrollYProgress } = useViewportScroll()
const { y } = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, 1])
  return (
    <div className="home">
    <section className="container-start " >

      <motion.div style={{ height:'20px', width : '20px',marginTop:"10%", marginLeft:"80%",backgroundColor:"#385160",position: 'absolute',clipPath: "polygon(0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0%"}} className="rocket" transition={{ duration: 3 }}
            animate={
              {
                scale: [1, 2, 4, 1],
                rotate: [0, -360, 45],
              
              }}
            
          >
          </motion.div>
      
      <div className="introduction">
        <pre>
          <div className="span-animated">
          Hello, I'm
          </div>
          <div style={{marginTop:"-3%"}}>
            <h1 className="title"> Antony Jaen Viquez</h1>
            <h3 className="title"> Jr Fullstack Developer</h3>
           
          </div>
         
        </pre>
      </div>
    
          
    
     <div ></div>
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
    
    </section>
    <section className="container-start" >
        <img className="tree" src="./Footer-1.png" />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#1c3a4e" d="M0,128L40,117.3C80,107,160,85,240,69.3C320,53,400,43,480,69.3C560,96,640,160,720,170.7C800,181,880,139,960,122.7C1040,107,1120,117,1200,138.7C1280,160,1360,192,1400,208L1440,224L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
        </svg>
       <div className="skills lax lax_preset_slideX:961:150" >
          <div className="area "  >
            <div className="lax lax_preset_seesaw:140:10" >  <img style={{width:'250px',height:'200px'}} src="https://sithus.com/images/frontBack.png" /></div>
           
            <h4>Front-End</h4>
            <pre>
              React
              <br/>
              Angular
              <br/>
              Next
              <br/>
              CSS
              <br/>
              HTMl
              <br/>
              ES6
            </pre>
          </div>
          <div className="area">
          <img className="lax lax_preset_seesaw:140:10" style={{width:'250px',height:'200px'}} src="https://www.svgrepo.com/show/295404/development-web-development.svg" />
          <h4>Back-End</h4>
          
          <pre>
            Node
            <br/>
            Express
            <br/>
            MongoDB
            <br/>
            Prisma
            <br/>
            PostgreSQL
            <br/>
            Python
            <br/>
            TypeScript
          </pre>

          </div>
          <div className="area">
          <img className="lax lax_preset_seesaw:140:10" style={{width:'250px',height:'200px'}} src="https://www.zenesys.com/Zenesys/media/Images/devops-development/services/icon5.png" />
          <h4 className="skill-title">Dev-Ops</h4>
          <pre >
            Git
            <br/>
            GitFlow
            <br/>
            Docker
            <br/>
            AWS
            <br/>
            Heroku
            <br/>
            CI/CD
            <br/>
            jenkins
            <br/>
            CircleCI
          </pre>

          </div>
       </div>
      </section>
      <section className="container-start" >

      </section>
    </div>
  )
}

export default Home
