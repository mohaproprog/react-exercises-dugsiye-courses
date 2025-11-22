import React, { useReducer } from 'react'
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
    <div className='bg-white p-20 rounded-2xl'>
      <h1 className='text-blue-500 text-3xl'>Multi-step Regestration</h1>
      {state.step === 1 && (
        <>
        <strong>Step 1: profile</strong>
        <br />
        <label htmlFor='firstName'>First Name:</label>
        <input className='border-2 rounded-sm m-2' onChange={handleChange} value={state.firstName} name='firstName' type="text" id='firstName'/>
        <br />
        <label htmlFor='lastName'>Last Name:</label>
        <input className='border-2 rounded-sm m-2' onChange={handleChange} value={state.lastName} name='lastName' type="text" id='lastName'/>
        <br />
        <button onClick={next}>Next</button>
        </>
      )}
      {state.step === 2 && (
        <>
        <strong>Step 2: Contact</strong>
        <br />
        <label htmlFor='email'>Email:</label>
        <input className='border-2 rounded-sm m-2' onChange={handleChange} value={state.email} name='email' type="email" id='email'/>
        <br />
        <label htmlFor='number'>Phone:</label>
        <input className='border-2 rounded-sm m-2' onChange={handleChange} value={state.number} name='number' type="number" id='number'/>
        <br />
        <button onClick={back}>Back</button>
        <button onClick={next}>Next</button>
        </>
      )}
      {state.step === 3 && (
        <>
        <strong>Step 3: Review</strong>
        <br />
        <strong>First Name: </strong> <span className={state.firstName? "text-green-500": "text-red-700"}>
          {state.firstName || "Not Entered"} </span><br />
        <strong>Last Name:</strong><span className={state.lastName? "text-green-500": "text-red-700"}>{state.lastName || "Not Entered"}</span> <br />
        <strong>Email: </strong><span className={state.email? "text-green-500": "text-red-700"}>{state.email || "Not Entered"} </span> <br />
        <strong>Phone:</strong><span className={state.number? "text-green-500": "text-red-700"}>{state.number || "Not Entered"} </span> <br />
        <button onClick={back}>Back</button>
        <button onClick={reset}>Confirm</button>
        </>
      )}

    </div>
  )
}

export default App