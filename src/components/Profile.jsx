import React, {useState} from 'react'
import { Container, Card, Typography, CardHeader, CardContent, CircularProgress} from '@mui/material'
import Header from './Header';

export default function Profile({userData, paymentData}) {
  
  const [loader,setLoader] = useState(true);
  const [chosenColor, setChosenColor] = useState("success");
  const batchList = ["6AM - 7AM","7AM - 8AM","8AM - 9AM","5PM - 6PM"];
  const colorList = ["primary" ,"secondary","success"];
  let currentIndex=0;
  
  const Increment=()=>{
    let len = colorList.length;
    currentIndex = (currentIndex+1) % len;
    setChosenColor(colorList[currentIndex]);
    console.log(chosenColor);
  }

   if
   (loader) setInterval(()=> Increment(), 500);
  
  const handlePostPaymentData = () => {
        let abcd;
        if(paymentData.paymentType === 1) abcd = "upi";
        else abcd = "card";

        fetch("https://tense-red-flip-flops.cyclic.app/payment",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                mode:abcd,
                upiId:paymentData.upi,
                email:userData.email,
                card:paymentData.cardDetail
            })
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        })
    }

    const handlePostUserData = () => {
        fetch("https://tense-red-flip-flops.cyclic.app/signup",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name:userData.name,
                age:userData.age,
                email:userData.email,
                startDate:userData.startDate,
                batch:userData.batch,
                payment:500
            })
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setLoader(false);
        })
    }

    const handlePostData = () => {
        handlePostPaymentData();
        handlePostUserData();
    }

  return (
    <div>
        {handlePostData()}
        {
         loader ? <CircularProgress color={chosenColor} style={{ width: '5rem',
        height: '5rem',position: 'absolute', left: '45%', top: '42%'}} />
         :
         <>
           <Container>
             <Header profile={true} />
             <Card style={{marginTop:'4rem' , width:'30vw', position:'absolute', left:'30%'}} >
                <CardHeader title={"User Details"} style={{textAlign:'center', background:'#63bcf7'}} />
                <CardContent style={{background:'lightblue'}}>
                    <Typography variant='h6' paddingTop={'1rem'}>Name : {userData.name}</Typography>
                    <Typography variant='h6' paddingTop={'1rem'}>Email : {userData.email}</Typography>
                    <Typography variant='h6' paddingTop={'1rem'}>Age : {userData.age}</Typography>
                    <Typography variant='h6' paddingTop={'1rem'}>Joining Date :{userData.startDate}</Typography>
                    <Typography variant='h6' paddingTop={'1rem'}>Batch : {batchList[userData.batch-1]}</Typography>
                </CardContent>
             </Card>
           </Container>
         </>
        }
    </div>
  )
}
