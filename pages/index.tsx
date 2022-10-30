import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Header from '../components/Header'
import Skills from '../components/Skills'

const Home: NextPage = () => {
  return (
    <div className="h-screen py-2 ">
      <Head>
        <title>Portofolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header />
        <About />
        <Skills />
    </div>
  )
}

export default Home
