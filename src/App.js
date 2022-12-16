import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Landing from './components/Landing';
import Register from './components/register/Register'
import Box from '@mui/material/Box';
import Profile from './components/Profile';
import Progress from './components/Progress';
import { useState } from 'react';

function App() {

  const [userData,setUserData] = useState()
  const [paymentData,setPaymentData] = useState()

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/progress' element={<Progress/>} />
        <Route path='/register' element={<Register userData={userData} setUserData={setUserData} setPaymentData={setPaymentData} />} />
        <Route path='/profile' element={<Profile userData={userData} paymentData={paymentData} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
