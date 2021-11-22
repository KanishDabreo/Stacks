import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import './Footer.css';


export default function Footer(props) {
  return (
    <Box
      className="footer"
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1">
        © Stacks, Inc. 2021. We love our users!
        </Typography>
      </Container>
    </Box>  
  )
}

