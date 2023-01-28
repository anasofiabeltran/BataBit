import React from 'react'

function Plan({tittle,price, children}) {
  return (
    <div>
        <h4>{tittle}</h4>
        <p>{price}</p>
        {children}
    </div>
  )
}

export  {Plan}