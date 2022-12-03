import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_yw76ud9', 'template_hmvd9ee', form.current, 'mIbv2KTJbDT_ZHr_L')
      .then((result) => {
          console.log(result.text);
          console.log("Message Sent!");
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='contact'>
      <div className='contact-container-top'>
        <div>
          <a target='_blank' href='https://github.com/Speeep' className='contact-link'>
            GitHub<FaGithub className='contact-icon' />
          </a>
        </div>
        <div>
          <a target='_blank' href='https://www.youtube.com/channel/UCYYrho2lKBIq4xFaXUrZZ-A' className='contact-link' >
            Youtube<FaYoutube className='contact-icon' />
          </a>
        </div>
        <div>
          <a target='_blank' href='https://www.linkedin.com/in/giovanni-giacalone/' className='contact-link' >
            LinkedIn<FaLinkedin className='contact-icon' />
          </a>
        </div>
      </div>
      <div className='contact-container'>
        <form ref={form} onSubmit={sendEmail} className='contact-form'>
          <label>Name</label>
          <input type="text" name="user_name" placeholder='Your name'/>
          <label>Email</label>
          <input type="email" name="user_email" placeholder='Your email'/>
          <label>Message</label>
          <textarea name="message" placeholder='Message...' />
          <input className='contact-form-button' type="submit" value="Submit" />
        </form>
      </div>
    </div>
  )
}

export default Contact