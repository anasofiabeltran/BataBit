import React from 'react'


import './FooterCss.css'
import Batata from '../../Assets/Icons/Batata.png'


function Footer() {
  return (
    <footer className='footer'>
      <article>
        <p>Linkedin</p> 
        <p>Crunchbase</p> 
        <p>Hackernews</p> 
      </article>
      <article>
        <figure className='footer-logo'>
          <img src={Batata}/>
          <figcaption>
            ® Batatabit 2020
          </figcaption>
        </figure>
        
      </article>
    </footer>
  )
}

export  {Footer}