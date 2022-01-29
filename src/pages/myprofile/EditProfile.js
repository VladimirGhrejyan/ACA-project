import React from 'react'
import "./myProfileStyles.css"
import useLogicForEdit from "./useLogicForEdit"

function EditProfile() {
  
  const { changedata, handleOnChange, handleSubmit, image, deletProfile, errors} = useLogicForEdit();

return ( 
    <form className='parent'>
        <div className="containerChange" >
            
            {<img className="userImage" src={image}/>}
            
        </div>
        
        <div className = 'wrapperPassword'>
            <span className = 'top_text'>Change your Accaount</span>
          <div className = 'forPassword'>
            <input className = 'dataPass'    value = {changedata.password} name = "password" type = "password"
               placeholder = 'new password'  onChange={handleOnChange }/><br/>
               { changedata.password &&
                 <label htmlFor="password" className="errors">{errors.password}</label> }
            <input className = 'dataPass' value={changedata.againPassword} name = "againPassword" type="password"
               placeholder = 'retry new password' onChange={handleOnChange  }/><br/>
            <input className = 'dataPass' value={changedata.profileImage} name = "profileImage" type="text"
               placeholder = 'input Image URL' onChange={handleOnChange  }/><br/>
          </div>
        </div>

        <div className = 'dataInput'>
            <input className ='forInput' value = {changedata.firstName } name = "firstName"
              placeholder='change your name' type = "text" onChange = {handleOnChange}  /><br/>
            <input className='forInput'  value = {changedata.lastName } name = "lastName"
              placeholder='change your last name' type = "text" onChange = {handleOnChange} /><br/>
        </div>
        <div className='btnAllowed'>
               <button className='buttonChanger' onClick = {handleSubmit}>change ?</button>
               <button className='buttonChanger' id="deletebtn" onClick={deletProfile}>Delete profile</button>
           </div>
        
    </form>
)

}

    

export default EditProfile;