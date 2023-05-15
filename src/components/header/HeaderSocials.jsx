import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'

function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href="https://github.com/EnriqueAguilarP" target="_blank"><FaGithub/></a>
        <a href="https://twitter.com/AguilarPrado21" target="_blank"><BsTwitter/></a>
        
    </div>
  )
}

export default HeaderSocials