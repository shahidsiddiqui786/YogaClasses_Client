import { Card, CardContent, CardHeader, Grid,Typography,Container,TextField
    ,Select ,MenuItem,FormControl, InputLabel, FormHelperText, Button, styled } from '@mui/material'
import { Box, margin } from '@mui/system';
import React, { useState } from 'react'
import UserDetail from './UserDetail';
import PaymentDetail from './payment/PaymentDetail'

const outerWrapper = {
    color: "black",
    padding: "0px",
    margin:"0px",
    width:"100vw",
    height:"100vh"
};

const leftWrapper = {
    color: "black",
    padding: "0px",
    borderRight:'1px solid #deb88747'
};

const rightWrapper = {
    color: "black",
    padding: "0px"
};

const card = {
    paddingTop:"2rem",
    boxShadow:'none'
}

const cardheader = {
    fontSize: '40px',
    fontWeight: '500',
    color: '#1976d2',
    paddingLeft:'3rem',
    borderBottom:'1px solid #deb88747'
}

const sideBar = {
    paddingBottom:"30px"
}



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

export default function Register({userData, setUserData, setPaymentData}) {
    
    const [paymentType,setPaymentType]=useState()
    const [page ,setPage] = useState(true)
    
    let sidebtn1 = {
        color:'white',
        padding: '4px 10px',
        borderRadius: '50%',
        background: `${page ? '#1976d2' : '#2bd65b'}`,
        marginRight: '20px',
        fontSize:'15px',
        fontWeight:'400'
    }

    let sidebtn2 = {
        color:'white',
        padding: '4px 10px',
        borderRadius: '50%',
        background: '#1976d2',
        marginRight: '20px',
        fontSize:'15px',
        fontWeight:'400'
    }

    return (
    <Grid container style={outerWrapper}>
        <Grid item xs={3} style={leftWrapper}>
        <Card style={card}>
            <CardHeader title={"Yoga Classes"} style={cardheader} disableTypography/>
            <CardContent>
            <Container style={{display:'flex', flexDirection:'column'}}>
                <Box style={sideBar}>
                <span style={sidebtn1}>1</span>  
                <span> User Details </span>  
                </Box>
                <Box>
                <span style={sidebtn2}>2</span>  
                <span> Payment Details </span> 
                </Box>
            </Container>
            </CardContent>
        </Card>
        </Grid>
        <Grid item xs={9} style={rightWrapper}>
           {
            page ? <UserDetail setPage = {setPage} setUserData={setUserData} />
            : <PaymentDetail userData={userData} setPaymentData={setPaymentData} />
           }
        </Grid>
    </Grid>
    )
}
