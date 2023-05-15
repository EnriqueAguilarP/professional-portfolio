import React from 'react'
import './header.css'
import Profile from './Profile'
import Me from '../../assets/me.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello! My name is</h5>
        <h1>Enrique Aguilar</h1>
        <h5 className="text-light">Front-end JavaScript Developer</h5>
        <Profile/>
        <HeaderSocials/>
        <div className="me">
          <img src={Me} alt="me"/>
        </div>

      </div>
    </header>  
  )
}

export default Header