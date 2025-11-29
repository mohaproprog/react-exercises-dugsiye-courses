import React, { useState } from 'react'
import { useForm } from 'react-hook-form'


function App() {
  const {register,handleSubmit, formState: {errors} } = useForm();
  const [submittedData, setSubmittedData] = useState({});
  const [sendForm,setSendForm] = useState(false);
  console.log(errors.username);
  


  // handleSubmit
  const onsubmit = (data)=>{
    console.log(data);
    setSubmittedData(data)
    setSendForm(true)
    
  }
  return (
    <div className='bg-white h-120 p-10 rounded-2xl'>
      <h3 className='text-[#ffaa00] text-3xl mb-2 text-center'>Student Registration </h3>
      {/* username-------------------- */}
      {!sendForm?       <form onSubmit={handleSubmit(onsubmit)} >
        <label htmlFor="">student name</label> <br />
      <input className='inputForm' type="text"
      {...register("username",
        {required:"username is required",
          pattern:{
          value: /^[A-Za-z]{2,}$/,
          message: "Use at least 2 letters, No numbers"
        }}
      )} /> <br />
      {errors.username && <p className='errorP'>{errors.username.message}</p>}


      {/* email------------------- */}
      <label htmlFor="">student name</label> <br />
      <input className='inputForm' type="email"
      {...register("email",
        {required:"email is required",
          pattern:{
          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: "please enter valid email "
        }}
      )} /> <br />
      {errors.email && <p className='errorP'>{errors.email.message}</p>}

      {/* select grade---------------------------- */}
      <select className='border-2 border-[#ffaa00] mt-2 mb-2 outline-0'
      {...register("select",{required:"please select your grade"})}>
        <option value="">select a grade</option>
        <option value="grade 1">grade 1</option>
        <option value="grade 2">grade 2</option>
        <option value="grade 3">grade 3</option>
        <option value="grade 4">grade 4</option>
        <option value="grade 5">grade 5</option>
        <option value="grade 6">grade 6</option>
        <option value="grade 7">grade 7</option>
        <option value="grade 8">grade 8</option>
        <option value="grade 9">grade 9</option>
        
      </select>
      {errors.select && <p className='errorP'>{errors.select.message}</p>}

      {/* subject intrest---------------------- */}
      <p className='text-[#ffaa00]'>subjects intrest</p>
      <input
      type="checkbox"
      value="Mathematics"
      {...register("subjects", { required: "Pick at least one subject" })}
      />
      <label className="ml-2">Mathematics</label>
      <br />

      <input
      type="checkbox"
      value="English"
      {...register("subjects", { required: "Pick at least one subject" })}
      />
      <label className="ml-2">English</label>
      <br />
      <input
      type="checkbox"
      value="Physics"
      {...register("subjects", { required: "Pick at least one subject" })}
      />
      <label className="ml-2">Physics</label>
      <br />
      {errors.subjects && <p className='errorP'>{errors.subjects.message}</p>}

      

      {/* submit---------------------- */}
      <button type='submit'>Register</button>
    
      </form>:
      <div className="flex flex-col items-center justify-center">
      <div >✔️</div>

      {/* Heading */}
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Thank You!</h1>

      {/* Message */}
      <p className="text-center text-gray-700 mb-4">
        Dear <span className="font-semibold">{submittedData.username}</span>, your
        application <br /> has been successfully submitted.
      </p>

      {/* Submitted Details */}
      <div className="bg-white p-4 rounded-xl shadow-md mb-6 w-full max-w-md">
        <p><strong>Email:</strong> {submittedData.email}</p>
        <p><strong>Your Grade:</strong> {submittedData.select}</p>
        <p className='w-10'><strong>Subjects:</strong> {submittedData.subjects.join(", ") || "None"}</p>
      </div>

      {/* Done button */}
      <button onClick={()=>setSendForm(false)}> Done</button>
    </div>
        }




      {/* after registeration */}

    </div>
  )
}

export default App