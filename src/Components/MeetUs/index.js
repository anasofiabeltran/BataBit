import React from 'react'

import Clock from '../../Assets/Icons/clock.png'

import { Cards } from '../Cards'

function MeetUs() {
  return (
    <section>
        <h2>Creamos un producto sin comparación.</h2>
        <p>Confiable y diseñado para su uso diario.</p>
        <Cards img={Clock} tittle="Tiempo real"></Cards>
    
    </section>
  )
}

export  {MeetUs}