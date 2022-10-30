import React from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import  { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4c5cnjb', 'template_1aq1swc', form.current, 'fPKffb_E90S6T1sMY')
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
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>anandmanash321@gmail.com</h5>
            <a href="mailto:anandmanash321@gmail.com" target="__blank">Send a Message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messanger</h4>
            <h5>Manash Anand</h5>
            <a href="https://m.me/manash.anand.1/" target="__blank">Send a Message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>70676 90247</h5>
            <a href="https://api.whatsapp.com/send?phone=917067690247" target="__blank">Send a Message</a>
          </article>
        </div>
        {/* End of Contact Options */}

        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder='Your Full Name' required />
            <input type="email" name="email" placeholder='Your Email' required/>
            <textarea name="message" rows="7" placeholder='Your Message' required/>
            <button type='submit' className='btn btn-primary'>Send the Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
