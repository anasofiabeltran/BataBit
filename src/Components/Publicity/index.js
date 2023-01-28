import React from 'react'

import publicity from '../../Assets/Img/bitcoinbaby.png'
import './PublicityCss.css'

function Publicity() {
  return (
    <figure className='Publicity'>
        <img src={publicity}/>
        <figcaption>
            Conócelo hoy
        </figcaption>
    </figure>
  )
}

export  {Publicity}