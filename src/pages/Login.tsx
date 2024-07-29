import { Avatar, Box, Button, Container, CssBaseline, Grid, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LockPersonIcon from '@mui/icons-material/LockPerson';
import { Welcome } from "../components/Welcome";


//@ts-ignore
export const Login: React.FC =() => {
    const[username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const [showWelcome,setShowWelcome] = useState(false);
    const navigate = useNavigate();

    const handleLogin = ()=>{
        setIsLoggedIn(true);
    };

    useEffect(()=>{
      if(isLoggedIn){
          setShowWelcome(true);
          setTimeout(()=>{
            setShowWelcome(false);
              navigate('/home');
          },1500)
      }
    },[isLoggedIn,navigate]);

    return !showWelcome?(
    <Container maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            mt: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            overflow: 'hidden',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.light" }}>
            <LockPersonIcon/>
          </Avatar>
          <Typography variant="h5">Login</Typography>
          <Box sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleLogin}
            >
              Login
            </Button>
            <Grid container justifyContent={"center"}>
              <Grid item>
                <Link to="/register">Don't have an account? Register</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  ):(
    <Welcome/>
  );
};
