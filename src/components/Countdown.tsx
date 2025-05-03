import React, { useState, useEffect } from 'react';
import { CountdownProps, TimeLeft } from '../types';
import { calculateTimeLeft, isTimeUp } from '../utils/dateUtils';
import TimeUnit from './TimeUnit';

const Countdown: React.FC<CountdownProps> = ({ targetDate, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(targetDate));
  
  useEffect(() => {
    const timer = setTimeout(() => {
      const updatedTimeLeft = calculateTimeLeft(targetDate);
      setTimeLeft(updatedTimeLeft);
      
      if (isTimeUp(updatedTimeLeft)) {
        onComplete();
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [targetDate, timeLeft, onComplete]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-row justify-center items-center">
        <TimeUnit value={timeLeft.days} label="Days" />
        <div className="text-white text-2xl sm:text-3xl md:text-4xl pb-4">:</div>
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <div className="text-white text-2xl sm:text-3xl md:text-4xl pb-4">:</div>
        <TimeUnit value={timeLeft.minutes} label="Minutes" />
        <div className="text-white text-2xl sm:text-3xl md:text-4xl pb-4">:</div>
        <TimeUnit value={timeLeft.seconds} label="Seconds" />
      </div>
    </div>
  );
};

export default Countdown;