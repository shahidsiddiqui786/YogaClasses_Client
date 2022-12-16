import { Card, CardContent, CardHeader, Grid,Typography,Container,TextField
    ,Select ,MenuItem,FormControl, InputLabel, FormHelperText, Button } from '@mui/material'
import { Box, margin } from '@mui/system';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import UPI from './UPI';
import BankCard from './BankCard';

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

export default function PaymentDetail({userData, setPaymentData}) {
    
    const navigate = useNavigate();
    const [paymentType,setPaymentType]=useState()
    const [upi ,setUpi] = useState()
    const [cardDetail,setCardDetail] = useState()
    

    const handleSubmit = (e) => {

        if(paymentType == 1)
        {
            if(!upi){
                console.log("sefrty");
                return ;
            }
            console.log("success paid",upi);
            setPaymentData({
                paymentType:paymentType,
                upi:upi,
                cardDetail:cardDetail
            })
            // handlePostData();
            navigate('/profile');
            return ;
        }

        if(!cardDetail){
            console.log("hey Fill data");
            return ;
        }
        const {cardType,cardName,cvv,cardNumber,expiryDate} = cardDetail;
        if(!cardName || !cvv || !cardNumber || !expiryDate)
        {
            console.log(cardDetail);
            console.log("hedkld");
            return ;
        }
        console.log(cardDetail);
        setPaymentData({
            paymentType:paymentType,
            upi:upi,
            cardDetail:cardDetail
        })
        // handlePostData();
        navigate('/profile');
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
            Enter Your Paymant Details
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
        <FormControl sx={{ m: 1, minWidth: 120 , width:'28rem'}}>
            <InputLabel id="demo-simple-select-helper-label">Type</InputLabel>
            <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={paymentType}
            label="Batch"
            onChange={(e)=>setPaymentType(e.target.value)}
            >
            <MenuItem value={1}>UPI</MenuItem>
            <MenuItem value={2}>Debit Card</MenuItem>
            <MenuItem value={3}>Credit Card</MenuItem>
            </Select>
            <FormHelperText>Select Payment Mode</FormHelperText>
        </FormControl>
        </div>
        {
            paymentType == 1 ? <UPI upi={upi} setUpi={setUpi} /> : 
            paymentType == 2 ? <BankCard cardType={"debit"} setCardDetail={setCardDetail} /> :
            paymentType == 3 ? <BankCard cardType={"credit"} setCardDetail={setCardDetail} /> :
            null
        }
        </Box>
        <Box marginTop={'4rem'}>
        <Button variant="contained" style={nextBtn}
          onClick={(e)=>handleSubmit(e)}
        >
            Submit
        </Button>
        </Box>
    </Container>
    )
}
