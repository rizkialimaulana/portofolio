import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Experiences from '../components/Experiences'
import Header from '../components/Header'
import Skills from '../components/Skills'

const Home: NextPage = () => {
  return (
    <div className="h-screen scroll-smooth">
      <Head>
        <title>Portofolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <About />
      <Skills />
      <Experiences />
    </div>
  );
}

export default Home
