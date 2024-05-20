import React, { useState, useEffect } from 'react'
import Popup from './Popup'

const App = () => {

  const [showPopup, setShowPopup] = useState(null)

    useEffect(() => {
      setTimeout(()=>{
        setShowPopup(true)
      },1000)
    },[])
    
    const handleClick = () => {
        setShowPopup(false)
    }

  return (
    <>
      { showPopup && <Popup handleClick={handleClick} />}
    
      <div>
        <h1>This is our Home Page</h1>
      </div>
    </>
  )
}

export default App
