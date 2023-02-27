import axios from 'axios';

const KEY = 'AIzaSyBEtjeU2dzcs0oe98iRWc0fp4BjZyy_gno';

export default axios.create({
    baseURL: ' https://www.googleapis.com/youtube/v3',
    params : {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})