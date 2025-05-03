import { TimeLeft } from '../types';

export function calculateTimeLeft(targetDate: Date): TimeLeft {
  const difference = targetDate.getTime() - new Date().getTime();
  
  let timeLeft: TimeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }

  return timeLeft;
}

export function isTimeUp(timeLeft: TimeLeft): boolean {
  return timeLeft.days === 0 && 
         timeLeft.hours === 0 && 
         timeLeft.minutes === 0 && 
         timeLeft.seconds === 0;
}