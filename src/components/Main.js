import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Grid, Button, CssBaseline, Container, Typography, Paper } from '@material-ui/core';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors'
import Leaf1 from '../assets/images/logo_leaf2.png';

const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
      heroContent: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
          theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: theme.spacing(5, 0, 5),
      },
      heroHeader: {
      },
      heroButtons: {
        marginTop: theme.spacing(4),
      },
      heroWaver: {
        position: 'absolute',
        bottom: '0px'
      },
      heroPaper: {
          backgroundColor : '#0f3a3d',
          height: '150px',
          width: '100px',
      },
      heroGrid: {
        flexGrow: 1,
        width:'90vw',
        margin: 'auto',
      },
}))
//#
const theme = createMuiTheme({
    palette: {
        secondary: {
            main: green[600],
        }
    }
})
const Main = () => {
    const classes = useStyles();
    return (
        <React.Fragment >
            <CssBaseline />
            <ThemeProvider theme={theme}>
                {/* Hero unit */}
                <div className={classes.toolbar} />
                <div className={classes.heroContent}>
                <Container maxWidth="md" className={classes.heroHeader}>
                    <div>
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            <img src={Leaf1} alt='lm' height="150px"/>
                        </Typography>
                        <Typography variant="h3" align="center" color="textPrimary">
                            Welcome Marketer
                        </Typography>
                        <div className={classes.heroButtons}>
                        <Grid container spacing={2} justify="center">
                            <Grid item>
                            <Button variant="contained" color="primary">
                                Become A Member
                            </Button>
                            </Grid>
                            <Grid item>
                            <Button variant='contained' color="Secondary" component={Link} to='/store'>
                                Go Shopping
                            </Button>
                            </Grid>
                        </Grid>
                        </div>
                    </div>
                </Container>
                </div>
            </ThemeProvider>
        </React.Fragment>
    )
}

export default Main
