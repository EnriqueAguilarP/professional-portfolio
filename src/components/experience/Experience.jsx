import React from 'react'
import './experience.css'
import {CiCircleCheck} from 'react-icons/ci'
import {CiDatabase} from 'react-icons/ci'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <CiCircleCheck className='experience__icon'/>
              <div>
                <h4>HTML</h4>
              </div>
            </article>

            <article className="experience__details">
              <CiCircleCheck className='experience__icon'/>
              <div>
                <h4>CSS</h4>
              </div>
            </article>

            <article className="experience__details">
              <CiCircleCheck className='experience__icon'/>
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>

            <article className="experience__details">
              <CiCircleCheck className='experience__icon'/>
              <div>
                <h4>React</h4>
              </div>
            </article>

            <article className="experience__details">
              <CiCircleCheck className='experience__icon'/>
              <div>
                <h4>Next</h4>
              </div>
            </article>

            <article className="experience__details">
              <CiCircleCheck className='experience__icon'/>
              <div>
                <h4>Tailwind</h4>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
                <CiDatabase className='experience__icon'/>
                <div>
                  <h4>NodeJs</h4>
                </div>
            </article>

            <article className="experience__details">
                <CiDatabase className='experience__icon'/>
                <div>
                  <h4>Express</h4>
                </div>
            </article>

            <article className="experience__details">
                <CiDatabase className='experience__icon'/>
                <div>
                  <h4>PostgreSQL</h4>
                </div>
            </article>

            <article className="experience__details">
                <CiDatabase className='experience__icon'/>
                <div>
                  <h4>Python</h4>
                </div>
            </article>

            <article className="experience__details">
                <CiDatabase className='experience__icon'/>
                <div>
                  <h4>Django</h4>
                </div>
            </article>

            <article className="experience__details">
                <CiDatabase className='experience__icon'/>
                <div>
                  <h4>MongoDB</h4>
                </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience