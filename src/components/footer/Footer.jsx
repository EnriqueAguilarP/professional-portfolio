import React from 'react'
import './footer.css'
import { FaGithub } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Enrique Aguilar</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/EnriqueAguilarP"><FaGithub/></a>
        <a href="https://twitter.com/AguilarPrado21"><BsTwitter/></a>
      </div>
    </footer>
  )
}

export default Footer