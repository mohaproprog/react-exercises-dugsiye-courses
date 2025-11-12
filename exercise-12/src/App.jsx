import React, { useState } from 'react'

function App() {
  const [count,setCount] = useState(0);
  function increment(){
    setCount(prev=> prev +1)
  }
  function Decrement(){
    setCount(prev=> prev -1)
  }
  return (
    <div>
      <h1>count: {count}</h1>
      <button disabled={count< 1} onClick={Decrement}>Decrement</button>
      <button onClick={increment}>icrement</button>
    </div>
  )
}

export default App