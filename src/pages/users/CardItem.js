import React, { useEffect, useState } from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, Button} from '@mui/material';
// import { useAuth } from '../../hook/useAuth'
import {useNavigate} from 'react-router-dom';

function CardItem( props ) {
    
    // const {user} = useAuth();
    const ID = localStorage.id;
    const cardUser = props.cardUser;
    const navigate = useNavigate();
    const [user, setUser] = useState();
    const [follow, setFollow] = useState();

    useEffect( () => {
        fetch(`http://localhost:8000/users/${ID}`)
        .then( (res) => res.json() )
        .then( (res) => {
            setUser(res);
            if (res.following.includes(cardUser.id)) {
                setFollow(true)
            } else {
                setFollow(false)
            }
        } )

    }, [] )
        
    const handleOnClick = () => {
        if (follow) {
            Promise.all([
                fetch(`http://localhost:8000/users/${user.id}`, {
                    method: 'PUT',
                    body: JSON.stringify({
                        ...user,
                        following: user.following.filter( item => item !== cardUser.id )
                    }),
                    headers: {
                    'Content-type' : 'application/json; charset=UTF-8'
                    }
                }),
                fetch(`http://localhost:8000/users/${cardUser.id}`, {
                    method: 'PUT',
                    body: JSON.stringify({
                        ...cardUser,
                        followers: cardUser.followers.filter( item => item !== user.id )
                    }),
                    headers: {
                    'Content-type' : 'application/json; charset=UTF-8'
                    }
                })
            ]).then( setFollow(false) )
        }
        else {
            Promise.all([
                fetch(`http://localhost:8000/users/${user.id}`, {
                    method: 'PUT',
                    body: JSON.stringify({
                        ...user,
                        following: user.following.concat( [cardUser.id] )
                    }),
                    headers: {
                    'Content-type' : 'application/json; charset=UTF-8'
                    }
                }),
                fetch(`http://localhost:8000/users/${cardUser.id}`, {
                    method: 'PUT',
                    body: JSON.stringify({
                        ...cardUser,
                        followers: cardUser.followers.concat( [user.id] )
                    }),
                    headers: {
                    'Content-type' : 'application/json; charset=UTF-8'
                    }
                })
            ]).then( setFollow(true) )
        }
    } 

    return (
        <Card sx={{ maxWidth: 340, backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <CardMedia
                sx={ {overflow: 'hidden'} }
                component="img"
                alt="user pic"
                height="280"
                image="https://ichef.bbci.co.uk/news/976/cpsprodpb/F9B1/production/_118012936_beckham_getty.jpg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ color: 'gray' }} >
                    {cardUser.nickname}
                </Typography>
                <Typography variant="h6"  sx={{ color: 'gray' }}>
                    {cardUser.firstName} {cardUser.lastName}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="outlined" color="inherit" size="small" sx={{ color: 'gray' }} onClick={ () => navigate(`/users/${cardUser.id}`) }>Learn More</Button>
                <Button variant="outlined" color="inherit" size="small" sx={{ color: 'gray' }} onClick={handleOnClick} >{ (follow) ? 'Unfollow' : 'Follow' }</Button>
            </CardActions>
        </Card>
    );
}

export default CardItem;
