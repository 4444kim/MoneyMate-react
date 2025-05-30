import React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export default function FreelanseIcon({ className, ...props }: Props) {
  return (
    <svg
      id="Layer_1"
      version="1.1"
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}>
      <g>
        <path d="M26.5,126.8h100.3V112l-11.5-21.7l-6.8,3.6l10.6,20v5.2h-17l4-48H20.7L26.5,126.8z M97.8,78.8l-3.4,40.3h-61l-4.2-40.3   H97.8z" />
        <path d="M90.8,38c0-14.8-12-26.8-26.8-26.8S37.2,23.2,37.2,38s12,26.8,26.8,26.8S90.8,52.8,90.8,38z M44.8,38   c0-10.6,8.6-19.2,19.2-19.2S83.2,27.4,83.2,38S74.6,57.2,64,57.2S44.8,48.6,44.8,38z" />
        <polygon points="19.4,94 12.6,90.4 1.1,112 1.1,126.8 18,126.8 18,119.2 8.8,119.2 8.8,114  " />
        <circle cx="63" cy="98" r="4" />
      </g>
    </svg>
  );
}
