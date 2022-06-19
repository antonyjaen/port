import React from 'react'

const projects=
[
  ['TTS','./TTS-LOGIN.png'],
  ['QAA','./QAA-REPORT.png'],
  ['CI/CD','./CI-CD.png'],
]

export const Projects = () => {
  return (
    <div className="projects lax lax_preset_slideX:961:150">

       <div className="project">
          <div className="img-wrapper">
            <img style={{ width: '98%', height: '300px' }} src="./TTS-LOGIN.png" />
         
          </div>
          <h2>TTS</h2>
       </div>
       <div className="project">
        <div className="img-wrapper">
          <img style={{ width: '100%', height: '300px' }} src="./QAA-REPORT.png" />
        </div>
        <h2>QAA</h2>
      </div>
       <div className="project">
        <div className="img-wrapper">
          <img style={{ width: '100%', height: '300px'}} src="./CI-CD.png" />
        </div>
        <h2 >CI/CD</h2>
      </div>



       <div className="project">
        <div className="img-wrapper">
          <img style={{ width: '100%', height: '300px' }} src="./FORNITURE.png" />
        </div>
        <h2 >FBT</h2>
      </div>
       <div className="project">
       <div className="img-wrapper">
          <img style={{ width: '100%', height: '300px' }} src="./ANGULAR.png" />
        </div>
        <h2  >E.G.</h2>
       </div>

    </div>
  )
}
