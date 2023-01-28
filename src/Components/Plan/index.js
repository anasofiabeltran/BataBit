import React from 'react'

import './PlanCss.css'

function Plan({tittle,price, children}) {
  return (
    <div className='Plan'>
        <h4 className='Plan-tittle'>{tittle}</h4>
        <p className='Plan-price'><span>$</span>{price}</p>
        <p className='Plan-content'>{children}</p>
        <button> Escoger este</button>
    </div>
  )
}

export  {Plan}