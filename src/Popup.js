import React, { useState, useEffect } from 'react'
import './popup.css'
const Popup = ({handleClick}) => { 

  return (
    <>
        <div className='container'>
            <div className='wrapper'>
            </div>

            <div className='popup-box'>
                <h1>This is a Popup</h1><br/>
                <button onClick={handleClick}>Close</button>
            </div>
        </div>
        
    </>
  )
}

export default Popup
