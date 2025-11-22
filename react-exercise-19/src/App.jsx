import React, { useReducer } from 'react'
import styles from './app.module.css';
  const initialState = {
        step :1,
        firstName: "",
        lastName: "",
        email:"",
        number:"",
  }
  const reducer = (state,action)=>{
    switch (action.type){
      case "updatedField":
            return { ...state, [action.field]: action.value }
       
      case "next":
        return {...state, step: state.step +1 }
      case "prev":
        return {...state, step:state.step -1 }
      case "reset":
        return initialState;
      default: return state
    }

  }



function App() {
  const [state,dispatch] = useReducer (reducer,initialState);

  // buttons
  function next (){
    dispatch({type:"next"})
    console.log(state.firstName);
    
  }
  function back (){
    dispatch({type:"prev"})
  }
  function handleChange(e){
    dispatch({type:"updatedField",field: e.target.name, value: e.target.value})
  }
  function reset (){
    dispatch({type:"reset"});
    alert("form submitted succseccfully")
  }



  
  
  return (
    <div className={styles.Container}>
      <h1 className={styles.header}>Multi-step Regestration</h1>
      {state.step === 1 && (
        <>
        <strong>Step 1: profile</strong>
        <br />
        <label htmlFor='firstName'>First Name:</label>
        <input onChange={handleChange} value={state.firstName} name='firstName' type="text" id='firstName'/>
        <br />
        <label htmlFor='lastName'>Last Name:</label>
        <input onChange={handleChange} value={state.lastName} name='lastName' type="text" id='lastName'/>
        <br />
        <button onClick={next}>Next</button>
        </>
      )}
      {state.step === 2 && (
        <>
        <strong>Step 2: Contact</strong>
        <br />
        <label htmlFor='email'>Email:</label>
        <input onChange={handleChange} value={state.email} name='email' type="email" id='email'/>
        <br />
        <label htmlFor='number'>Phone:</label>
        <input onChange={handleChange} value={state.number} name='number' type="number" id='number'/>
        <br />
        <button onClick={back}>Back</button>
        <button onClick={next}>Next</button>
        </>
      )}
      {state.step === 3 && (
        <>
        <strong>Step 3: Review</strong>
        <br />
        <strong>First Name: </strong> <span className={state.firstName? styles.filled: styles.notFilled}>{state.firstName || "Not Entered"}</span> <br />
        <strong>Last Name:</strong><span className={state.lastName? styles.filled: styles.notFilled}>{state.lastName || "Not Entered"}</span> <br />
        <strong>Email: </strong><span className={state.email? styles.filled: styles.notFilled}>{state.email || "Not Entered"}</span> <br />
        <strong>Phone:</strong><span className={state.number? styles.filled: styles.notFilled}>{state.number || "Not Entered"}</span> <br />
        <button onClick={back}>Back</button>
        <button onClick={reset}>Confirm</button>
        </>
      )}

    </div>
  )
}

export default App