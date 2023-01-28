import React from 'react'

import Batata from '../../Assets/Icons/Batata.png'

import './BannerCss.css'

function Banner() {
  return (
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
  )
}

export  {Banner}