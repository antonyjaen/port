import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from "../Components/Layaout/Layout"
import Link from 'next/link'
import CardsP from "../Components/cardsP/cardsP"
import Skills from "../Components/Skills/Skills"
import About from "../Components/Info/About"
import Contact from "../Components/Info/Contact"
import React, { useContext,useState } from 'react'



export default function Home() {
 
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Layout >
        <div className="bgr">
          <div className="container fondo">
          <About></About>
          </div>
          <div className="container fondo"> 
            <div className="row"> 
              <div className="col-md-4 container-contact">
                <Contact></Contact>
              </div>
              <div className="col-md-8 container-skill">
                <Skills></Skills>
              </div>
            </div>
          { /* <CardsP></CardsP> */}
          </div>
        </div>
      </Layout>
    </div>
  )
}
/*
<Link href="pag3">
<a >USE TP </a>
</Link>
*/ 