import React from 'react'

import { CallAtention } from '../CallAtention'

import './PlanCss.css'

function Plan({tittle,price, children,css,textCallAtention}) {
  return (
    <div className='Plan'>
      <CallAtention css={css}>
        <p>{textCallAtention} </p>
      </CallAtention>
        <h4 className='Plan-tittle'>{tittle}</h4>
        <p className='Plan-price'><span>$</span>{price}</p>
        <p className='Plan-content'>{children}</p>
        <button> Escoger este</button>
    </div>
  )
}

export  {Plan}