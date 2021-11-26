import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';


const data = [
  {
    title: 'Free',
    price: '0',
    description: [
      'Free account',
      'Add expenses',
      'Add incomes',
      'Basic Charts',
    ],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },
  {
    title: 'Pro',
    subheader: 'Most popular',
    price: '15',
    description: [
      'Get financial advices',
      'More Charts',
      'Help center access',
      'Priority email support',
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    price: '30',
    description: [
      'Add family members',
      'Create Groups',
      'Help center access',
      'Phone & email support',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
];

export default function PricingContent() {
  const navigate = useNavigate();
 
  const handleClick = async () => {
    navigate('/register');
  }
  
  return (
    <div className="main-content">
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Pricing and Plans
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          Go beyond Stacks. Choose a plan to ensure that everything you spend is clear and you can reach you financial goals.
        </Typography>
      </Container>
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {data.map((plan) => (
            <Grid
              item
              key={plan.title}
              xs={12}
              sm={plan.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  className="background-color-green"
                  title={plan.title}
                  subheader={plan.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={plan.title === 'Pro' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h3" color="text.primary">
                      ${plan.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /month
                    </Typography>
                  </Box>
                  <ul>
                    {plan.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button
                    className="button"
                    fullWidth 
                    variant={plan.buttonVariant}
                    onClick={handleClick}
                    >
                    {plan.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>      
    </div>
  );
}
