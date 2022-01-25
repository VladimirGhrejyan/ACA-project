import React, {useState, useEffect} from 'react';
import { Box, CardMedia, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

function UserPage() {

    const [data, setData] = useState([]);
    const {id} = useParams();

    const ageCalculate = (bday) => {
        return Math.trunc( ( new Date() - new Date(bday) ) / 31536000000 )
    }

    useEffect( () => {
        fetch(`http://localhost:8000/users/${id}`)
        .then( (res) => res.json() )
        .then( (res) => setData(res) );
        
    }, [id] )
  
    return (
        <Box sx={ {display: 'grid', gridTemplateColumns: '30% 70%', marginLeft: '10px', marginTop: '10px', gridColumnGap: '50px'} } >
            
            <Box>
                <CardMedia
                    component="img"
                    image="http://d279m997dpfwgl.cloudfront.net/wp/2020/02/krivak-1-1000x750.jpg"
                    alt="profpic"
                    height="420"
                />
            </Box>

            <Box>
                <Typography variant="h4" component="div" sx={ {color: 'black'} } >{data.nickname}</Typography>
                <Typography variant="h4" component="div" sx={ {color: 'black'} } >{data.email}</Typography>
                <Typography variant="h4" component="div" sx={ {color: 'black'} } >{data.firstName} {data.lastName}</Typography>
                <Typography variant="h4" component="div" sx={ {color: 'black'} } >Gender: {data.gender}</Typography>
                <Typography variant="h4" component="div" sx={ {color: 'black'} } >Age: {ageCalculate( data.datatBirthday )}</Typography>
            </Box>

        </Box>
    );
}

export default UserPage;
