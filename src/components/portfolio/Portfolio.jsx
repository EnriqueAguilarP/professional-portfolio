import React from 'react'
import './portfolio.css'
import IM1 from '../../assets/portfolio1.jpg'
import IM2 from '../../assets/portfolio1.jpg'
import IM3 from '../../assets/portfolio1.jpg'
import IM4 from '../../assets/portfolio4.jpg'
import IM5 from '../../assets/portfolio5.jpg'
import IM6 from '../../assets/portfolio6.jpg'

const data = [
  {id: 1,
    image: IM1,
    title: 'Ecommerce Website',
    tech: 'react, node, mongo',
    github: 'https://github.com',
    demo: 'https://restaurant-delta-sable.vercel.app/'
  },
  {id: 2,
    image: IM2,
    title: 'Recipe App',
    tech: 'Next',
    github: 'https://github.com',
    demo: 'https://restaurant-delta-sable.vercel.app/'
  },
  {id: 3,
    image: IM3,
    title: 'Tiktok App',
    tech: 'typescript',
    github: 'https://github.com',
    demo: 'https://restaurant-delta-sable.vercel.app/'
  },
  {id: 4,
    image: IM4,
    title: 'Hotel Booking',
    tech: 'html, css, javascript',
    github: 'https://github.com/EnriqueAguilarP/hotel',
    demo: 'https://hotel-wood.vercel.app/'
  },
  {id: 5,
    image: IM5,
    title: 'React Calculator',
    tech: 'html, css, javascript, react',
    github: 'https://github.com/EnriqueAguilarP/calculadoraReact',
    demo: 'https://calculadora-react-five.vercel.app/'
  },
  {id: 6,
    image: IM6,
    title: 'Blog',
    tech: 'html',
    github: 'https://github.com/EnriqueAguilarP/my_launchx_blog',
    demo: 'https://enriqueaguilarp.github.io/my_launchx_blog/'
  },

  
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio_item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__cta">
                  <a href={github} className='btn' target='__blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='__blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio