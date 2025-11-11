

function WelcomePage({username,setLogin,setUsername}) {
    function handleLogout(){
        setLogin(false);
        setUsername("");
    }
  return (
    <div>  
        <h1>hi welcome,{username}</h1>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default WelcomePage