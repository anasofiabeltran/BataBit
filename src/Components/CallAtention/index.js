import React from 'react'

import './CallAtentionCss.css'


function CallAtention({css,children}) {
  return (
    <div className={css}>
        {children}
    </div>
  )
}

export  {CallAtention}