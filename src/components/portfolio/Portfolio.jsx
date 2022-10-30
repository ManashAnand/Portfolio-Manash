import React from 'react'
import './portfolio.css'
import NoteApp from '../../assests/NoteApp.JPG'
import WeaApp from '../../assests/WeaApp.JPG'
import perApp from '../../assests/PerApp.JPG'
import rushApp from '../../assests/Rush.JPG'
import voiceApp from '../../assests/Voice.JPG'
import newApp from '../../assests/newsApp.JPG'

const data = [
  {
    id:1,
    image: NoteApp,
    title: 'Note App',
    github: "https://manashanand.github.io/Note-app/",
  },
  {
    id:2,
    image: WeaApp,
    title: 'Weather App',
    github: "https://manashanand.github.io/Weather-App/",
  },
  {
    id:3,
    image: perApp,
    title: 'Personality Commentor',
    github: "https://manashanand.github.io/Personality-Commentor/",
  },
  {
    id:4,
    image: rushApp,
    title: 'Rush Race',
    github: "https://manashanand.github.io/Rush-Race/",
  },
  {
    id:5,
    image: voiceApp,
    title: 'The Voicinator',
    github: "https://manashanand.github.io/The-Voicinator/",
  },
  {
    id:6,
    image: newApp,
    title: 'News app',
    github: "https://github.com/ManashAnand/NewsApp",
  },
]



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github})=>{
              return(
                <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target="__blank">Github</a>
                </div>
              </article>
              )
          })
        }
        {/* End of Note App */}
      </div>
    </section>
  )
}

export default Portfolio
