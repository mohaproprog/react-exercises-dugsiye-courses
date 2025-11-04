import React from 'react'
import UserCard from './UserCard'

function App() {
  const username = "mohamed";
  const email = "mohaproprog@gmail.com";
  return (
    <>
    <UserCard
     username={username}
     email={email}
    />
    <UserCard
     username={"ali"}
     email={"ali@gmail.com"}
    />
    </>
      )
}

export default App