import React from 'react'

import './PlansCss.css'


import { Plan } from '../Plan'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Plans() {
  return (
    <section id="Plans" className='Plans'>
        <h2 className='Plans-principal-tittle'>Escoge el plan que mejor se ajuste a ti.</h2>
        <p className='Plans-secondary-tittle'>Cualquier plan te da acceso completo a nuestra plataforma.</p>
        <div className='Plans-Carousel'>
        <Carousel>
                <div>
                <Plan tittle="Pago Anual" price="99" css= "recomendated" textCallAtention="recomendado">
                *Ahorras $129 comparado al plan mensual.
                </Plan>

                </div>
                <div>
                <Plan tittle="Pago Mensual" price="1">
                *Ahorras $129 comparado al plan Dia.
                </Plan>
                
                </div>
                <div>
                <Plan tittle="Pago Día" price="0.50"> </Plan>
                </div>
            </Carousel>
            
        </div>
    </section>
  )
}

export  {Plans}