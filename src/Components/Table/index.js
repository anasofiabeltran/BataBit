import React from 'react'

import './TableCss.css'

function Table() {
  return (
    <table className='Table'>
      <div className='Table-column1'>
        <p>Bitcoin</p>
                
          <p>Ethereum</p>
                
          <p>Ripple</p>
                
          <p>Stellar</p>

      </div>
      <div className='Table-column2'>
        <p>$ 1.96</p>
                
          <p>$ 0.07</p>
                
          <p>$ 2.15</p>
                
          <p>$ 4.96</p>

      </div>

    </table>
  )
}

export  {Table}