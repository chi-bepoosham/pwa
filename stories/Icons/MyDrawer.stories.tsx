import React from 'react';


export const Icon = ({ size = 60 }: { size?: number }) => {
  return (

    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.19 2H12.75V8V8.75V13.75H22V8.75V8V7.81C22 4.17 19.83 2 16.19 2Z"
      />
      <path
        d="M2 10.25V15.25V15.75V16.19C2 19.83 4.17 22 7.81 22H11.25V15.75V15.25V10.25H2Z"
      />
      <path d="M11.25 2V8.75H2V7.81C2 4.17 4.17 2 7.81 2H11.25Z"
      />
      <path
        d="M22 15.25V16.19C22 19.83 19.83 22 16.19 22H12.75V15.25H22Z"
      />
    </svg>

  );
};

export default {
  title: 'Icons/MyDrawer',
  component: Icon,
};


