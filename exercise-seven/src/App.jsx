import React, { useEffect, useState } from 'react'

function App() {
  const [mouseMover,setMouseMover] = useState({
    x:0, y:0
  })
  const handleChnage = (e)=>{
    setMouseMover({
      x: e.clientX,
      y: e.clientY
    })
  }
  useEffect(()=>{
    window.addEventListener("mousemove", handleChnage)
    return(
      window.removeEventListener("mousemove",handleChnage)
    )
  },[])

    
  return (
    <div>
      <p>mouse x:{mouseMover.x}</p>
      <p>mouse y:{mouseMover.y}</p>
    </div>
  )
}

export default App