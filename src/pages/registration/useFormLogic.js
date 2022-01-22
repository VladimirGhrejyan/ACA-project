import  {useEffect, useState} from "react"
import ErrorRegistor from "./ErrorRegistor"

function useFormLogic(submited) {

    const [dataFetch, setDataFetch ] = useState([])
    const [errors, setErrors] = useState({});
    const [datatIsCorect, setDataIsCorect] = useState(false)
    const [user, setUser] = useState( {
      firstName:"",
      lastName:"",
      nickname:"",
      email:"",
      password:"",
      againPassword:"",
      gender: "",
      datatBirthday:""
    } )
    
    useEffect( () => {
      fetch('http://localhost:8000/users')
        .then( (res) => res.json() )
        .then( (res) => setDataFetch(res))
        return () => setDataFetch(null)
       }, [errors] )
  
    useEffect( () => {
      if(Object.values(errors).length === 0 && datatIsCorect) {      
        submited(true);
        fetch('http://localhost:8000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
       
      })
      }
      // clear ussEffect code
    }, [errors])
  
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
    
    const handleSubmit = (e) => {
      e.preventDefault();
      setErrors(ErrorRegistor(user,dataFetch));
      setDataIsCorect(true)   
    }

    return {handleChange, handleSubmit, errors, user}

}
export default useFormLogic