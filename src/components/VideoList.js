import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {
	const renderedList = props.videos.map((video) => {
		return (
			<VideoItem
				key={video.id.videoId}
				onVideoSelect={props.onVideoSelect}
				video={video}
			/>
		);
		//passing the video as a props so you don't get confused again ojone
	});
	return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
