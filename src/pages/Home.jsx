import { useState, useEffect } from 'react'

import { Rocket } from '../components/Rocket';
import { Introduction } from '../components/Introduction';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';
import { PopupWidget } from "react-calendly";
import { VideoModal } from '../components/VideoModal';
import { Timeline } from './../components/Timeline';
 

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
      tree: 'Tree-Blue.png', 
      color: '#1c3a4e'
    }, 
    "Red" : {
      tree: 'Tree-Red.png', 
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

  return (
    <div className="home">
      {
        isOpen &&  <VideoModal setOpen={setOpen} url={videoURL} ></VideoModal>
      }
      
      <section className="container-start " >
        {/*Theme Toggle*/ }
        <div style={{position: 'absolute',right: '30px',top:'27px'}} onClick={  changeTheme }>
          <input type="checkbox" className="checkbox"  checked={ (theme != 'Blue') } />
          <label className="label">
            <i className="fas fa-moon"></i>
            <i className='fas fa-sun'></i>
            <div className='ball'></div>
          </label>
        </div>
        <Introduction />
        <Rocket />
      </section>

      <section className="container-start" >
        <img className="tree" src={`./${themes[theme].tree}`} />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{marginTop:"-1%"}}>
          <path fill={themes[theme].color} d="M0,128L40,117.3C80,107,160,85,240,69.3C320,53,400,43,480,69.3C560,96,640,160,720,170.7C800,181,880,139,960,122.7C1040,107,1120,117,1200,138.7C1280,160,1360,192,1400,208L1440,224L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
        </svg>
      </section>

      <section className="container-start" >
        <Timeline  color={themes[theme].color} />
      </section>

      <section className="container-start" >
        <Skills skills={skills} theme={theme}/>
      </section>

      <section className="container-start" >
      <Projects setOpen={setOpen} setVideoURL ={setVideoURL} color={themes[theme].color}/>
      </section>

      < PopupWidget url="https://calendly.com/antonyjaen/30min?"  rootElement={document.getElementById("root")}
        text="Click here to schedule!"
        textColor="white"
        color="black" 
        />

    
    


    </div>
  )
}

export default Home
 