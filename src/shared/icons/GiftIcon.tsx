import React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export default function RoadIcon({ className, ...props }: Props) {
  return (
    <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <rect fill="none" height="256" width="256" />
      <rect
        fill="none"
        height="48"
        rx="8"
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
        width="192"
        x="32"
        y="80"
      />
      <path
        d="M208,128v72a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V128"
        fill="none"
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        fill="none"
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
        x1="128"
        x2="128"
        y1="80"
        y2="208"
      />
      <path
        d="M173.3,68.7C161.9,80,128,80,128,80s0-33.9,11.3-45.3a24,24,0,0,1,34,34Z"
        fill="none"
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M82.7,68.7C94.1,80,128,80,128,80s0-33.9-11.3-45.3a24,24,0,0,0-34,34Z"
        fill="none"
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </svg>
  );
}
