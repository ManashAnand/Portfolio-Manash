import React from 'react';
import './services.css';
import {BiCheck} from 'react-icons/bi';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li> 
            <BiCheck className='service__list-icon'/>
            <p>I am good at designing to make websites or webApp looks good </p> 
            </li>
            <li> 
            <BiCheck className='service__list-icon'/>
            <p>I am also familiar with canvas and figma</p> 
            </li>
           
          </ul>
        </article>
        {/* End of UI/UX design */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li> 
            <BiCheck className='service__list-icon'/>
            <p>I made some really cool sites from React js. <br/> Funfact:- This Portfolio is also one of those project.</p> 
            </li>
            <li> 
            <BiCheck className='service__list-icon'/>
            <p>I also have a good hands on Html, Css and JavaScript</p> 
            </li>
           
          </ul>
        </article>
        {/* End of Web Devlopment */}
        <article className="service">
          <div className="service__head">
            <h3>Others</h3>
          </div>

          <ul className="service__list">
            <li> 
            <BiCheck className='service__list-icon'/>
            <p>I also have interest in Competitive Coding</p> 
            </li>
            <li> 
            <BiCheck className='service__list-icon'/>
            <p>I also planning to do Freelancing</p> 
            </li>
           
          </ul>
        </article>
        {/* End of Others */}
      </div>
    </section>
  )
}

export default Services
