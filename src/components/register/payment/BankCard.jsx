import React, {useState} from 'react'
import { Box } from '@mui/system'
import { Input, TextField, InputLabel, FormControl } from '@mui/material'

export default function BankCard({cardType,setCardDetail}) {
   
  const [cardName,setCardName]=useState("")
  const [cvv,setCvv]=useState("")
  const [cardNumber,setCardNumber]=useState("")
  const [expiryDate,setExpiryDate]=useState(false)

  const handleChange = () => {
    setCardDetail({
        cardType:cardType,
        cardName:cardName,
        cvv:cvv,
        cardNumber:cardNumber,
        expiryDate:expiryDate
    })
  }

  return (
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
                label="Card Holder Name"
                variant='filled'
                value={cardName}
                onChange={(e)=>{setCardName(e.target.value); handleChange()}}
            />
            <FormControl style={{paddingLeft:'10px', marginTop:'16px'}}>
              <InputLabel htmlFor="ed">Expiry Date</InputLabel>
              <Input
                  label="ed"
                  variant='filled'
                  type='date'
                  value={expiryDate}
                  onChange={(e)=>{setExpiryDate(e.target.value); handleChange()}}
              />
            </FormControl>
            </div>
            <div>
            <TextField
                label="Card Number"
                variant='filled'
                value={cardNumber}
                style={{width:'18rem'}}
                onChange={(e)=>{setCardNumber(e.target.value); handleChange()}}
            />
            <TextField
                label="cvv"
                variant='filled'
                value={cvv}
                style={{width:'4rem'}}
                onChange={(e)=>{setCvv(e.target.value); handleChange()}}
            />
            </div>
        </Box>
  )
}
