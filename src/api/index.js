import axios from "axios";

export const PostSongUrl = async (url) => {
    try {
        const result = await axios.request({
            method: 'POST',
            url: 'https://soundcloud-songs-downloader.p.rapidapi.com/',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'x-rapidapi-host': 'soundcloud-songs-downloader.p.rapidapi.com',
                'x-rapidapi-key': 'a9af3d0bf4mshba5d80b1d6308fcp126c9bjsnd6f0537c5545'
            },
            data: {url: url}
        });
        console.log(result.data)
        return result.data;
    } catch (error) {
        console.log(error);
    }
};


