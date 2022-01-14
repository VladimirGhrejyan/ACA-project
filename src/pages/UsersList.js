import React from 'react'
import {useState, useEffect} from 'react'

function UsersList() {
    const [data, setData] = useState();
    const [isLoaded, setIsLoaded] = useState(false)
    useEffect(() => {
        fetch('http://localhost:8000/users')
        .then(res => res.json())
        .then((res) => {
            setData(res);
            setIsLoaded( prev => !prev )
        })
    }, [])

    

    return (
        <>
        {
            isLoaded === true && 
            <ul>
                {data.map( item => <li key={item.name}>{item.name}</li> )}
            </ul>
        }
        </>
    )
}

export default UsersList;