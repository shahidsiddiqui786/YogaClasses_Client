import { Grid,Card, CardContent,Typography,Box, CardActions, Stack, Button } from '@mui/material'
import React from 'react'
import poster from '.././poster2.png'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import Header from './Header';
import { Container } from '@mui/system';
import { useNavigate } from 'react-router-dom';


export default function Landing() {
  const navigate = useNavigate(); 

  return (
    <>
      <Container>
        <Header profile={false} />
      </Container>
      <Grid container spacing={2} >
        <Grid item xs={6}>
        <Box sx={{ flexGrow: 1 }} style={{display:'flex' ,justifyContent:'center',marginTop:20}} >
        <Card style={{boxShadow:'none'}}>
            <CardContent>
                <Typography variant="h3" color={'#0f48e3'} component="div">
                Inhale The 
                </Typography>
                <Typography variant="h3" color={'#0f48e3'} component="div">
                Future, 
                </Typography>
                <Typography variant="h3" component="div">
                Exhale The
                </Typography>
                <Typography variant="h3" component="div">
                Past 
                </Typography>
                <Typography variant="h6" fontFamily={'system-ui'} color={'#646667'} component="div">
                Join Our Yoga Classes 
                </Typography>
                <Typography variant="h6" fontFamily={'system-ui'} color={'#646667'}  component="div">
                Pay Only <b>Rs 500 </b> per month
                </Typography>
            </CardContent>
            <CardActions style={{marginTop:30}}>
                <Stack spacing={2} direction="row">
                    <Button 
                    variant="contained" 
                    style={{textTransform:'none', height:70, fontSize:30}}
                    onClick={(e)=>navigate('/register')}
                    >
                        Join Class 
                        <TrendingFlatIcon/> 
                    </Button>
                </Stack>
            </CardActions>
        </Card>
        </Box>
        </Grid>
        <Grid item xs={6}>
            <img style={{marginTop:10}} alt='poster' src={poster} />
        </Grid>
      </Grid>
    </>
  )
}
