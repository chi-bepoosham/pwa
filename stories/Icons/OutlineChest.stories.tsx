import React from 'react';


export const Icon = ({ size = 60 }: { size?: number }) => {
  return (

    <svg
      width={size}
      height={size}
      viewBox="0 0 29 29"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.8302 25.8267H17.8302C23.6636 25.8267 25.9969 23.4934 25.9969 17.6601V10.6601C25.9969 4.82674 23.6636 2.49341 17.8302 2.49341H10.8302C4.99691 2.49341 2.66357 4.82674 2.66357 10.6601V17.6601C2.66357 23.4934 4.99691 25.8267 10.8302 25.8267Z"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g opacity={0.4}>
        <path
          d="M17.0721 12.8884C16.9554 13.7167 16.4654 14.4167 15.7887 14.8367V17.1467C15.7887 17.9517 15.1354 18.605 14.3304 18.605C13.5254 18.605 12.872 17.9517 12.872 17.1467V14.8367C12.1954 14.4167 11.7054 13.7167 11.5887 12.8884C11.5654 12.7601 11.5537 12.62 11.5537 12.48C11.5537 10.7067 13.2337 9.33005 15.0771 9.82005C16.0104 10.0651 16.7687 10.8234 17.0137 11.7567C17.1187 12.1417 17.1304 12.5267 17.0721 12.8884Z"
          strokeWidth={1.5}
          strokeMiterlimit={10}
        />
        <path
          d="M25.9973 12.8884H17.0723"
          strokeWidth={1.5}
          strokeMiterlimit={10}
        />
        <path
          d="M11.5886 12.8884H2.66357"
          strokeWidth={1.5}
          strokeMiterlimit={10}
        />
      </g>
    </svg>

  );
};

export default {
  title: 'Icons/OutlineChest',
  component: Icon,
};


