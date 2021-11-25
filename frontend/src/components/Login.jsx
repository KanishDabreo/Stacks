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



export default function Login() {
  const theme = createTheme();
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");  
  
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    setEmail("");
    setPassword("");

    const loginData = { email, password };
    const loginURL = "http://localhost:8080/api/auth/login";

    try {
      const { data } = await axios.post(loginURL, loginData);
      console.log("data from Login:", data);
      localStorage.setItem('userSession', JSON.stringify(data));
      navigate('/dashboard');
    } catch (error) {
      console.log("error: =========", error );
    }
  };

  return (
    <ThemeProvider theme={theme}>
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
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
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
              disabled={
              email.length === 0 ||
              password.length === 0}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
              Don't have an account?&nbsp;
                <Link href="/register" variant="body2">
                  {"Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}