import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-scroll'
//import Link from 'react-router-dom'
import Services from '../components/Services';
import Footer from '../components/Footer';
import ButtonTop from '../components/ButtonTop';
import Contact from '../components/Contact';
import About from '../components/About';
export default function Home () {
    return (
   <> 
    <Hero>
        <Banner  name="home" title="solutions through technology" subtitle="Developing Web & Mobile Solutions" >
         
         <Link className="btn-primary" activeClass="active" to="contact1" spy={true} smooth={true} duration={300} >Get In Touch</Link>
                  
        </Banner>
    </Hero>
    <Services/>
    <About />
    <Contact />
    <Footer />
    <ButtonTop />

    

</>
    )
}
