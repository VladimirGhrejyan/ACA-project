import { Link } from "react-router-dom";
import Birthday from "./Birthday";
import Gender from "./Gender";
import "./create.css"
import {useState} from 'react';

function CreateAccount() {
  const [isPassword, setIsPassword] = useState(false);
  const [user, setUser] = useState( {
    firstName:"",
    lastName:"",
    nickname:"",
    email:"",
    password:"",
    gender: ""
  } )

  
  const handleChange = (e) => {
    setUser(
      prev => {
        return {
          ...prev,
          [e.target.name]: e.target.value,
        }
      }
    )
  }
  
  const handleSubmit = () => {

    fetch('http://localhost:8000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(user)
    })
  }

  return (
      <form className="forma">
       <Link to="/signin">
        <img className="cbtn"
         src="https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/__geKiQnSG-.png"/>
       </Link> 

        <input 
          className="input"
          type="text"
          placeholder="First Name..."
          name="firstName"
          value={user.firstName}
          onChange={handleChange}
        />
  <br/>
        <input
          className="input"
          type="text"
          placeholder="Last Name..."
          name="lastName"
          value={user.lastName}
          onChange={handleChange}
        />
  <br/>
        <input
          className="input"
          type="text"
          placeholder="Nickname..."
          name="nickname"
          value={user.nickname}
          onChange={handleChange}
        />

  <br/>          
        <input 
          className="input"
          type="text"
          placeholder="Mobile number or email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
  <br/>
        <input
          id="pass"
          className="input"          
          type={isPassword ? "text" : "password"}
          placeholder="New password"
          value={user.password}
          onChange={handleChange} 
          name="password"
        />
  <br/>
        <img 
          className="eyesIcon"
          src={isPassword ?
           "https://cdn-icons-png.flaticon.com/128/118/118034.png" : 
           "https://cdn-icons.flaticon.com/png/128/6107/premium/6107590.png?token=exp=1642284572~hmac=e8884933d45d4c175b4dd12163c402d7"}
          onClick={ () => setIsPassword( !isPassword ) }
        /> 
  <br/>
        <input
          id="passAgain"
          className="input"
          type={isPassword ? "text" : "password"}
          placeholder="again new password"
          name="password"
          value={user.againPassword}
          onChange={handleChange}
        />
  <br/>
        <Birthday />
        <Gender user={user} handleChange={handleChange}/>
  <br/>
      <button className="SiginUp" type="submit" onClick={handleSubmit}>Sigin Up</button>

      </form>
      
    )
}
export default CreateAccount;