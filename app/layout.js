'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import 'atropos/css'
const inter = Inter({ subsets: ['latin'] })
import 'animate.css';


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
