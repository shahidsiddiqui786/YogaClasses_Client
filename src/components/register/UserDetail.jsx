import { Card, CardContent, CardHeader, Grid,Typography,Container,TextField
    ,Select ,MenuItem,FormControl,Input, InputLabel, FormHelperText, Button } from '@mui/material'
import { Box, margin } from '@mui/system';
import React, { useState } from 'react'
    


const nextBtn = {
    textTransform: 'none',
    height: '3rem',
    width: '4rem',
    background: '#2bd65b',
    color: '#fff',
    borderRadius: '4px',
    padding: '20px',
    minWidth: '160px',
    lineHeight: '20px',
    fontWeight: '600',
    border: 'none',
    height: '50px',
}

export default function UserDetail({setPage, setUserData}) {
    
    const [name,setName]=useState("")
    const [age,setAge]=useState("")
    const [email,setEmail]=useState("")
    const [startDate,setStartDate]=useState(false)
    const [batch,setBatch]=useState()

    const emailValidation = () => {
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!email || regex.test(email) === false){
            return false;
        }
        return true;
    }

    const handleNext = (e) => {
        if(!name||!age||!email||!startDate||!batch)
        {
            console.log("please fill all filled!");
            return ;
        }
        if(emailValidation() == false)
        {
            console.log("hey wrong mail");
            return ;
        }
        const data = {
            name:name,
            age:age,
            email:email,
            startDate:startDate,
            batch:batch
        }
        setUserData(data);
        setPage(false);
    }

    return (
    <Container style={{display:'flex', flexDirection:'column', paddingLeft:'5rem', paddingTop:'2rem', marginTop:'5rem'}}>
        <Box>
            <Typography 
            variant='h4' 
            fontWeight={500}
            fontFamily={'inherit'}
            fontSize={'32px'}
            lineHeight={'32px'}
            color={'#231f20'}
            padding={'5px'}
            >
            Enter Your personal Details
            </Typography>
        </Box>
        <Box
            component="form"
            sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            autoComplete="off"
            marginTop={'4rem'}
        >
            <div>
            <TextField
                label="Name"
                variant='filled'
                value={name}
                onChange={(e)=>setName(e.target.value)}
            />
            <TextField
                label="Email"
                variant='filled'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
            />
            </div>
            <div>
            <TextField
                label="Age"
                variant='filled'
                value={age}
                onChange={(e)=>setAge(e.target.value)}
            />
            <FormControl style={{paddingLeft:'10px',marginTop:'16px'}}>
              <InputLabel htmlFor="ed">Start Date</InputLabel>
              <Input
                  label="ed"
                  variant='filled'
                  type='date'
                  value={startDate}
                  onChange={(e)=>setStartDate(e.target.value)}
              />
            </FormControl>
            </div>
            <div>
            <FormControl sx={{ m: 1, minWidth: 120 , width:'28rem'}}>
            <InputLabel id="demo-simple-select-helper-label">Batch</InputLabel>
            <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={batch}
                label="Batch"
                onChange={(e)=>setBatch(e.target.value)}
            >
                <MenuItem value={1}>6AM - 7AM</MenuItem>
                <MenuItem value={2}>7AM - 8AM</MenuItem>
                <MenuItem value={3}>8AM - 9AM</MenuItem>
                <MenuItem value={4}>5PM - 6PM</MenuItem>
            </Select>
            <FormHelperText>Select Suitable Batch</FormHelperText>
            </FormControl>
            </div>
        </Box>
        <Box marginTop={'4rem'}>
            <Button 
               variant="contained" 
               style={nextBtn}
               onClick={(e)=>handleNext(e)}
            >
            Next
            </Button>
        </Box>
    </Container>
    )
}
