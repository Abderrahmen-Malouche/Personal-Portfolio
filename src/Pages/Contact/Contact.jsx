import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import Specialheading from '../../special-heading/Specialheading';
import Popup from 'reactjs-popup';
import "./Contact.css"
const Contact = () => {
    const form = useRef();
  
    const [isSubmitting, setIsSubmitting] = useState(false);
     const [message, setMessage] = useState('');
    const sendEmail = (e) => {
      e.preventDefault();
      setIsSubmitting(true);
         setMessage('Sending...');
  
      emailjs.sendForm('service_bopmfzi', 'template_h4vso8a', form.current, 'hXyjrdnb9mNzwiWZS')
        .then((result) => {
            console.log(result.text);
            setMessage('Message sent successfully!');
            setIsSubmitting(false);
        }, (error) => {
            console.log(error.text);
            setMessage('Failed to send message, please try again.');
            setIsSubmitting(false);
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
                <Popup trigger=
                {<input id="submit" type="submit" value="Send" disabled={isSubmitting} />}
                position="right center">
                <div className='popup'>Your message is Sent</div>
                </Popup>
               
            </form>
            </div>
        </div>
    );
  };
export default Contact