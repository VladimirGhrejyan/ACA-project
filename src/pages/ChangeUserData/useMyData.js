import React,{useEffect,useState} from 'react'
import {useAuth} from '../../hook/useAuth'
import DataCompare from './DataCompare';
const useMyData = () => {
    
    const {user} = useAuth();
    const Image = user.profileImage;
    const [newData,setNewData] = useState({})
    const [coret,setCoret] = useState(false)
    const [image, setImage] = useState([]);
    const [imageURLs,setImageURLs] = useState([])
    const [changedata, setChangedata] = useState( {
        firstName:"",
        lastName:"",
        password:"",
        datatBirthday:"",
        profileImage:""
        } )

    
    
    

  function onImageChange(e){
    setImage([...e.target.files]);
  }
console.log(image)
  
  const handleOnChange = (e) => {
    setChangedata(
      prev => {
        return {
          ...prev,
          [e.target.name]: e.target.value,
        }
      }
    ) 
  }

 useEffect(()=>{
    if(coret){
      
        fetch(`http://localhost:8000/users/${user.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                ...user,
                lastName: newData.lastName,
                firstName: newData.firstName,
                datatBirthday: newData.datatBirthday,
                profileImage: imageURLs[0]
            }),
            headers: {
            'Content-type' : 'application/json; charset=UTF-8'
            }
        })
        
    }

 },[newData])
  
 
    
  const handleSubmit = (e) => {
    e.preventDefault();
    setNewData(DataCompare(changedata,user))
    setCoret(true)
  }
    return { handleOnChange, handleSubmit, onImageChange,changedata, Image}


}
export default useMyData