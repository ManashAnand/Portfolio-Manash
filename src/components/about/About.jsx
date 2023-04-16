import React from 'react';
import './about.css';
import ME from '../../assests/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {RiProjectorFill} from 'react-icons/ri'


const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
              <article className="about__card">
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>1+ Years Working</small>
              </article>

              <article className="about__card">
                <FiUsers className='about__icon'/>
                <h5>Clients</h5>
                <small>Currently contributions</small>
              </article>

              <article className="about__card">
                <RiProjectorFill className='about__icon'/>
                <h5>Projects</h5>
                <small>20+ Completed</small>
              </article>
          </div>

          <p>
          I am a Full Stack Developer with 1+ years experience.<br/>I work to make better web Apps, one that is fast, easy to use, beautiful, accessible to all, and frustration-free.<br/>My main experience is in Full Stack development but I also have a keen interest for design and competitive coding .
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}
export default About
