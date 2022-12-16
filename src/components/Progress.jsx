import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Poster from '.././progress.jpg'


export default function Progress() {
    const navigate = useNavigate();
  return (
    <div style={{display:'block',position:'absolute',left:'40%',top:'40%'}}>
       <h1>Still In Progress</h1>
       <Button
       variant="contained" 
       style={{textTransform:'none', height:70, fontSize:30}}
       onClick={(e)=> navigate('/')}
       >
        Back To Home
        </Button>
    </div>
  )
}
