import React from 'react'

import './CardsCss.css'

function Cards({img,tittle, children}) {
  return (
    <div className='Cards'>
        <figure>
            <img src={img}/>
        </figure>
        <h4>{tittle}</h4>
        {children}
    </div>
  )
}

export  {Cards}