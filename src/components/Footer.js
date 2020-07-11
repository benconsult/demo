import React from 'react'
//import Title from './Title'
import { FaMobileAlt,FaDirections,FaEnvelope} from 'react-icons/fa';
//import { Link} from 'react-router-dom'

export default function Footer() {
    return (
       
      <div className="main-footer">
          <div className="container">
              <div className="row">
                  {/*col 1*/}
                <div className="col">
                   <FaMobileAlt className="i"/>
                   <p className="i-info">+2348024713112<br/>
                   +2347064529058</p>
                   <br/>
                   <br/>

                </div>
                 {/*col 1*/}
                 <div className="col">
                 <FaEnvelope className="i"/>
                   <p className="i-info">curiumsoftsolutions@gmail.com<br/>
                   info@curiumsoftwaresolutions.com</p>
                     <br/>
                   <br/>

                </div>
                 {/*col 1*/}
                 <div className="col">
                    
                 <FaDirections className="i"/>
                 <ul className="list-unstyled">
                 <p className="i-info">Main Office : 60,Benjamin Street,Eleyele Street,Ibadan,Oyo-State,Nigeria.</p>
                                       <p className="i-info">11,Ibrahim Taiwo Road,Oke-Erin Street,Ilorin,kwara-State,Nigeria.</p>
                   </ul>
                   <br/>
                   <br/>
                </div>
              </div>
              <hr/>
              <div className="privacy">
                  <br/>
                  <p className="copyright">&copy;2020-2022 Curium Software Solutions</p>
                  <br/>
              </div>
          </div>
      </div>
     
    );
}
