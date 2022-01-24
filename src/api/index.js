import axios from "axios";
import {toast} from 'react-toastify'

// const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const PostSongUrl = async (url) => {
     axios.request(
        {
            method: 'POST',
            url: 'https://soundcloud-songs-downloader.p.rapidapi.com/',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'x-rapidapi-host': 'soundcloud-songs-downloader.p.rapidapi.com',
                'x-rapidapi-key': 'a9af3d0bf4mshba5d80b1d6308fcp126c9bjsnd6f0537c5545'
            },
            data: {url: url}
        }
    ).then(function (response) {
        toast.success(response.data.msg)
        console.log(response.data);
        // return (result.data);
    }).catch(function (error) {
        console.error(error);
    });
}

export default PostSongUrl
