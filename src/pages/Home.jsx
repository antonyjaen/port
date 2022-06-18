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
import { Star } from './components/Star';
import { Rocket } from './components/rocket';
import { Introduction } from './components/Introduction';
import { Skills } from './components/Skills';


const skills ={
  "front-end" : [
    "React",
    "Angular",
    "Next",
    "CSS",
    "HTML",
    "ES6"
  ],
  "back-end" : [
    "Express",
    "MongoDB",
    "Prisma",
    "PostgreSQL",
    "Python",
    "TypeScript"
  ],
  "dev-ops" : [
    "Git",
    "GitFlow",
    "Docker",,
    "Heroku",
    "CI/CD",
    "jenkins",
  ]
}

function Home() {

 // const [date, setDate] = useState(new Date());
 useEffect(()=>{
  
 },[])

  return (
    <div className="home">

    <section className="container-start " >
      <Star/>
      <Introduction/>
      <Rocket/>
    </section>

      <section className="container-start" >
        <img className="tree" src="./Footer-1.png" />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#1c3a4e" d="M0,128L40,117.3C80,107,160,85,240,69.3C320,53,400,43,480,69.3C560,96,640,160,720,170.7C800,181,880,139,960,122.7C1040,107,1120,117,1200,138.7C1280,160,1360,192,1400,208L1440,224L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
        </svg>
      </section>
  
      <section className="container-start" >
      <Skills skills={skills}/>
      </section>

    </div>
  )
}

export default Home
