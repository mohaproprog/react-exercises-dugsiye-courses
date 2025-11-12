import React, { useReducer } from 'react'

const initialValue = {countA: 0, countB: 0};
const reducer = (state,action)=>{
  switch(action.type){
    case "incrementA":
    return{...state, countA : state.countA +1}
    case "DecrementA":
    return{...state, countA : state.countA -1}
    case "incrementB":
    return{...state, countB : state.countB +1}
    case "DecrementB":
    return{...state, countB : state.countB +1}
    case "resetBoth":
    return initialValue;
    default: return state
  }
}
function App() {
  const [state,dispatch] = useReducer(reducer,initialValue)
  return (
    <div>
      <h1>double counter</h1>
      <h2>counter A: {state.countA}</h2>
      <button onClick={()=>dispatch({type:"DecrementA"})}>-A</button>
      <button onClick={()=>dispatch({type:"incrementA"})}>+A</button>
      <h2>counter B: {state.countB}</h2>
      <button onClick={()=>dispatch({type:"DecrementB"})}>-B</button>
      <button onClick={()=>dispatch({type:"incrementB"})}>+B</button>
      <div style={{marginTop:20}}></div>
      <button onClick={()=>dispatch({type:"resetBoth"})}>Reset</button>
    </div>
  )
}

export default App