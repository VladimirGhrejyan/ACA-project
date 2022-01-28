import React, {useState, useEffect, useRef} from 'react';
import {Box} from '@mui/material';
import styles from './usersStyles';
import CardItem from './CardItem';
import FilterUsers from './FilterUsers';

function Users() {
    const {users_container, users_filter, users_list} = styles;
    const [data, setData] = useState([]);
    const [gender, setGender] = useState('');
    const [ageFrom, setAgeFrom] = useState('');
    const [ageTo, setAgeTo] = useState('');
    const [search, setSearch] = useState('');
    const [user, setUser] = useState('');
    const unfilteredData = useRef([]);
    const ID = +localStorage.id;

    useEffect( () => {
        fetch('http://localhost:8000/users')
        .then( res => res.json() )
        .then( res => {
                setData(res.filter( item => item.id !== ID ));
                unfilteredData.current = res.filter( item => {
                    if (item.id !== ID) {
                        return true;
                    } else {
                        setUser(item)
                    }
                } );
        } )
    }, [] )

    // useEffect( () => {
    //     Promise.all([
    //         fetch(`http://localhost:8000/users/${ID}`),
    //         fetch('http://localhost:8000/users')
    //     ])
    //     .then( res => [res[0].json(), res[1].json()] )
    //     .then( res => {
    //         setUser(res[0]);
    //         return res[1]
    //     } )
    //     .then( res => {
    //         setData(res.filter( item => item.id !== ID ));
    //         unfilteredData.current = res.filter( item => item.id !== ID );
    //     } )
    // }, [])


    const ageCalculate = (bday) => {
        return Math.trunc( ( new Date() - new Date(bday) ) / 31536000000 )
    }

    const handleSearchChange = (e) => {
        setSearch( e.target.value );
    }

    const handleGenderChange = (e) => {
        setGender( e.target.value );
    }

    const handleAgeFromChange = (e) => {
        setAgeFrom( e.target.value )
    }

    const handleAgeToChange = (e) => {
        setAgeTo( e.target.value )
    }

    const handleSearchClick = () => {
        setData( unfilteredData.current.filter( item => item.nickname.toLowerCase().includes( search.toLowerCase() ) ) )
    }

    const handleResetClick = () => {
        setData( unfilteredData.current )
    }

    const handleFollowsClick = () => {
        setData( unfilteredData.current.filter( item => user.following.includes(item.id) ) )
    }

    const handleFollowersClick = () => {
        setData( unfilteredData.current.filter( item => user.followers.includes(item.id) ) )
    }

    const handleFilterClick = () => {
        if (ageTo && gender) {
            setData(  unfilteredData.current.filter( item => ageFrom <= ageCalculate(item.dataBirthday) && ageTo >= ageCalculate(item.dataBirthday) && item.gender === gender )  )
        } else {
            if (ageTo) {
                setData(  unfilteredData.current.filter( item => ageFrom <= ageCalculate(item.dataBirthday) && ageTo >= ageCalculate(item.dataBirthday) ) )
            } else if (gender) {
                setData(  unfilteredData.current.filter( item => ageFrom <= ageCalculate(item.dataBirthday) && item.gender === gender ) )
            } else {
                setData(  unfilteredData.current.filter( item => ageFrom <= ageCalculate(item.dataBirthday) ) )
            }
        }
    }

    const usersList = data.map( (item) => <CardItem cardUser={item} key={item.id} /> );

    return (
        
        <Box sx={users_container}>

            <Box sx={users_filter}>
                <FilterUsers gender={gender} handleGenderChange={handleGenderChange} 
                             ageFrom={ageFrom} handleAgeFromChange={handleAgeFromChange} 
                             ageTo={ageTo} handleAgeToChange={handleAgeToChange} 
                             handleFilterClick={handleFilterClick} 
                             search={search} handleSearchChange={handleSearchChange}
                             handleSearchClick={handleSearchClick} handleResetClick={handleResetClick}
                             handleFollowsClick={handleFollowsClick} handleFollowersClick={handleFollowersClick}
                />
            </Box>

            <Box sx={users_list}>
                { usersList }
            </Box>

        </Box>
  );
}

export default Users;

    // import { useAuth } from '../../hook/useAuth'
    // const [user, setUser] = useState();
    // const {user} = useAuth();
    

    // useEffect( () => {
    //     fetch(`http://localhost:8000/users/${localStorage.id}`)
    //     .then( (res) => res.json() )
    //     .then( (res) => setUser(res) )
    // }, [] )

    // useEffect( () => {
    //     fetch('http://localhost:8000/users')
    //     .then( (res) => res.json() )
    //     .then( (res) => {
    //         setData(res.filter( item => item.id !== localStorage.id ));
    //         unfilteredData.current = res.filter( item => item.id !== localStorage.id );
    //     } );
    //     return () => setData(null);
    // }, [] )

