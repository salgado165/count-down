import React, { useEffect, useRef } from 'react';
import { VideoPlayerProps } from '../types';

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoSrc }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Autoplay failed:', error);
      });
    }
  }, []);

  return (
    <div className="w-full max-w-[500px] mx-auto overflow-hidden rounded-lg shadow-lg">
      <div className="relative pb-[177.78%]">
        <video 
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-contain bg-black"
          autoPlay
          controls
          playsInline
          muted
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoPlayer;