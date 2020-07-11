import React, {Component} from 'react';
import Title from './Title';
class Form extends Component {
     render(){

        return(
    
            <div className="formBlock" name="contact">
            <Title title="Get In Touch" />
                
                <form className="myform">
                    <label>
                        <input type="text" placeholder="Name" />
                    </label>
                    <label>
                        <input type="text"  placeholder="Email" />
                    </label>
                    <label>
                        <input type="text" placeholder="Phone Number" />
                    </label>
                    <label>
                        <textarea className="messageZone"type="text"  placeholder="Message"></textarea>
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