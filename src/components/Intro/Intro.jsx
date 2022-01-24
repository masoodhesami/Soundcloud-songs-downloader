import React, {useState, useEffect} from 'react';
import Typography from '@mui/material/Typography';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import useStyles from "./IntroStyle"
import {Button} from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import PostSongUrl from "../../api/index"
import {ToastContainer} from 'react-toastify';

const Intro = () => {
    const classes = useStyles();
    const [linkUrl, setLinkUrl] = useState("");
    const [songData, setSongData] = useState();

    const handleChange = () => (event) => {
        setLinkUrl(event.target.value)
        console.log(linkUrl)
    };
    const handleClick = async () => {
        try {
            const result = await PostSongUrl(linkUrl);
            setSongData(result);
            console.log(result)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <>
            <ToastContainer/>
            <Typography className={classes.heading} variant={"h5"} gutterBottom component={"div"}>
                Download Songs From Soundcloud :)
            </Typography>
            <div className={classes.flex}>
                <FormControl className={classes.form} sx={{m: 1}}>
                    <InputLabel htmlFor="outlined-adornment-amount">link</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        value={linkUrl}
                        onChange={handleChange('amount')}
                        startAdornment={<InputAdornment position="start"> Paste your link ...</InputAdornment>}
                        label="link"
                    />
                </FormControl>
            </div>
            <div className={classes.margin}>
                <Button onClick={handleClick} className={classes.btn} variant="contained" endIcon={<DownloadIcon/>}>
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
