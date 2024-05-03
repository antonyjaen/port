'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import 'atropos/css'
const inter = Inter({ subsets: ['latin'] })
import 'animate.css';
export const metadata = {
  title: 'Antony Jaen Viquez Portfolio',
  description: 'Explore the portfolio of Antony Jaen Viquez, a skilled and creative software developer with a passion for crafting digital solutions. With hands-on experience in building diverse applications and a problem-solving mindset, I bring ideas to life through code. From web applications and mobile apps to innovative software projects, my work reflects a dedication to quality and innovation. As a mid-level developer, I thrive on challenges and collaborate to deliver meaningful user experiences. Join me on this journey of innovation and technology!',
}

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
        <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
      <body className={inter.className}>
      <div className="App">
      <div className="main-container" >
        {children}
       </div> 
       </div> 
        </body>
        
    </html>
  )
}
