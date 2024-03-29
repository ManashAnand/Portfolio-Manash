import React from 'react'
import './experience.css';
import {HiBadgeCheck} from 'react-icons/hi'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have ?</h5>
      <h2>My Experiences</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
        <h3>Frontend Devlopment</h3>
          <div className="experience__content">
            <article className="experience__details">
                <HiBadgeCheck className="experience__details-icon"/>
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
                </div>
            </article>
            <article className="experience__details">
                <HiBadgeCheck className="experience__details-icon"/>
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Experienced</small>
                </div>
            </article>
            <article className="experience__details">
                <HiBadgeCheck className="experience__details-icon"/>
                <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Experienced</small>
                </div>
            </article>
            <article className="experience__details">
                <HiBadgeCheck className="experience__details-icon"/>
                <div>
                  <h4>React Js</h4>
                  <small className='text-light'>Experienced</small>    
                </div>
            </article>
            <article className="experience__details">
                <HiBadgeCheck className="experience__details-icon"/>
                <div>
                    <h4>Next Js</h4>
                    <small className='text-light'>Intermediate</small>
                </div>
            </article>
            <article className="experience__details">
                <HiBadgeCheck className="experience__details-icon"/>
                <div>
                    <h4>Vue Js</h4>
                    <small className='text-light'>Intermediate</small>
                </div>
            </article>
           
          </div>
        </div>

        {/* End of Frontend */}

        <div className="experience__backend">
        <h3>Backend Devlopment and Other Skills</h3>
          <div className="experience__content">
          <article className="experience__details">
                <HiBadgeCheck className="experience__details-icon"/>
                <div>
                    <h4>Node JS</h4>
                    <small className='text-light'>Experienced</small>
                </div>
            </article>
            <article className="experience__details">
                <HiBadgeCheck className="experience__details-icon"/>
                <div>
                    <h4>Express JS</h4>
                    <small className='text-light'>Experienced</small>
                </div>
            </article>
            <article className="experience__details">
                <HiBadgeCheck className="experience__details-icon"/>
                <div>
                    <h4>MongoDB</h4>
                    <small className='text-light'>Intermediate</small>
                </div>
            </article>
            <article className="experience__details">
                <HiBadgeCheck className="experience__details-icon"/>
                <div>
                  <h4>C++</h4>
                  <small className='text-light'>Experienced</small>
                </div>
            </article>
            
            <article className="experience__details">
                <HiBadgeCheck className="experience__details-icon"/>
                <div>
                  <h4>C</h4>
                  <small className='text-light'>Experienced</small>
                </div>
            </article>
            <article className="experience__details">
                <HiBadgeCheck className="experience__details-icon"/>
                <div>
                  <h4>Python</h4>
                  <small className='text-light'>Beginner</small>
                </div>
            </article>
            
            {/* <article className="experience__details">
                <HiBadgeCheck className="experience__details-icon"/>
                <h4>React Js</h4>
                <small className='text-light'>Intermediate</small>
            </article>
            <article className="experience__details">
                <HiBadgeCheck className="experience__details-icon"/>
                <h4>BootStrap</h4>
                <small className='text-light'>Experienced</small>
            </article> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
