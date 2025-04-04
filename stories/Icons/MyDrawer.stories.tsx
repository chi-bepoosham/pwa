import React from 'react';


export const Icon = ({ size = 60 }: { size?: number }) => {
  return (

    <svg
      width={29}
      height={29}
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
    >
      <path
        d="M10.8633 26.0857H17.8633C23.6966 26.0857 26.0299 23.7523 26.0299 17.919V10.919C26.0299 5.08565 23.6966 2.75232 17.8633 2.75232H10.8633C5.02995 2.75232 2.69661 5.08565 2.69661 10.919V17.919C2.69661 23.7523 5.02995 26.0857 10.8633 26.0857Z"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g opacity={0.4}>
        <path
          d="M14.3633 2.75232V26.0857"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.69661 11.5023H14.3633"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.3633 17.3357H26.0299"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>

  );
};

export default {
  title: 'Icons/MyDrawer',
  component: Icon,
};


