import React, { useState } from 'react'

function App() {
  const [formValue, setFormValue] = useState ({
    username:"",
    email:"",
    password: "",
  })
  const [selectValue, setSelectValue] = useState ("");
  const [accepted, setAccepted] = useState (false);
  const [sendForm, setSendForm] = useState (false);
  const HanadleSubmit = (e)=>{
    e.preventDefault();
    if(selectValue == ""){
      alert("please select a country");
      return
      
    }
    if(!accepted){
      alert("please accept our terms");
      return
      
    }
    setSendForm(true);
    console.log("submitted",formValue);
    
  }
  const handleChnage = (e)=>{
    const {name,value} = e.target;
    setFormValue((prev)=> ({...prev, [name]: value}))
    console.log(name, value);

  }
  const handleSelectChnage = (e)=>{
    setSelectValue(e.target.value)
    console.log(e.target.value);
    

  }
  const handleChnageRadio = (e)=>{
    setAccepted(e.target.checked);
    console.log(e.target.checked);
  }
  const backToForm = ()=>{
    setSendForm(false);
    setFormValue({email:"", username:"", password:""});
    setSelectValue("");
    setAccepted(false);
    
    
  }
  return (
    <div>
      {!sendForm? 
      <form onSubmit={HanadleSubmit}>
        <input name="username" value={formValue.username}
        placeholder='Enter your username' required
        onChange={handleChnage}/>
        <br />
        <input name="email" value={formValue.email} 
        placeholder='Enter your email' required
        onChange={handleChnage}/> <br />
        <input name="password" value={formValue.password} required
        placeholder='Enter a password'
        onChange={handleChnage}/> <br />
        <select value={selectValue} onChange={handleSelectChnage}>
          <option>Choose a country</option>
          <option>kenya</option>
          <option>somalia</option>
          <option>uk</option>
          <option>sweden</option>
          <option>turkey</option>
        </select> <br />
        <input type="checkbox" id="checkbox" value={accepted} onChange={handleChnageRadio} />
        <label htmlFor="checkbox">Accept out terms</label> <br />
        <button name='submit'>submit</button>
      </form>
      : <div>
        <p>Hi, {formValue.username}</p>
        <p>You sent the form, thanks</p>
      <button type='button' onClick={()=>setSendForm(false)}>Update</button>
      <button onClick={backToForm}>Done</button>
      </div>}

      
    </div>
  )
}

export default App