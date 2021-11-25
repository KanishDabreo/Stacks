import React from "react";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const theme = createTheme();

export default function Register(props) {
  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ confirmPassword, setConfirmPassword ] = useState("");
  const navigate = useNavigate();
  const myRef = {};

  const handleSubmit = async (event) => {
    event.preventDefault();

    const registerData = { name, email, password, confirmPassword };
    const registerURL = "http://localhost:8080/api/auth/register";

    try {
      const { data } = await axios.post(registerURL, registerData);
      console.log(data);
      navigate('/');
    } catch (error) {
      console.log("error: ++++++++", 'There already exists an account with this name or email');
    }
  };

  return (
    <ThemeProvider inputRef={myRef} theme={theme}>
      <Container className="main-content" component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
              margin="normal"
              required
              inputRef={myRef}
              fullWidth
              id="name"
              label="Name"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              autoComplete="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              inputRef={myRef}
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              autoComplete="email"
            />
            <TextField
              margin="normal"
              required
              inputRef={myRef}
              fullWidth
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <TextField
              margin="normal"
              required
              inputRef={myRef}
              fullWidth
              name="confirmPassword"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => {myRef.current.reportValidity()}}
            >
              Register
            </Button>
            <Grid container>
              <Grid item>
                Already have an account?&nbsp;
                <Link href="/login" variant="body2">
                  {"Sign In"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}