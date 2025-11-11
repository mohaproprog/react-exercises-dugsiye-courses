import React, { useState } from 'react'
import Login from './Login'
import WelcomePage from './welcomePage'

function App() {
  const [username,setUsername] = useState("")
  const [login,setLogin] = useState(false)
  return (
    <div>
      {!login?
       <Login username={username} setUsername={setUsername}
      login={login} setLogin={setLogin}/> 
      : <WelcomePage username={username} setLogin={setLogin} setUsername={setUsername}/> }
      
    </div>
  )
}

export default App