import "./style.css"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";



function SignIn(){
    const [nickname, setNickname] = useState("")
    const [password, setPassword] = useState("")
    const [data, setData] = useState()

    useEffect( () => {
      fetch('http://localhost:8000/users')
      .then( (res) => res.json() )
      .then( (res) => setData(res) )
    }, [] )

    const handleSubmit = () => {
      data.filter((user)=> {
        if (user.nickname === nickname && user.password === password)  {
           alert("Welcome")
           } else { alert(false) } })
    }
    return (
      <>
      <div className="window">
         <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png"/>
         <h2 id="wm">Welcome to Maket</h2>
            <input type="text" 
            placeholder=" Your nicknameName..." 
            value={nickname}
            onChange={e=>setNickname(e.target.value)}
            />
        <br/>
            <input type="password"
            placeholder=" Your password..."
            value={password}
            onChange={e=>setPassword(e.target.value)}
            />
        <br/>
        </div>
        
        <div>
         <button type="submit" className="logIN"
            onClick={handleSubmit}>Log In</button>
        </div>
        <br/>
          <Link to="/registor">
           <button className="Cr" 
           >Create new account</button>
           </Link>
        </>
      
    ) 
  }
  export default SignIn;