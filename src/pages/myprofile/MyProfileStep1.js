import "./myProfileStyles.css"
import React, {useState, useEffect} from 'react'

export default function MyProfile(props){
   
  const ID = localStorage.id;
  const [user, setUser] = useState('');
  const stepPage = props.stepPage

  useEffect( () => {
    fetch(`http://localhost:8000/users/${ID}`)
    .then( res => res.json() )
    .then( res => {
      setUser(res);
    } )
  }, [] )
  
  return (
    <div className="parent">
        
      <div>
        <img src={user.profileImage} className="containerChange"/>
      </div>
      
      <div className="userDataOnTable">
        <div className="wrapperUserData">
          <span>First Name: &nbsp;&nbsp;&nbsp; {user.firstName}</span><br/>
          <span>Last Name: &nbsp;&nbsp;&nbsp; {user.lastName}</span><br/>
        </div>

        <div className="stabilData">
            <span>Birthday: &nbsp;&nbsp;&nbsp;{user.dataBirthday}</span><br/>
            <span>nickname: &nbsp;&nbsp;&nbsp; {user.nickname}</span><br/>
            <span>e-mail: &nbsp;&nbsp;&nbsp; {user.email}</span><br/>
            <span> Gender: &nbsp;&nbsp;&nbsp; {user.gender}</span>
        </div>
      </div>

      <div>
        <button type="button" className="buttonChanger" id="EditB" onClick = {stepPage} >Edit</button>
      </div>
    </div>
  )

}