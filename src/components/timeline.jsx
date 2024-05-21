import React from 'react'
import { Chrono } from "react-chrono";
import { useWindowSize } from 'usehooks-ts'

const timelineItems = [
  {
    title: "Full-stack (MERN)",
    duration: "1 year and 10 months",
    subtitle: "Part-time developer for an electricity startup",
    details: "Create portal from scratch with technologies like React, Next, Prisma ORM, MySQL, Git, Github and deployed in VPS server using NGINX.",
    bullets: [
      "Built full-stack applications using modern technologies",
      "Deployed applications on AWS EC2 instances"
    ]
  },
  {
    title: "QA Automation",
    duration: "1 year",
    subtitle: "",
    details: "Create an automated solution to QA process with tools like Cypress, browserstack, selenium and appium.",
    bullets: [
      "Designed and implemented automated testing solutions",
      "Utilized Cypress, browserstack, selenium, and appium for testing processes"
    ]
  },
  {
    title: "Full-stack (.NET)",
    duration: "1 year and 4 months",
    subtitle: "With technologies .NET, TFS, and SQL Server",
    details: "Utilizing technologies .NET, TFS, and SQL Server to develop fullstack applications for a healthcare company.",
    bullets: [
      "Developed fullstack applications for a healthcare company",
      "Utilized .NET, TFS, and SQL Server for development"
    ]
  },
  {
    title: "Database Migration (SSIS)",
    duration: "1 year and 4 months",
    subtitle: "Working on ETL process for telecom companies",
    details: "Technologies used: MySQL, SQL Server, Integration Services.",
    bullets: [
      "Executed ETL processes for telecom companies",
      "Utilized MySQL, SQL Server, and Integration Services for data migration"
    ]
  },
  {
    title: "Full-stack (Flask, PostgreSQL y React)",
    date: "2023/10",
    duration: "2023/10 - Current",
    subtitle: "",
    details: "Create a microservice responsible for automating the integration between internal platforms of a telecom company, with technologies and tools like Python (Flask as framework), self-hosted Supabase instances, Azure DevOps, Docker, handling interactions with websockets, creating cron jobs for automated data flows, logs, custom rollbacks and more.",
    bullets: [
      "Developed microservice architecture for telecom integration",
      "Utilized Python, Flask, Supabase, Azure DevOps, Docker, and websockets-webhooks for integration processes"
    ]
  }
];

export const Timeline = ({ color }) => {
  const { width } = useWindowSize();

  return (
    <div className='w-90 h-1300 mx-5 mt-[0%]  '>
      <Chrono 
        scrollable={false} 
        items={timelineItems} 
        mode={width > 600 ? "VERTICAL_ALTERNATING" : "VERTICAL"} 
      
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
          secondary: color,
          cardBgColor: '#2d2d2d50',
          cardForeColor: "white",
          titleColor: 'white',
          titleColorActive: 'white',
        }} 
      >
        {timelineItems.map((item, index) => (
          <div key={index} className=" w-[100%]">
            <h3 className="text-sky-200 text-lg md:text-xl">{item.title}</h3>
            {item.duration && (
              <p style={{ color: 'white' }}>Duration: {item.duration}</p>
            )}
            {item.subtitle && (
              <p style={{ color: 'white',  marginBottom: '0.5rem' }}>{item.subtitle}</p>
            )}
            {item.bullets && (
              <ul>
                {item.bullets.map((bullet, idx) => (
                  <li key={idx} style={{ color: 'white', marginLeft: '1rem' }}>{bullet}</li>
                ))}
              </ul>
            )}
            <p style={{ color: 'white' }}>{item.details}</p>
          </div>
        ))}
      </Chrono>
    </div>
  );
}
