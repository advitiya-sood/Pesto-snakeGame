import {React, useContext, useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import FunctionalityContext from '../../Context/FunctionalityContext';




//  MUI used for better UI in Login  and SignUp screen


function Login() {

    const navigate=useNavigate();
    const [formInfo,setFormInfo]=useState({
        email:"",
        password:""
    })



    const{loggedInUser,setLoggedInUser}=useContext(FunctionalityContext);

    const handleSubmit= async (event)=>{
        event.preventDefault();

        let localStorageUser = JSON.parse(localStorage.getItem(formInfo.email));

// storing users in local storage this logic can be changed with api calls when connected to the apis
        if(!localStorageUser){
            console.log('user doesnt exist');
        }
        
        if (localStorageUser?.password == formInfo.password){
            console.log("this nran")
            setLoggedInUser(localStorageUser);
            localStorage.setItem("Active", JSON.stringify(localStorageUser));

            navigate("/home")
            
        }
        else  {
            console.log("Invalid Credentials")
        }

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

            <Typography  variant="h5">
                The Super Snake
            </Typography>
            <Typography color="grey" variant='body2' fontSize="13px">Login to your account </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField onChange={handleOnChange}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                value={formInfo.email}
                autoComplete="email"
                />
                <TextField onChange={handleOnChange}
                margin="normal"
                required
                fullWidth
                name="password"
                value={formInfo.password}
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                />
                <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                >
                LogIn
                </Button>
                <Grid container>
                <Grid item marginX="20%">
                    <Link  style={{cursor:"pointer" }}  to="/register" variant="body2">
                    Don't have an account? Sign Up
                    </Link>
                    
                </Grid>
                </Grid>
            </Box>
            </Box>
    
        </Container>
        </Box>
   
    
  )
}

export default Login
