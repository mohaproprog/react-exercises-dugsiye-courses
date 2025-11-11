import React from 'react'

function UserList({user}) {
  return (
    <div>
        <ul>
            {user.map((u)=>(
               <li key={u.id} style={{listStyle:"none"}}>
                <p>Name: {u.name}</p>
                <p>Emasil: {u.email}</p>
               </li>
            ))}
        </ul>
    </div>
  )
}

export default UserList