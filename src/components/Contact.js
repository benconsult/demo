import React, {Component} from 'react';
import Title from './Title';
class Form extends Component {
     render(){

        return(
    
            <div className="formBlock">
            <Title title="Get In Touch" />
                
                <form className="myform" name="contact" action="POST" data-netlify="true">
                    <label>
                        <input type="text" placeholder="Name"  name="name"/>
                    </label>
                    <label>
                        <input type="text"  placeholder="Email"  name="email"/>
                    </label>
                    <label>
                        <input type="text" placeholder="Phone Number" name="phoneNumber"/>
                    </label>
                    <label>
                        <textarea className="messageZone"type="text"  placeholder="Message" name="message"></textarea>
                    </label>
                    <br/>
                    <label>
                        <input type="submit" className="submitBtn" value="Submit" />
                    </label>
                </form>
                
            
            </div>
        );
    }
}

export default Form;