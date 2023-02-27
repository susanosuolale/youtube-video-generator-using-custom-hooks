import {useState, useEffect} from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm])

    const search = async (term) => {
        console.log(term);
        const response = await youtube.get('/search', {
            params: {
                q: term,
            },
        });
    
        setVideos( response.data.items);
        
        console.log(this.state.videos);
        
    };
    return [videos , search]
    //returns output and functionality for use inside of jsx
}

export default useVideos;