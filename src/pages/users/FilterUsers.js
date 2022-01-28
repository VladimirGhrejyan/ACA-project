import React from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem, TextField, Button, Typography } from '@mui/material';

function FilterUsers( props ) {
    
    return (
        <>
        <Box sx={ {color: 'gray', marginRight: '10px'} }>
            <Typography sx={ {color: 'gray'} } align="center" variant="h6">Search</Typography>
            <TextField id="outlined-basic" label="search user" placeholder="nickname" variant="outlined" fullWidth value={ props.search } onChange={ props.handleSearchChange } />
            <Box sx={ {display: 'grid', gridTemplateColumns: '1fr 1fr', marginTop: '10px'} }>
                <Button color="inherit"  variant="outlined" onClick={ props.handleSearchClick }>Search</Button>
                <Button color="inherit" variant="outlined" onClick={ props.handleResetClick }>Reset</Button>
            </Box>
        </Box>

        <Box sx={ {marginBottom: '340px'} }>

            <Box sx={ {marginRight: '10px', marginTop: '10px'} } >
                <FormControl fullWidth variant="standard" sx={{ minWidth: 120 }}>
                    <Typography sx={ {color: 'gray'} } align="center" variant="h6" >Gender</Typography>
                    <InputLabel id="demo-simple-select-standard-label">Gender</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={ props.gender }
                            onChange={ props.handleGenderChange }
                            label="Gender"
                        >           
                            <MenuItem value=""><em>Gender</em></MenuItem>
                            <MenuItem value={'male'}>Male</MenuItem>
                            <MenuItem value={'female'}>Female</MenuItem>
                        </Select>
                </FormControl>
            </Box>

            <Box sx={ {marginRight: '10px', marginTop: '10px'} }>
                <Typography sx={ {color: 'gray'} } align="center" variant="h6" >Age</Typography>
                <TextField id="outlined-basic" label="from" fullWidth variant="outlined" value={ props.ageFrom } onChange={ props.handleAgeFromChange } />
                <TextField id="outlined-basic" label="to" fullWidth variant="outlined" value={ props.ageTo } onChange={ props.handleAgeToChange } />
            </Box>

            
            <Box sx={ {color: 'gray', marginRight: '10px', marginTop: '10px', display: 'grid', gridTemplateColumns: '1fr 1fr'} }>
                <Button color="inherit" variant="outlined" onClick={ props.handleFilterClick }>Filter</Button>
                <Button color="inherit" variant="outlined" onClick={ props.handleResetClick }>Reset</Button>
            </Box>

            <Box sx={{display: 'grid', marginTop: '20px', marginRight: '5px', color: 'gray', gridTemplateRows: '1fr 1fr', gridRowGap: '7px'}}>
                <Button color="inherit" variant="outlined" onClick={props.handleFollowsClick}>My Follows</Button>
                <Button color="inherit" variant="outlined" onClick={props.handleFollowersClick}>My Followers</Button>
            </Box>

        </Box>



        </>
  );
}

export default FilterUsers;
