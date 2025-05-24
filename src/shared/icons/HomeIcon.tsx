import React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export default function HomeIcon({ className, ...props }: Props) {
  return (
    <svg
      height="48"
      viewBox="0 0 48 48"
      width="48"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}>
      <path d="M20 40V28h8v12h10V24h6L24 6 4 24h6v16z" />
      <path d="M0 0h48v48H0z" fill="none" />
    </svg>
  );
}
