import React from 'react';
import {Box,ButtonBase, Grid, Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';
import img4 from './img/img4.jpg';
import img5 from './img/img5.jpg';
import flag from './img/flag.png';

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
        maxHeight: '150px',
      },
}));

const Front = ()=>{
    const classes = useStyles();

    return (
        <Paper className={classes.postcard} elevation={5}>
            <Grid container className={classes.grid}>
                <Grid item xs={12}  container>
                    <Grid item xs={3} clasName={classes.imageBox}>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="complex" src={flag} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={5}>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="complex" src={img1} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={4}>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="complex" src={img3} />
                        </ButtonBase>
                    </Grid>
                </Grid>
                <Grid item xs={12} clasName={classes.imageRow} container>
                    <Grid item xs={7}>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="complex" src={img4} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={5}>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="complex" src={img5} />
                        </ButtonBase>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
        
    );
}

export default Front;