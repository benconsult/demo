import React from 'react'
//import image1 from '../images/footer-1.jpg'
//import Title from './Title';
import Banner from './Banner'
import Hero from './Hero'
//import { Checkbox } from 'material-ui'

//import {Link } from 'react-router-dom'
export default function About() {
    return (
        <section className="info" name="about">
            
            <Hero>
            <Banner title="solutions through technology" subtitle="We are committed to delivering valuable, resourceful, practical and timely solutions through technology">
         
        </Banner>
        </Hero>
              <div>
               
               <p className="about-p">Curium Software Solutions is an Information Technology Company 
                                        that provide web solutions for businesses who
                   depend on IT for success. Established with the major purpose of
                   delivering quality software solutions to various business domains in Africa.
                    </p>          
                <br/>
                <p className="about-p">We have an award winning team of experts who are competent in different mobile platforms and solution frameworks. We are committed to delivering resourceful,innovative, practical, and timely solutions to prospective clients.</p>
                   <br/>  
                     <h4>CORE VALUES</h4>
                     <p className="about-p"><input type="checkbox" checked/> <strong>Customer Satisfaction: </strong>Delivering the best solutions to prospective clients in a timely manner is our topmost priority.</p> <br/>
                     <p className="about-p"><input type="checkbox" checked/> <strong>Integrity: </strong>Strict adherrence to customer's requirements is ensured throughout the entire business processes.</p><br/>
                    <p className="about-p"> <input type="checkbox" checked/> <strong>Trust: </strong>Building a good reputation through the quality of services rendered to prospective clients.</p>
                       </div>
      </section>
     
    )
}
