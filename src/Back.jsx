import React from 'react';
import {Box,ButtonBase, Grid, Paper, Typography,Link} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import img2 from './img/img2.jpg';


const useStyles = makeStyles((theme) => ({
    postcard:{
        display:'block',
        height:'100%'
    },
    grid:{
        height:'100%'
    },
    imageRow:{
        width:'100%',
        height:'50%',
        display:'flex',
        flexDirection:'column'
    },
    imageBox:{
        display:'block' 
    },
    image:{
        width:'100%',
        height:'100%'
    },
    img: {
        margin: 'auto',
        display: 'block',
        width: '100%',
        maxHeight: '250px',
      },
}));

const Back = ()=>{
    const classes = useStyles();

    return (
        <Paper className={classes.postcard} elevation={5}>
            <Grid container className={classes.grid}>
                <Grid item xs={6}>
                    <Box height={'100%'} p={2} display='flex' flexDirection='column' justifyContent='space-evenly'>
                        <Typography variant='h4'>
                            Dear ...,
                        </Typography>
                        <Typography variant='h5'>
                            Why does facebook give me the option to like my own post? Of course I like it. I'm hillarious.
                        </Typography>
                        <Typography variant='h5'>
                            Yours ...
                        </Typography>
                        <Link href="https://github.com/cezarmocanu/postcard" target="_blank">
                            <Typography variant='h5'>
                                See this on Github
                            </Typography>
                        </Link>
                    </Box>
                    
                </Grid>
                <Grid item xs={6} clasName={classes.imageRow} container>
                    <ButtonBase className={classes.image}>
                        <img className={classes.img} alt="complex" src={img2} />
                    </ButtonBase>
                </Grid>
            </Grid>
        </Paper>
        
    );
}

export default Back;