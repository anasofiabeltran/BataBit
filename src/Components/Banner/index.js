import React from 'react'

import Batata from '../../Assets/Icons/Batata.png'
import DownArrow from '../../Assets/Icons/mdi_keyboard_arrow_down.png'

import './BannerCss.css'
import { CallAtention } from '../CallAtention'

function Banner() {
  return (
    <>
      <section className='Banner'>
        <figure className='Banner-image'>
            <img  src={Batata} />
            <figcaption>
                Batatabit
            </figcaption>
        </figure>
        <p className='Banner-tittle'>La próxima revolución en el intercambio de criptomonedas.</p>
        <p className='Banner-subtittle'>Batatabit te ayuda a navegar entre los diferentes precios y tendencias.</p>
    </section>
    <CallAtention css="CallAtention">
      <a href="#Plans">
        <p> Conoce nuestros Planes </p>
        <img src={DownArrow} />
      </a>
    </CallAtention>

    </>
    

  )
}

export  {Banner}