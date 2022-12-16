import  React ,{useState} from 'react';
import {AppBar, Box, Toolbar, Typography, Stack, Button, Menu, MenuItem} from '@mui/material';
import {Tooltip, IconButton } from '@mui/material';

import logo from '.././yoga_logo.png';
import { useNavigate } from 'react-router-dom';

const settings = ['Logout'];

const profileStyle = {
  backgroundColor:'blue',
  fontWeight: '900',
  padding: '0.3rem 0.6rem',
  borderRadius: '50%',
  color:'#fff'
}


export default function Header({profile}) {
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" 
              style={{
                color:'#231f20',
                backgroundColor:'white',
                boxShadow:'none'
              }}
            >
        <Toolbar>
          <img alt="Remy Sharp" src={logo} style={{height:50 , width:60}} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            style={{ fontWeight:600, fontFamily: 'cursive', color:'#1976ee' }}
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Yoga Classes
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Button sx={{ color: 'black' ,fontSize:13, marginRight:2 }}
               style={{fontWeight:600 , fontFamily: 'system-ui', borderRadius:0,borderBottom:'2px solid #1976d2'}}
              >
                Home
              </Button>
              <Button sx={{ color: 'black' ,fontSize:13, marginRight:2 }}
                onClick={(e)=> navigate('/progress')}
               style={{fontWeight:600 , fontFamily: 'system-ui'}}
              >
                Product
              </Button>
              <Button sx={{ color: 'black' ,fontSize:13, marginRight:6 }}
               onClick={(e)=> navigate('/progress')}
               style={{fontWeight:600 , fontFamily: 'system-ui'}}
              >
                About
              </Button>
          </Box>
          {
            profile ?
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Profile">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Box style={profileStyle}>S</Box>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center"
                     onClick={(e)=> navigate('/')}
                    >{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            :
            <Stack spacing={2} direction="row">
              <Button variant="outlined" onClick={(e)=> navigate('/progress')} style={{textTransform:'none' ,height:30}}>Learn</Button>
              <Button 
                    variant="contained" 
                    style={{textTransform:'none' ,height:30}}
                    onClick={(e)=>navigate('/register')}
              >
                Register
              </Button>
            </Stack>
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}