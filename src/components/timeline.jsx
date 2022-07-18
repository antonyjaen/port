import React from 'react'
import { Chrono } from "react-chrono";
import { useWindowSize } from 'usehooks-ts'

export const Timeline = ({color}) => {
  const { width, height } = useWindowSize()

  const items = [
    {
      title: "2022/2  Currently",
    },
    {
      title: "7 Months",
    },
    {
      title: "6 Years "
    }
  ];
  return ( <div style={{ width: "90%", height: "1000px",marginLeft:"5%" }}>
  <Chrono items={items} mode={ width > 600 ? "VERTICAL_ALTERNATING" : "VERTICAL"} 
  
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
        <h3 style={{color : (color == '#1c3a4e' ? '#336484': color ), fontSize: (width > 600 ? "2.2em" : "1.5em")}}> QA Automation </h3>
        <p style={{color: 'white'}} >

            Create an automated solution to QA process with tools like Cypress, browserstack, selenium and appium
        </p>
      </div>

      <div>
        <h3 style={{color : (color == '#1c3a4e' ? '#336484': color ), fontSize: (width > 600 ? "2.2em" : "1.5em")}}> Fullstack</h3>
        <p style={{color: 'white'}} >
          <span style={{color: 'white'}}> Creating a project from
        scratch with new technologies      </span>
            <br/>
        
                  React, Express, Prisma ORM,
              PostgreSQL,Git,Github and
              AWS EC2
        </p>
      </div>

      <div>
        <h3 style={{color : (color == '#1c3a4e' ? '#336484': color ), fontSize: (width > 600 ? "2.2em" : "1.5em")}}>Middle Technician </h3>
        <p style={{color: 'white'}} >
         
          Colegio Técnico Profesional Mercedes Norte. Middle Technician In Software Development and Certificate in Junior Achievement Costa Rica and IBM - Start Up Challenge

          
        </p>
      </div>
  </Chrono>
</div>
  )
}

//todo