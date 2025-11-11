

function Login({username,setUsername,setLogin}) {
    
    
    function handleSubmit (e){
        e.preventDefault()
        setLogin(true)
    }
  return (
    <div>
        <h1>log in</h1>
        <form onSubmit={handleSubmit} >
            <input type="text" placeholder='enter username' required
             value={username}
              onChange={(e)=> setUsername(e.target.value)}/>
            <input type="password" placeholder='enter password' required/>
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login