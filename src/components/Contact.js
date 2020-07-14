import React, {Component} from 'react';
import Title from './Title';


class Form extends Component {

    
     render(){

        return(
    
            <div className="formBlock" name="contact1">
            <Title title="Get In Touch" name="contact1"/>

                <form className="myform" name="contact" method="post">
                   <input type="hidden" name="form-name" value="contact" />
                    <label>
                        <input type="text" placeholder="Name"  name="name" required/>
                    </label>
                    <label>
                        <input type="email"  placeholder="Email"  name="email" required/>
                    </label>
                    <label>
                        <input type="number" placeholder="Phone Number" name="phoneNumber" required/>
                    </label>
                    <label>
                        <textarea className="messageZone"type="text"  placeholder="Message" name="message" required></textarea>
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