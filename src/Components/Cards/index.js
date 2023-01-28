import React from 'react'

function Cards({img,tittle, children}) {
  return (
    <article>
        <figure>
            <img src={img}/>
        </figure>
        <h4>{tittle}</h4>
        {children}
    </article>
  )
}

export  {Cards}