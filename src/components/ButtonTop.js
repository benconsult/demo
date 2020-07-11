import React, { Component } from 'react'
import { FaChevronUp } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll'
//import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default class ButtonTop extends Component {
    
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
    render() {
        return (
            <div>
            
          <button className="goTop" onClick={this.scrollToTop}><FaChevronUp className="bottom-icon" /></button>  
        
        </div>
        )
    }
}

