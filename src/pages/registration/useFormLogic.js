import  {useEffect, useState} from "react"
import ErrorRegistor from "./ErrorRegistor"
import {useNavigate} from "react-router-dom"

function useFormLogic( ) {

    const navigate = useNavigate();
    const [dataFetch, setDataFetch ] = useState([]);
    const [errors, setErrors] = useState({});
    const [user, setUser] = useState( {
      firstName:"",
      lastName:"",
      nickname:"",
      email:"",
      password:"",
      againPassword:"",
      gender: "",
      dataBirthday:"",
      profileImage: "https://restorixhealth.com/wp-content/uploads/2018/08/No-Image.png",
      followers: [],
      following: []
    } )
    
    useEffect( () => {
      fetch('http://localhost:8000/users')
        .then( (res) => res.json() )
        .then( (res) => setDataFetch(res))
        return () => setDataFetch(null)
       }, [errors] )
  
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
    
    const checkValidity = () => {
      return !!(user.firstName && user.lastName && user.nickname && 
        user.password && user.againPassword && user.gender && user.dataBirthday)
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      setErrors(ErrorRegistor(user,dataFetch));

      if (Object.values(errors).length === 0 && checkValidity()) {      
          
        fetch('http://localhost:8000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(user)
        }).then(() => navigate("/login"))
      };

    }

    return {handleChange, handleSubmit, errors, user}

}
export default useFormLogic