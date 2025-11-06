import React, { useEffect, useState } from 'react'

function App() {
  const [name,setName] = useState("");
  const [greeting,setGreeeting] = useState("hello");
  
  useEffect(()=>{
    document.title = `${greeting}  ${name}`
    
    
  },[name])
  useEffect(()=>{
    document.title = "welcome";
    
    
  },[])

  return (
    <div>
      <label htmlFor="name" style={{display: "block"}}>enter your name</label>
      <input type="text" id='name' onChange={(e)=> setName(e.target.value)} value={name} />
      <label htmlFor="greeting" style={{display:"block"}}>enter a greeting</label>
      <input type="text" id='greeting' onChange={(e)=> setGreeeting(e.target.value)} value={greeting} />


    </div>
  )
}

export default App