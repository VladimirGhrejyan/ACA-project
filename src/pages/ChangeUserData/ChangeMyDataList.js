import React from 'react'
import "./ChanhgeUserData.css"
import useMyData from './useMyData';

function ChangeMyDataList(){
  
  const { changedata, handleOnChange, handleSubmit, Image, onImageChange } = useMyData();
 

return (
    <form className='parent'>
        <div className="containerChange" >
            
            <input className="buttonImage" type="file" multiple accept="image/*" className="buttonImage" onChange={onImageChange}/>
            {<img className="userImage" src={Image}/>}
            
        </div>
        
        <div className = 'wrapperPassword'>
            <span className = 'top_text'>Change your Accaount</span>
          <div className = 'forPassword'>
            <input className = 'dataPass' 
               placeholder = 'old pasword'/><br/>
            <input className = 'dataPass'  name='password'   type="text" onChange={handleOnChange} 
               placeholder = 'new pasword' value = {changedata.password}/><br/>
            <input className = 'dataPass'  
               placeholder = 'retry new password'/><br/>
          </div>
        </div>

        <div className = 'dataInput'>
            <input className ='forInput' value = {changedata.firstName } name = "firstName"
              placeholder='change your name' type = "text" onChange = {handleOnChange}  /><br/>
            <input className='forInput'  value = {changedata.lastName } name = "lastName"
              placeholder='change your last name' type = "text" onChange = {handleOnChange} /><br/>
            <input className='forInput'  value = {changedata.datatBirthday } name = "Birthday"
              placeholder='change your birthday'  type = "date" onChange = {handleOnChange} />
        </div>
        <div className='btnAllowed'>
               <button className='buttonChanger' onClick = {handleSubmit}>change ?</button>
               <button className='buttonChanger' id="deletebtn">Delete profile</button>
           </div>
        
    </form>
)

}

    

export default ChangeMyDataList;