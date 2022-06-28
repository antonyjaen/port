import React,{useState} from 'react'

const projects=
[
  ['TTS','./TTS-LOGIN.png', './TTS.mp4'],
  ['QAA','./QAA-REPORT.png', './QAA.mp4'],
  ['CI/CD','./CI-CD.png', './SS.mp4'],
  ['FTB','./FORNITURE.png',false],
  ['E.G.', "./ANGULAR.png" ,'./primera.mp4'],
  ['IONIC', './IONIC.png','./IonicApp.mp4']

]

const Project = ({ name, url }) => {
  return (
    <div className="project">
      <div className="img-wrapper">
        <img style={{ width: '98%', height: '300px' }} src={url} />
      </div>
      <h2>{name}</h2>
    </div>
  )
}

export const Projects = ({setVideoURL , setOpen}) => {

  const OnSelectVideo = (url)=>{
    setOpen(true); 
    setVideoURL(url) 
  }

  return (
    <div className="projects lax lax_preset_slideX:961:150">
      {
        projects.map(e =>
        <div className="project" onClick={() => { if (e[2]) { OnSelectVideo(e[2]); } }}>
            <div className="img-wrapper">
              <img style={{ width: '98%', height: '300px' }} src={e[1]} />
            </div>
            <h2>{e[0]}</h2>
          </div>
          )
      }

      
        
    </div>
  )
}
