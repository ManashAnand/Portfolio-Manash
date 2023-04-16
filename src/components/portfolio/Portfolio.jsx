import React from 'react'
import './portfolio.css'
import Ecommerce from '../../assests/Ecommerce.png'
import crypto from '../../assests/crypto.png'
import crossGrain from '../../assests/crossGrain.png'
import newsApp from '../../assests/newsApp.JPG'
import taskify from '../../assests/taskify.png'
import dine from '../../assests/dine.png'
// import Ecommerce from '../../assests/Ecommerce.png'

const data = [
  {
    id:1,
    image: Ecommerce,
    title: 'Ecommerce App',
    github: "https://github.com/ManashAnand/Ecommerce-app",
  },
  {
    id:2,
    image: crypto,
    title: 'Crypto Tracker',
    github: "https://github.com/ManashAnand/Crypto_Tracker",
  },
  {
    id:3,
    image: crossGrain,
    title: 'CrossGrain',
    github: "https://github.com/ManashAnand/CrossGrain",
  },
  {
    id:4,
    image: taskify,
    title: 'Taskify',
    github: "https://github.com/ManashAnand/taskify",
  },
  {
    id:5,
    image: dine,
    title: 'Dine Me',
    github: "https://github.com/ManashAnand/DineMe",
  },
  {
    id:6,
    image: newsApp,
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
