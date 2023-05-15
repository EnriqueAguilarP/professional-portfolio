import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {AiOutlineUser} from 'react-icons/ai'
import {FaAward} from 'react-icons/fa'
import {AiOutlineFolderOpen} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <AiOutlineUser className='about__icon'/>
              <h5>Profile</h5>
              <small>Strong work ethic and self-motivated</small>
            </article>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>+2 years</small>
            </article>
            <article className='about__card'>
              <AiOutlineFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small>10 completed</small>
            </article>
          </div>
          <p> 
            Team-oriented and positive attitude. 
            Fluent in Spanish and English.<br/> 
            I have designed front-end webpages with HTML, CSS, JavaScript and React. <br/> 
            I have also worked with PostgreSQL databases and Python for Data Science. <br/> 
            Currently studying Machine Learning algorithms.
            </p>
        </div>
      </div>
    </section>
  )
}

export default About