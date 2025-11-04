import React from 'react'

function UserCard({username,email}) {
  return (
    <div>
        <h2>username:{username}</h2>
        <p>user email: {email}</p>
    </div>
  )
}

export default UserCard