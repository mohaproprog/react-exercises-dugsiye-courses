import React, { useState } from 'react'

function App() {
  const [turnOn, setTurnOn]=useState(false);

  const handleClick =()=>{
    setTurnOn(!turnOn);

  }
  return (
    <div>
      <p> The button is {!turnOn? "Off" : "On"}</p>
      <button onClick={handleClick}>turn {turnOn? "Off" : "On"}</button>
    </div>
  )
}

export default App