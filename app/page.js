'use client'
import { useState, useEffect } from 'react'

import { Rocket } from '../src/components/Rocket';
import { Introduction } from '../src/components/Introduction';
import { Skills } from '../src/components/Skills';
import { Projects } from '../src/components/Projects';
import { PopupWidget, InlineWidget } from "react-calendly";
import { VideoModal } from '../src/components/VideoModal';
import { Timeline } from '../src/components/timeline';
import Image from 'next/image';
 
import { scroller } from 'react-scroll';
import { Element, Link } from 'react-scroll';

const skills = {
  "front-end": [
    "React",
    "Angular",
    "Next",
    "CSS",
    "HTML",
    "ES6"
  ],
  "back-end": [
    "Express",
    "MongoDB",
    "Prisma",
    "PostgreSQL",
    "Python",
    "TypeScript"
  ],
  "dev-ops": [
    "Git",
    "GitFlow",
    "Docker", ,
    "Heroku",
    "CI/CD",
    "jenkins",
  ]
}

function Home() {

  const [isOpen, setOpen] = useState(false);
  const [videoURL,setVideoURL] = useState('');
  const [theme,setTheme] = useState('Blue')

  const themes = {
    'Blue' : {
      tree: 'Tree-Blue.webp', 
      color: '#1f3d55'
    }, 
    "Red" : {
      tree: 'Tree-Red.webp', 
      color: '#7c342b'
    }
  }

  const changeTheme = (e)=>{
    const newTheme =  (theme == "Red" ? "Blue" : "Red") 
    setTheme(  newTheme )
    localStorage.setItem("theme",  newTheme)
  }

  useEffect(()=>{
    const storedTheme = localStorage.getItem('theme')
    
    if ( storedTheme ){
      setTheme( storedTheme)
    }

  },[])

  const [imagesLoaded, setImagesLoaded] = useState(false);
  const handleImageLoad = () => {
    setImagesLoaded(true);
  };

  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    const scrolledPosition = window.scrollY;
    
    const heroElement = document.getElementById('hero');
    const TimelineElement = document.getElementById('Timeline');
    const skillsElement = document.getElementById('skills');

    if (!heroElement || !TimelineElement) {
      return;
    }

    const heroPosition = heroElement.offsetTop - 800;
    const TimelinePosition = TimelineElement.offsetTop - 500 ;
    //const skillsPosition = skillsElement.offsetTop - 200 ;
    
    function smoothScrollTo(x, y, duration) {
      const start = window.scrollY;
      const change = y - start;
      const increment = 60; // Ajusta el valor de incremento para controlar la suavidad
      let currentTime = 0;
    
      function animateScroll() {
        currentTime += increment;
        const progress = currentTime / duration;
        const easeInOutProgress = (1 - Math.cos(progress * Math.PI)) / 2;
        const scrollToY = start + change * easeInOutProgress;
    
        window.scrollTo(0, scrollToY);
    
        if (currentTime < duration) {
          requestAnimationFrame(animateScroll);
        }
      }
    
      animateScroll();
    }
    
    // Llama a la función con las coordenadas x e y deseadas y la duración en milisegundos
   // smoothScrollTo(0, 500, 1000); // Desplazamiento a x=0, y=500 en 1000ms
    
    /*window.scrollTo({
      top: TimelinePosition,
      behavior: 'smooth 200ms' // This makes the scrolling smooth
    });*/
    //smoothScrollTo(0, TimelinePosition, 2000);

   
  };
  return (
    
    <div className="App">
    <div className="main-container" >

    <div className="home">
      {
        isOpen &&  <VideoModal setOpen={setOpen} url={videoURL} ></VideoModal>
      }
      <section className="container-start " id="hero">
        <Introduction />
        <Rocket />
      </section>

      <section className="container-start" >
        <Image className="tree" src={`/${themes[theme].tree}`}  width={'900'} height={200} />
   
        <svg onLoad={handleImageLoad} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className=' w-[100%]  mt-[-1%]' >
          <path fill={themes[theme].color} d="M0,128L40,117.3C80,107,160,85,240,69.3C320,53,400,43,480,69.3C560,96,640,160,720,170.7C800,181,880,139,960,122.7C1040,107,1120,117,1200,138.7C1280,160,1360,192,1400,208L1440,224L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
        </svg> 
      </section>

          
          <section className="container-start " id="Timeline">
            <Timeline color={themes[theme].color} />
          </section>

       
          <section className="container-start" id="skills" >
            <Skills skills={skills} theme={theme} />
          </section>

          
        {/*
        
          <section className="container-start" >
            <Projects />
          </section>
        */}
          
          
      {/*
      < PopupWidget url="https://calendly.com/antonyjaen/30min?"  rootElement={document.getElementById("root")}
        text="Click here to schedule!"
        textColor="white"
        color="black" 
        />
        */}

    </div>
    </div>
    </div>
  )
}

export default Home
 