import React from "react";
import "./Contact.css";

class Contact extends React.Component {
    render() {
        return (
            <div className="contact">
                <div className="contact-page-photo">
                    <img id="andy" src={require('./img/contact.jpg')} alt="Contact-related content" />
                </div>
                <p>{"let's be friends"}</p>
                <a href="https://www.instagram.com/bazingrid/" target="_blank" rel="noopener noreferrer">instagram</a>
                <a href="https://github.com/ingridwang/" target="_blank" rel="noopener noreferrer">github</a>
                <a href="https://www.linkedin.com/in/wangingrid/" target="_blank" rel="noopener noreferrer">linkedin</a>
            </div>
        );
    }
}

export default Contact;