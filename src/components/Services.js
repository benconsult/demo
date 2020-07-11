import React, { Component } from 'react'
import Title from './Title';
import {FaMobileAlt,FaLaptop,FaLock, FaSchool, FaServicestack, FaPhone, FaBuysellads, FaMobile, FaShoppingCart} from 'react-icons/fa';
//import {FaConnectdevelop,FaUnlockAlt,FaDesktop,FaEnvelope,FaTrain,FaPhone,FaChevronUp, FaMobileAlt, FaShuttleVan,FaBeer,FaFacebookF,FaExpeditedssl } from 'react-icons/fa';

export default class Services extends Component {
    state = {
        services: [
            {
                icon:<FaLaptop />,
                title:"Web Design & Content Management Service",
                info: "We design website for a brand to improve its online visibility and translate business messages to the targeted customers in order to extend the reach to a larger customers-base."
            },
            {
                icon:<FaShoppingCart />,
                title:"Enterprise Appplications Development",
                info: "We develop eCommerce web applications for business enterprises that wants to perform business operations online and incorporates features such as prompt access, speed, and end convenience for easy transaction."
           },
            {
                icon:<FaMobileAlt/>,
                title:"Mobile Applications Development",
                info: "We possess the expertise of developing mobile applications for Android and iOS operating systems. "
            },
            {
                icon:<FaLock/>,
                title:"Web Security Solutions",
                info: "We offer comprehensive cloud-based website security solutions to businesses of all sizes and protect web applications, software, and IT infrastructure from a multitude of attacks and threats."
            },
            {
                icon:<FaServicestack/>,
                title:"IT Consulting Service",
                info: "We profer bespoke technology solutions to various business domains and provide implementation strategies that can move them to their next level. "
            },{
                icon:<FaSchool/>,
                title:"Capacity Building",
                info: "We support individuals and corporate organizations with relevant trainings, workshops and enlightment programmes in the field of Information Technology."
            }            
        ]
    };
    render() {
        return (
            <section className="services">
                <Title title="services" name="service" />
                <div className="services-center">
                    {
                        this.state.services.map((item, index) => {
                            return(
                                <article key={index} className="service">
                                <span className="sp">{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p className="about-p">{item.info}</p>
                            </article>
                            );
                        })
                    }

                </div>



            </section>
        );
    }
}
