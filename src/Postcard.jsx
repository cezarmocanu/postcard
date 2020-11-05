import React,{useState} from 'react';
import {Box,Switch,FormControlLabel} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Front from './Front';
import Back from './Back';

const useStyles = makeStyles((theme) => ({
    container:{
        width:'100vw',
        height:'100vh',
        display:'flex',
        justifyContent:'center',
        flexDirection:'column',
        alignItems:'center'
    },
    postcard:{
        width:'50%',
        height:'50%',
        backgroundColor:'gray'
    }
}));

const Postcard = ()=> {

    const [showBack,setShowBack] = useState(false);
    const classes = useStyles();

    const handleChange = ()=>{
        setShowBack(!showBack)
    }

    const CurentSide = showBack ? Back : Front


    return (
        <Box className={classes.container}>
            <React.Fragment>
                <FormControlLabel
                    control = {
                        <Switch
                            checked={showBack}
                            onChange={handleChange}
                            inputProps={{ 'aria-label': 'Show back' }}
                        />
                    }
                    label="Show Back"/>
                <Box className={classes.postcard}>
                    <CurentSide/>
                </Box>
            </React.Fragment>
           
        </Box>

    );
}

export default Postcard;