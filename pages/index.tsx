import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Experiences from '../components/Experiences'
import Header from '../components/Header'
import Skills from '../components/Skills'
import React, { useRef } from 'react'

const Home: NextPage = () => {
  const app = useRef()
  const ScrollContainer = useRef()

  return (
    <div className="h-screen scroll-smooth">
      <Head>
        <title>Rizki Ali Maulana</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Portofolio Website of Rizki Ali Maulana" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className='overscroll-y-none scroll-smooth'>
        <Header />
        <About />
        <Skills />
        <Experiences />
        <Contact />
      </main>
    </div>
  );
}

export default Home
