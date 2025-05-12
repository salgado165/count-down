import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import Countdown from './components/Countdown';
import VideoPlayer from './components/VideoPlayer';

function App() {
  // Set target date to May 23rd at 2 PM Eastern Time
  const targetDate = new Date('May 12, 2025 15:00:00 EDT');
  
  // Video file path relative to the src directory
  const videoSrc = '/src/videos/countdown-complete.mp4';
  
  const [isCountdownComplete, setIsCountdownComplete] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  
  // Update current time
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  const handleCountdownComplete = () => {
    setIsCountdownComplete(true);
  };

  // Format time options for Charlotte timezone
  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
    timeZone: 'America/New_York'
  };

  const dateOptions: Intl.DateTimeFormatOptions = {
    timeZone: 'America/New_York',
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  };

  const charlotteTime = currentTime.toLocaleTimeString('en-US', timeOptions);
  const charlotteDate = currentTime.toLocaleDateString('en-US', dateOptions);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-gray-800/30 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden">
        <div className="p-6 sm:p-8 md:p-10">
          {!isCountdownComplete ? (
            <div className="flex flex-col items-center space-y-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="w-6 h-6 mr-2 text-purple-400" />
                  <h2 className="text-lg font-semibold text-purple-400">THE COUNTDOWN IS ON</h2>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
                  Time Until <span className="text-purple-400">May 12nd</span>
                </h1>
                <p className="text-gray-300 text-sm">
                  Charlotte, NC Time: {charlotteTime} · {charlotteDate}
                </p>
              </div>
              
              <Countdown targetDate={targetDate} onComplete={handleCountdownComplete} />
              
              <div className="text-center max-w-md mx-auto">
                <p className="text-gray-300 text-sm mb-2">
                  Stay tuned for something special when the countdown ends!
                </p>
                <div className="flex justify-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse delay-150"></div>
                  <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse delay-300"></div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center space-y-6">
              <div className="text-center mb-4">
                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  The Wait Is Over!
                </h1>
                <p className="text-gray-300">Enjoy the video below</p>
              </div>
              
              <VideoPlayer videoSrc={videoSrc} />
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-8 text-gray-400 text-sm text-center">
        <p>© 2025 · Made with Love</p>
      </div>
    </div>
  );
}

export default App;