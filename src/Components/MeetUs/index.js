import React from 'react'

import Clock from '../../Assets/Icons/clock.png'
import './MeetUsCss.css'

import { Cards } from '../Cards'

function MeetUs() {
  return (
    <section className='MeetUs'>
      <div>
        <h2 className='MeetUs-principal-tittle'>Creamos un producto sin comparación.</h2>
          <p className='MeetUs-secondaru-tittle'>Confiable y diseñado para su uso diario.</p>
          <div className='MeetUs-Cards'>
            <Cards img={Clock} tittle="Tiempo real">
            <p> Nuestro API toma información minuto a minuto sobre las tasas que más determinan el comportamiento.</p>
            </Cards>
            <Cards img={Clock} tittle="Tiempo real">
            <p> Nuestro API toma información minuto a minuto sobre las tasas que más determinan el comportamiento.</p>
            </Cards>
            <Cards img={Clock} tittle="Tiempo real">
            <p> Nuestro API toma información minuto a minuto sobre las tasas que más determinan el comportamiento.</p>
            </Cards>
            <Cards img={Clock} tittle="Tiempo real">
            <p> Nuestro API toma información minuto a minuto sobre las tasas que más determinan el comportamiento.</p>
            </Cards>
          </div> 
      </div>
    </section>
  )
}

export  {MeetUs}