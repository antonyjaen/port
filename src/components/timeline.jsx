import React from 'react'
import { Chrono } from "react-chrono";


export const Timeline = ({color}) => {
  const items = [
    {
      title: "2022/2 - Currently",
    },
    {
      title: "7 Months",
    },
    {
      title: "2016 - 2021"
    }
  ];
  return ( <div style={{ width: "90%", height: "1200px",marginLeft:"5%" }}>
  <Chrono items={items} mode="VERTICAL_ALTERNATING" 
  
    buttonTexts={{
      first: null,
      last:  null,
      next:  null,
      previous:  null,
    }}

    fontSizes={{
      cardSubtitle: '2rem',
      cardText: '0.8rem',
      cardTitle: '1rem',
      title: '1rem',
    }}
    
    theme={{
      primary: color,
      secondary:color,
      cardBgColor: '#2d2d2d50',
      cardForeColor: "white",
      titleColor: 'white',
      titleColorActive: 'white',
    } 
    }>
        <div>
        <h3 style={{color : (color == '#1c3a4e' ? '#336484': color ), fontSize:"2.2em"}}>Nearlinx - QA Automation </h3>
        <p style={{color: 'white', fontSize:"1.1em"}} >

            Create an automated solution to QA process with tools like Cypress, browserstack, selenium and appium
        </p>
      </div>

      <div>
        <h3 style={{color : (color == '#1c3a4e' ? '#336484': color ), fontSize:"2.2em"}}>Nearlinx - Internship</h3>
        <p style={{color: 'white', fontSize:"1.1em"}} >
          <span style={{color: 'white', fontSize:"1.3em"}}> Creating a project from
        scratch with new technologies      </span>
            <br/>
        
                 ... React, Express, Prisma ORM,
              PostgreSQL,Git,Github and
              AWS EC2
        </p>
      </div>

      <div>
        <h3 style={{color : (color == '#1c3a4e' ? '#336484': color ), fontSize:"2.2em"}}>Middle Technician In Software Development</h3>
        <p style={{color: 'white', fontSize:"1.1em"}} >
         
          Colegio Técnico Profesional Mercedes Norte.  Certificate in Junior Achievement Costa Rica and IBM - Start Up Challenge

          
        </p>
      </div>
  </Chrono>
</div>
  )
}

//todo