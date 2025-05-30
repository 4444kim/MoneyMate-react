import React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export default function RoadIcon({ className, ...props }: Props) {
  return (
    <svg
      enable-background="new 0 0 48 48"
      height="48px"
      version="1.1"
      viewBox="0 0 48 48"
      width="48px"
      className={className}
      {...props}>
      <g id="Expanded">
        <g>
          <g>
            <path d="M31,48c-0.553,0-1-0.447-1-1V1c0-0.553,0.447-1,1-1s1,0.447,1,1v46C32,47.553,31.553,48,31,48z" />
          </g>
          <g>
            <path d="M37,31h-6c-0.553,0-1-0.447-1-1s0.447-1,1-1h4.996c-0.133-16.802-3.585-26.66-5.014-27.002     c-0.552,0-0.991-0.446-0.991-0.999C29.991,0.447,30.447,0,31,0c4.188,0,7,15.512,7,30C38,30.553,37.553,31,37,31z" />
          </g>
          <g>
            <path d="M17,18c-3.859,0-7-3.141-7-7V1c0-0.553,0.447-1,1-1s1,0.447,1,1v10c0,2.757,2.243,5,5,5s5-2.243,5-5V1     c0-0.553,0.447-1,1-1s1,0.447,1,1v10C24,14.859,20.859,18,17,18z" />
          </g>
          <g>
            <path d="M17,48c-0.553,0-1-0.447-1-1V1c0-0.553,0.447-1,1-1s1,0.447,1,1v46C18,47.553,17.553,48,17,48z" />
          </g>
        </g>
      </g>
    </svg>
  );
}
