import {React, useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link, Navigate, useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';



//  MUI used for better UI in Login and SignUp screen


function SignUp() {

    const navigate=useNavigate();
    const [formInfo,setFormInfo]=useState({
        name:"",
        email:"",
        password:""
    })

    const handleSubmit= async (event)=>{
        event.preventDefault();
        
        localStorage.setItem(formInfo.email, JSON.stringify(formInfo));   // storing users in local storage this logic can be changed with api calls when connected to the apis
        navigate("/")
    }

    const handleOnChange=(event)=>{
        setFormInfo({...formInfo,[event.target.name]:event.target.value})
    }

  return (
        <Box style={{background:"linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)"}}
            alignItems= 'center' height="100vh" display="flex">
            <Container component="main" maxWidth="xs">
   
            <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding:"20px",
                bgcolor:"white",
                borderRadius:"30px",
                boxShadow:"rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
            }}
            >
            <Typography component="h1" variant="h5">
                Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField onChange={handleOnChange}
                    autoComplete="given-name"
                    name="name"
                    value={formInfo.name}
                    required
                    fullWidth
                    id="Name"
                    label="Name"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField onChange={handleOnChange}
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    value={formInfo.email}
                    autoComplete="email"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField onChange={handleOnChange}
                    required
                    fullWidth
                    name="password"
                    value={formInfo.password}
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    />
                </Grid>
                </Grid>
                <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                >
                Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                <Grid item  marginX="19%">
                    <Link  style={{cursor:"pointer"}} to="/" variant="body2">
                    Already have an account? Log In
                    </Link>
                </Grid>
                </Grid>
            </Box>
            </Box>
        </Container>
        </Box>
        
  )
}

export default SignUp
