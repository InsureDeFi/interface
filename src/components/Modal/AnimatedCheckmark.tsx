import React from 'react';

type Props = {
  size: number;
  color: string;
};

export default function AnimatedCheckmark({ size, color }: Props) {
  return (
    <svg width={size} version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
      <circle
        className="animate-[dash_0.9s_ease-in-out]"
        fill="none"
        stroke={color}
        strokeWidth="6"
        strokeMiterlimit="10"
        cx="65.1"
        cy="65.1"
        r="62.1"
        strokeDasharray={1000}
        strokeDashoffset={0}
      />
      <polyline
        className="animate-[dashCheck_0.9s_0.35s_ease-in-out_forwards]"
        fill="none"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        strokeMiterlimit="10"
        points="100.2,40.2 51.5,88.8 29.8,67.5 "
        strokeDasharray={1000}
        strokeDashoffset={-100}
      />
    </svg>
  );
}
