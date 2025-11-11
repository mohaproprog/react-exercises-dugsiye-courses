import React, { useEffect, useState } from 'react'

function App() {
  const [user,setUser] = useState("");
  const [userSearch,setUserSearch] = useState("");
  const [userInfo,setUserInfo] = useState([]);
  const [loding,setLoding] = useState(false);

  const searchBtn = ()=>{
    setUser(userSearch)
    setUserSearch("");
  }
  useEffect(()=>{
    if(!user) return;
    const getUser = async ()=> {
      
      try{
        setLoding(true)
        const res = await fetch(`https://api.github.com/users/${user}`);
        const data = await res.json();
        console.log(data);
        setLoding(false)
        setUserInfo(data)
        
        

      }
      catch(err){
        console.error("error",err)

      }
      
    }
    getUser()

  },[user])
  if(loding) return(
    <p className='loding'>Loding.......</p>
  )
  return (
    <div className='card'>
      <h1>get every githiub user</h1>
      <div className="inputbtn">
        <input type="text"
       placeholder='search username'
        value={userSearch}
         onChange={(e)=>setUserSearch(e.target.value)} />
      <button onClick={searchBtn}>search</button>
      </div>
      <ul>
        {userInfo.login?
        <>
          <img src={userInfo.avatar_url} alt="user image" />
          <p>Login: {userInfo.login}</p>
          <p>Name: {userInfo.name? userInfo.name: "No Name"}</p>
          <p>Bio: {userInfo.bio? userInfo.bio: "No Bio"}</p>
          <p>Followers: {userInfo.followers? userInfo.followers: 0}</p>
          <p>PubLic repos: {userInfo.public_repos? userInfo.public_repos: "No Repos" }</p>
          <p>Location: {userInfo.location? userInfo.location: "No Location"}</p>
        
        </>
        : <>
        <p>User not found</p>
        <p>404</p>
        </>
        }
      </ul>
    </div>
  )
}

export default App
