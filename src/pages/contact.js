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
                <form className="contact-form">
                <label>
                    Name
                    <input></input>
                </label>
                <label>
                    Email
                    <input></input>
                    </label>
                <label>
                    Subject
                    <input></input>
                    </label>
                <label>
                    Message
                    <textarea></textarea>
                </label>
                    <button type="button">Submit</button>
                </form>
            </div>
        );
    }
}

export default Contact;