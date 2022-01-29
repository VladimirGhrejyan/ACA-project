import {useEffect,useState} from 'react'
import {useAuth} from '../../hook/useAuth'
import DataCompare from './DataCompare';
import PasswordError from './PaswordError';
import { useNavigate } from 'react-router-dom';

const useMyData = () => {
    
    const navigate = useNavigate()
    const ID = localStorage.id;
    const {signout} = useAuth();
    const [image, setImage] = useState('');
    const [user, setUser] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);
    const [errors, setErrors] = useState({});
    const [newData,setNewData] = useState({});
    const [changedata, setChangedata] = useState( {
        firstName:"",
        lastName:"",
        password:"",
        againPassword:"",
        profileImage:""
    } )

    useEffect( () => {
      fetch(`http://localhost:8000/users/${ID}`)
      .then( res => res.json() )
      .then( res => {
        setUser(res);
        setImage(res.profileImage)
      } )
    }, [] )
  
  
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

 const deletProfile=()=>{
  fetch(`http://localhost:8000/users/${ID}`,{
      method:'DELETE',
      headers: {
        'Content-Type':'application/json',
      }
  })
  .then( () => {
    signout(() => navigate("/login"))
  } )
  }
  
  if(Object.values(errors).length === 0 && isCorrect ) {      

    console.log(newData);
    fetch(`http://localhost:8000/users/${user.id}`, {
      method: 'PUT',
      body: JSON.stringify({
      ...user,
      lastName: newData.lastName,
      firstName: newData.firstName,
      password: newData.password,
      againPassword: newData.password,
      profileImage: newData.profileImage
      }),
      headers: {
        'Content-type' : 'application/json; charset=UTF-8'
      }
    }).then( () => navigate("/") )
        
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewData(DataCompare(changedata,user));
    setErrors(PasswordError(changedata));
    setIsCorrect(true);
  }
  
  return { handleOnChange, handleSubmit, changedata, image, deletProfile, errors}
}

export default useMyData


// {
//   "firstName": "Hakob",
//   "lastName": "Hakobyan",
//   "nickname": "Hakob1",
//   "email": "hakob@mail.ru",
//   "password": "123456",
//   "againPassword": "123456",
//   "gender": "male",
//   "dataBirthday": "1994-04-04",
//   "profileImage": "https://cdn-icons-png.flaticon.com/512/149/149071.png",
//   "followers": [
//     1
//   ],
//   "following": [],
//   "id": 2
// }