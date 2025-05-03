export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface CountdownProps {
  targetDate: Date;
  onComplete: () => void;
}

export interface TimeUnitProps {
  value: number;
  label: string;
}

export interface VideoPlayerProps {
  videoSrc: string;
}