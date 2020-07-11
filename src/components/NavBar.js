import React, { Component } from 'react'
import logo from '../images/loggo.png';
import { FaAlignRight } from 'react-icons/fa';
//import { Link } from 'react-router-dom';
import { Link} from 'react-scroll'
//import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'



export default class NavBar extends Component {
    state ={
        isOpen: false
    }
    handleToggle=()=>{
        this.setState({isOpen:!this.state.isOpen})
    }
    render() {
        return(
         <nav className="navbar"> 
          <div className="nav-center">
             <div className="nav-header">
                <Link to="/">
                    <img src={logo} alt="Beach-resort" width='200px' height='40px' className="mylogo"/>
                </Link>
                <button type="button" className="nav-btn" onClick={this.handleToggle}>
                    <FaAlignRight className="nav-icon"/>

                </button>
              </div>
               <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                   <li>
                   <Link activeClass="active" to="home" spy={true} smooth={true} duration={100} >Home</Link>
                   </li>
                   <li>
                   <Link activeClass="active" to="service" spy={true} smooth={true} duration={100} >Services</Link>
                   </li>
                   <li>
                   <Link activeClass="active" to="about" spy={true} smooth={true} duration={100} >About</Link>
                  
                   </li>
                   
               </ul>
          </div>
          
        </nav>
        ) 
    }
}
