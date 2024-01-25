import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Specialheading from '../../special-heading/Specialheading';
import "./Contact.css"
const Contact = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_h3wh8vb', 'template_pa06qd8', form.current, 'hXyjrdnb9mNzwiWZS')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return (
        <div className="contact">
            <div className="container">
            <Specialheading title="Contact Me" className="bigger"></Specialheading>
            <form ref={form} onSubmit={sendEmail} >
                <div className="first">
                <input id="name" type="text" name="user_name" placeholder='Name'/>
                <input id="email" type="email" name="user_email" placeholder='Email' />
                </div>
                <textarea id="message"name="message" placeholder='Message' />
                <input id="submit" type="submit" value="Send" />
            </form>
            </div>
        </div>
    );
  };
export default Contact