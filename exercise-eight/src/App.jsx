import React, { useEffect, useState } from 'react'

function App() {
  const [time,setTime] =useState(0);
  const [timeRunning,setTimeRunnig] =useState(false);
  useEffect(()=>{
    if (!timeRunning) return;
    if (time <= 0) {
      setTimeRunnig(false);
      return;
    }
    const timerid = setTimeout(() => {
      setTime(prev => prev > 0 && prev -1);
      console.log(time);
      
    }, 1000);
    return () => clearTimeout(timerid);
  
  }, [timeRunning, time])

  const startClick =()=>{
    if(time > 0){

      setTimeRunnig(true)
    }
  }
  const stopClick =()=>{
    setTimeRunnig(false)
  }
  const resetClick =()=>{
    
    setTimeRunnig(false)
    setTime(0)
  }
  return (
    <div>
      <h1>countdown timer</h1>
      <label htmlFor="time">set time (seconds)</label>
      <input type="number" id='time' onChange={(e)=> setTime((e.target.value))} value={time}/> 
      <p>time left : {time} seconds</p>
      <button disabled={time > 0 && timeRunning} onClick={startClick}>start</button>
      <button disabled={time === 0 || !timeRunning} onClick={stopClick}>stop</button>
      <button disabled={time === 0} onClick={resetClick}>reset</button>

    </div>
  )
}

export default App