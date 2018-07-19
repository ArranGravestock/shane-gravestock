import React, { Component } from 'react';
import './contact.css'

class Contact extends Component {
    render() {
        return (
            <div className="contact-wrapper">
            <div className="header">
                <h2>Contact me!</h2>
                <p>Leave me a message about stuff...</p>
            </div>
                <form className="contact-form" method="POST" action="https://formspree.io/shane@gravestock.net">
                <label>
                    Name
                    <input name="name" type="text"></input>
                </label>
                <label>
                    Email
                    <input name="_replyto" type="email"></input>
                    </label>
                <label>
                    Subject
                    <input name="_subject" type="text"></input>
                    </label>
                <label>
                    Message
                    <textarea name="message" type="text"></textarea>
                </label>
                    <button type="submit" value="Send">Submit</button>
                </form>

                <input type="text" name="_gotcha" style={{display:"none"}} />
                <input type="hidden" name="_next" value="http://localhost:3000/thanks" />
                
            </div>
        );
    }
}

export default Contact;