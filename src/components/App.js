import React , {useState, useEffect} from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

const App = () => {

const [selectedVideo, setSelectedVideo] = useState(null);
const [vids, searchVids] = useVideos('buildings');
// react automatcially wires up the return value of useVideos to [vids, searchVids] respectively

useEffect(() => {
	setSelectedVideo(vids[0]);
}, [vids])

// 

// custom hooks: making code upwards reusable or making hooks reusable
// output: what you can take from the code upwards and use it inside of jsx
// identify input, ouput and functionality of custom hook
// in this case:
// input - input term
// functionality - make a search
// output - list of videos
// when you call 'search', it's like calling setVideos except the functionality here is customized and thus the output is also customized


return (
	<div className="ui container">
		<SearchBar onFormSubmit={searchVids} />
		{/* custom hook functionality called here */}
		<div className="ui grid">
			<div className="ui row">
				<div className="eleven wide column">
					<VideoDetail video={selectedVideo} />
				</div>
				<div className="five wide column">
					<VideoList
						onVideoSelect={setSelectedVideo}
						videos={vids}
					/>
					{/* output used inside of jsx */}
				</div>
			</div>
		</div>
	</div>
);
}



export default App;
