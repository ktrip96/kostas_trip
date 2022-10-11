import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Experience from '../components/Experience'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'


const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar
    scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Kostas Tripalitakis portfolio</title>
      </Head>

      <Header/>

      {/* Hero  */}
      <section id="hero" className='snap-center'>
        <Hero/>
      </section>

      {/* About  */}
      <section id="about" className="snap-center">
        <About/>
      </section>

      {/* Experience    */}
      <section id="experience" className="snap-center">
        <Experience/>

      </section>
      
      {/* Skills  */}
      <section id="skills" className="snap-start">
        <Skills/>
      </section>

      {/* Projects   */}
      <section id="projects" className="snap-start">
        <Projects/>
      </section>

      {/* Contact me */}
      <section id="contact" className="snap-start">
        <ContactMe/>
      </section>

      
    </div>
  )
}

export default Home
