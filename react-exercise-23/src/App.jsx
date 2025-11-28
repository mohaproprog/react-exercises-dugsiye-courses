import React, { useState } from 'react'
import './app.css'

function App() {
  const [formValue, setFormValue] = useState({
    username:"",
    email:"",
    role:"",
    YearsExp:"",
    terms:false,
    notifications:false,
    skills:[],
  });
  const [errors,setErrors]= useState({});
  const [sendForm,setSendForm]= useState(false);

  // validation form
  const validationForm = ()=>{
    const error ={};
    if(!formValue.username.trim()){
      error.username = "username is required";
    }
    
    if(!formValue.email.trim()){
      error.email = "email is required";
    }
    if(!formValue.role){
      error.role = "please select a role";
    }
    if(!formValue.YearsExp ){
      error.YearsExp = "Enter your experience";
    }
    if(!formValue.terms){
      error.terms = "must accept the terms";
    }
    if(formValue.skills.length === 0){
      error.skills = "must choose one skill"; 
      console.log(error.skills);
      
    }
    return error;

  }
  // handleSubmit
  const handleSubmit =(e)=>{
    e.preventDefault();
    const validationError = validationForm();
    console.log(Object.keys(validationError));
    if(Object.keys(validationError).length === 0){
      console.log("succsess");
    }
    else{
      setErrors(validationError)
      return;
    }
    setSendForm(true)
    
    
    
    console.log(formValue);
    
  }

  // handleChange
  const handleChange = (e)=>{
    const {name,value,type,checked} = e.target;
    console.log(name,value,type);
    if (name === "skills") {
    if (checked) {
      // add skill to array
      setFormValue((prev) => ({
        ...prev,
        skills: [...prev.skills, value],
      }));
    } else {
      // remove skill from array
      setFormValue((prev) => ({
        ...prev,
        skills: prev.skills.filter((skill) => skill !== value),
      }));
    }
  } else {
    setFormValue((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }
    // setFormValue((prev=>({...prev, [name]:type==="checkbox"? checked: value})));
      if (name === "username") {
    if (value.length < 2 || /\d/.test(value)) {
      setErrors(prev => ({
        ...prev,
        username: "Must be at least 2 letters, letters only"
      } ));
    } else {
      setErrors(prev => ({ ...prev, username: "" }));
    }
  }

  // --- EMAIL VALIDATION ---
  if (name === "email") {
    if (!value.includes("@")) {
      setErrors(prev => ({
        ...prev,
        email: "Email must contain @"
      }));
    } else {
      setErrors(prev => ({ ...prev, email: "" }));
    }
  }
  if (name === "YearsExp") {
    if (value > 50) {
      setErrors(prev => ({
        ...prev,
        YearsExp: "you can have experience more than 50 years "
      }));
    } else {
      setErrors(prev => ({ ...prev, YearsExp: "" }));
    }
  }
  
  }

  // #backToForm
  const backToForm=()=>{
    setSendForm(null);
    setFormValue({
      username:"",
    email:"",
    role:"",
    YearsExp:"",
    terms:false,
    notifications:false,
    skills:[],
  });
    
  }





  return (
    
    <div className='bg-white border-2 rounded-2xl p-4 min-h-4 flex justify-center items-center w-5xs'>
      {!sendForm?
      <div>
      <h2 className='text-center text-2xl font-semibold text-[blueviolet]'>developer application</h2>
      <form onSubmit={handleSubmit} >
        {/* username and email */}
        {/* username */}
        <label className='label'>Full name</label> <br />
        <input type="text" name='username'  id='inputValue' value={formValue.username} onChange={handleChange}/> <br />
        {errors.username && <p className='errorP'>{errors.username}</p>}
        {/* email */}
        <label>Email</label> <br />
        <input type="email" id='inputValue' name='email' value={formValue.email} onChange={handleChange} />
        {errors.email && <p className='errorP'>{errors.email}</p>}
        {/* select your role */}
        <p>Role</p>
        <select id='inputValue' name="role" value={formValue.role} onChange={handleChange}>
          <option >Select your role</option>
          <option>Frontend developer</option>
          <option>Backend developer</option>
          <option>Full Stack developer</option>
          <option>Mobile developer</option>
          <option>DevOp Engineer</option>
        </select>
        {errors.role && <p className='errorP'>{errors.role}</p>}
        
        {/* expirience */}
        <label>Years of experience</label> <br />
        <input type="number" name='YearsExp' id='inputValue' value={formValue.YearsExp} onChange={handleChange} />
        {errors.YearsExp && <p className='errorP'>{errors.YearsExp}</p>}
        {/* skills */}
        <p>Skills</p>
        
        <div className='flex gap-20'>
          <div className="skillCol">
          <div>
            <input type="checkbox" name="skills" value="react"  checked={formValue.skills.includes("react")} onChange={handleChange}  />
        <label>React</label>
          </div>
          <div>
        <input type="checkbox" name="skills" value="html"  checked={formValue.skills.includes("html")} onChange={handleChange}  />
        <label>Html</label>
        </div>
        <div>
        <input type="checkbox" name="skills" value="css"  checked={formValue.skills.includes("css")} onChange={handleChange}  />
        <label>css</label>
        </div>
        <div>
        <input type="checkbox" name="skills" value="javascript"  checked={formValue.skills.includes("javascript")} onChange={handleChange}  />
        <label>javascript</label>
        </div>
        </div>
        <div className="skillCol">
          <div>
            <input type="checkbox" name="skills" value="node js"  checked={formValue.skills.includes("node js")} onChange={handleChange}  />
        <label>Node js</label>
          </div>
          <div>
        <input type="checkbox" name="skills" value="database"  checked={formValue.skills.includes("database")} onChange={handleChange}  />
        <label>Database</label>
        </div>
        <div>
        <input type="checkbox" name="skills" value="api development"  checked={formValue.skills.includes("api development")} onChange={handleChange}  />
        <label>Api development</label>
        </div>
        <div>
        <input type="checkbox" name="skills" value="design"  checked={formValue.skills.includes("design")} onChange={handleChange}  />
        <label>Design</label>
        </div>
        </div>
        </div>
        {errors.skills && <p className='errorP'>{errors.skills}</p>}
        {/* aggree to the terms and conditions */}
        <div className='flex items-center gap-1'>
          <input type="checkbox" name="terms" value={formValue.terms}  onChange={handleChange}/>
        <label className={errors.terms? "text-red-500":""}>Agree to the terms and conditions</label>

        </div>
        {/* receive notiiofications */}
        <div className='flex items-center gap-1'>
        <input type="checkbox" name="notifications" value={formValue.notifications} onChange={handleChange}/>
        <label>Receive notifications about new opportunities </label></div>
        <button type="submit">Submit Application</button>
      </form>
      </div>
      :
       <div className="flex flex-col items-center justify-center bg-gray-50 p-6">
      {/* Icon or illustration */}
      <div className="mb-6 text-6xl">✔️</div>

      {/* Heading */}
      <h1 className="text-3xl font-bold mb-2">Thank You!</h1>

      {/* Message */}
      <p className="text-center  mb-4">
        Dear <span className="font-semibold">{formValue.username}</span>, your
        application has been successfully submitted.
      </p>

      {/* Submitted Details */}
      <div className="bg-white p-4 rounded-xl shadow-md mb-6 w-full max-w-md">
        <p><strong>Email:</strong> {formValue.email}</p>
        <p><strong>Your role:</strong> {formValue.role}</p>
        <p><strong>Years of experience:</strong> {formValue.YearsExp}</p>
        <p><strong>Skills:</strong> {formValue.skills.join(", ") || "None"}</p>
      </div>

      {/* Done button */}
      <button onClick={backToForm}>Done</button>
    </div>}
    </div>
  )
}

export default App