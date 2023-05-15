import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_n2v1egc', 'template_ttos69n', form.current, 'SydChmEw-cv-liSnP')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className='contact__icon'/>
            <h4>Email</h4>
            <h5>enrique.prado207@gmail.com</h5>
            <a href="mailto:enrique.prado207@gmail.com" target='_blank'>Send an email</a>
          </article>

          <article className="contact__option">
            <AiOutlineWhatsApp className='contact__icon'/>
            <h4>Whatsapp</h4>
            <h5>+524771590048</h5>
            <a href="https://api.whatsapp.com/send?phone=524771590048" target='_blank'>Send a whatsapp</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="10" placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact