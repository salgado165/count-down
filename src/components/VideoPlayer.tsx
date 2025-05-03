import React from 'react';
import { VideoPlayerProps } from '../types';

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoSrc }) => {
  return (
    <div className="w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg">
      <div className="relative pb-[56.25%]">
        <video 
          className="absolute top-0 left-0 w-full h-full"
          autoPlay
          controls
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoPlayer;