import { TextField } from '@mui/material'
import React from 'react'

export default function UPI({upi, setUpi}) {
  return (
    <TextField
        label="Enter Your UPI ID"
        variant='filled'
        value={upi}
        style={{width:'28rem'}}
        onChange={(e)=>setUpi(e.target.value)}
    />
  )
}
