import Head from 'next/head'
import link from 'next/link'
import Layout from "../Components/Layaout/Layout"
import CardsP from "../Components/cardsP/cardsP"
export default function Pag3() {
    return (
      <div >
        <Head>
          <title>Skills</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
        <div className="bgr">
        <div >
          <CardsP></CardsP>
        </div>
        </div>
        </Layout>
        
      </div>
    )
  }