import {useState, useEffect } from "react"
import {useNavigate } from "react-router-dom"
// import {useAuth} from "../../hook/useAuth"
import EditProfile from "./EditProfile"

export default function PasswordForEdit() {

    const ID = localStorage.id;
    const navigate = useNavigate()
    const [user, setUser] = useState('');
    const [value, setValue] = useState("")
    // const password = user.password
    
    useEffect( () => {
        fetch(`http://localhost:8000/users/${ID}`)
        .then( res => res.json() )
        .then( res => setUser(res) )
    }, [] )
    
    if(value === user.password) {
        return (<EditProfile />)
    }
    
    return(
        <div className="PasswordForEdit">
             <input type="password" className="PasswordEditInput"
                placeholder=" for edit please input pasword..."
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <button className="CancelBtnFromPass" onClick={()=>navigate("/")}>Cancel</button>
        </div>
    )

}