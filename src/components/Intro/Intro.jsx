import React from 'react';
import Typography from '@mui/material/Typography';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import useStyles from "./IntroStyle"
import {Button} from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';

const Intro = () => {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        amount: '',
    });

    const handleChange = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value});
    };
    return (
        <>
            <Typography className={classes.heading} variant={"h5"} gutterBottom component={"div"}>
                Download Songs From Soundcloud :)
            </Typography>
            <div className={classes.flex}>
                <FormControl className={classes.form} sx={{m: 1}}>
                    <InputLabel htmlFor="outlined-adornment-amount">link</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        value={values.amount}
                        onChange={handleChange('amount')}
                        startAdornment={<InputAdornment position="start"> Paste your link ...</InputAdornment>}
                        label="link"
                    />
                </FormControl>
            </div>
            <div className={classes.margin}>
                <Button className={classes.btn} variant="contained" endIcon={<DownloadIcon/>}>
                    Download Song
                </Button>
            </div>
            <Typography className={classes.footer} variant="overline" display="block" gutterBottom>
                develop by Hesami
            </Typography>
        </>
    );
};

export default Intro;
