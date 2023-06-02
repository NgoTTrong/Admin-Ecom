import {useState} from "react"

const Login = () => {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [alert,setAlert] = useState(false)

    function handleLogin(e){
      e.preventDefault()
      if (username == "admin" && password=="admin"){

      }else{
        setAlert(true);
      }
    }
    return (  
     <form className="login-form">
        <h3>Login Here</h3>
        {
          alert &&
          <p className="login-alert">Something went wrong</p>
        }
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" onChange={(e)=>{setUsername(e.target.value);setAlert(false)}} value={username}/>

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" onChange={(e)=>{setPassword(e.target.value);setAlert(false)}} value={password}/>

        <button onClick={handleLogin}>Log In</button>
        <div className="social">
          <div className="go"><i className="fab fa-google"></i>  Google</div>
          <div className="fb"><i className="fab fa-facebook"></i>  Facebook</div>
        </div>
     </form>
    );
}
 
export default Login;