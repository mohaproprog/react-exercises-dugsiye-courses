import React, { useState } from 'react'
import UserList from './UserList'

function App() {
  const [user,setUser] = useState([
    {id:1, name:"mohamed", email:"mohaprprog@gmail.com"},
    {id:2, name:"mc", email:"diugsiiye@gmail.com"},
    {id:3, name:"abdi", email:"abdi@gmail.com"},
  ])
  return (
    <div>
      {user.length > 0? <UserList user={user}/> : "user Not find"}
    </div>
  )
}

export default App