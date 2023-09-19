import React from 'react'

import Bitcoin from '../../Assets/Img/Bitcoin.png'

import { Table } from '../Table'
import { CallAtention } from '../CallAtention'
import './MainCss.css'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Main() {
  return (
    <section className='Main'>
        <figure>
            <img src={Bitcoin}/>
        </figure>
        <h2 className='Main-principal-tittle'>Visibilizamos todas las tasas de cambio.</h2>
        <p className='Main-text'>Traemos información en tiempo real de las casas de cambio y las monedas más importantes del mundo.</p>
        <h4 className='Main-second-tittle'>Monedas</h4>
        {window.innerWidth < 500 && 
        <Carousel>
          <Table />
          <Table />
        </Carousel>
        }
        {!(window.innerWidth < 500 )&&
        <div className='carousel-custom'>
           <Table />
            <Table />
        </div>  
        }
        <CallAtention css="updated"> 
          <p>Actualizado: 19 Julio 23:45</p>
        </CallAtention>
    </section>
  )
}

export  {Main}