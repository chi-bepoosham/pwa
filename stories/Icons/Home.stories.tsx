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
        d="M10.7733 3.73226L4.48499 8.63226C3.435 9.44893 2.58333 11.1873 2.58333 12.5056V21.1506C2.58333 23.8573 4.78833 26.0739 7.49499 26.0739H21.005C23.7117 26.0739 25.9167 23.8573 25.9167 21.1623V12.6689C25.9167 11.2573 24.9717 9.44893 23.8167 8.64393L16.6067 3.59226C14.9733 2.44893 12.3483 2.50726 10.7733 3.73226Z"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity={0.34}
        d="M14.25 21.4072V17.9072"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>


  );
};

export default {
  title: 'Icons/Home',
  component: Icon,
};


