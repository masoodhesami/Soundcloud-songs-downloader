import * as React from 'react';
import {useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import useStyles from "./ResultStyle"
import {useContext , useState} from "react";
import {songContext} from "../../helpers/contexts";
import {Alert, Button} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

export default function Result() {
    const [downloadLink , setDownloadLink] = useState()
    const {setNavigator, songData} = useContext(songContext)
    const classes = useStyles();
    const theme = useTheme();

    function download(url, filename) {
        fetch(url)
            .then(response => response.blob())
            .then(blob => {
                const link = document.createElement("a");
                link.href = URL.createObjectURL(blob);
                link.download = filename;
                link.click()
                setDownloadLink(link.download);
            })
            .catch(console.error);
        setTimeout(() => {
            downloadLink && setNavigator("intro");
        }, 2000)
    }

    return (
        <>
            <Alert severity="success"> success — your music founded on soundcloud!</Alert>
            <div className={classes.flex}>
                <Card sx={{display: 'flex'}}>
                    <Box sx={{display: 'flex', flexDirection: 'column'}}>
                        <CardContent sx={{flex: '1 0 auto'}}>
                            <Typography component="div" variant="h5">
                                {songData.response.title}
                            </Typography>
                            <Typography variant="subtitle2" color="text.secondary" component="div">
                                {songData.response.links[0].resolution} ,
                                {songData.response.links[0].ext}

                            </Typography>
                        </CardContent>
                        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: "center", pl: 1, pb: 1}}>
                            <IconButton aria-label="previous">
                                {theme.direction === 'rtl' ? <SkipNextIcon/> : <SkipPreviousIcon/>}
                            </IconButton>
                            <IconButton aria-label="play/pause">
                                <PlayArrowIcon sx={{height: 38, width: 38}}/>
                            </IconButton>
                            <IconButton aria-label="next">
                                {theme.direction === 'rtl' ? <SkipPreviousIcon/> : <SkipNextIcon/>}
                            </IconButton>
                        </Box>
                    </Box>
                    <CardMedia
                        component="img"
                        sx={{width: 151}}
                        image={songData.response.thumbnail}
                        alt="Live from space album cover"
                    />
                </Card>
            </div>
            <div className={classes.margin}>
                <Button onClick={() => download(songData.response.links[0].url, songData.response.title)}
                        className={classes.btn}
                        variant="contained" endIcon={<DownloadIcon/>}>
                    Download ( {songData.response.links[0].size})
                </Button>
            </div>
        </>
    );
}
