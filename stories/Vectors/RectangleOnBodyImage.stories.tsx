import React from 'react';

type VectorProps = {
  className?: string;
};

export const Vector: React.FC<VectorProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      viewBox="0 0 122 146"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <foreignObject x="-0.928223" y="-1" width="123.45" height="147.247">
        <div
          style={{
            backdropFilter: 'blur(0.5px)',
            clipPath: 'url(#bgblur_0_1164_2596_clip_path)',
            height: '100%',
            width: '100%',
          }}
        />
      </foreignObject>

      <path
        data-figma-bg-blur-radius="1"
        d="M8.08398 0.599609H113.51C119.252 0.599942 122.806 6.85757 119.865 11.79L89.2734 63.0977C85.7747 68.9658 85.7748 76.2802 89.2734 82.1484L119.865 133.457C122.806 138.39 119.252 144.646 113.51 144.646H8.08398C2.34122 144.646 -1.21331 138.39 1.72754 133.457L32.3193 82.1484C35.8181 76.2802 35.8182 68.9659 32.3193 63.0977L1.72754 11.79C-1.21343 6.85744 2.34117 0.599609 8.08398 0.599609Z"
        fill="url(#paint0_linear_1164_2596)"
        stroke="white"
        strokeWidth={1.2}
      />
      <defs>
        <clipPath id="bgblur_0_1164_2596_clip_path" transform="translate(0.928223 1)">
          <path d="M8.08398 0.599609H113.51C119.252 0.599942 122.806 6.85757 119.865 11.79L89.2734 63.0977C85.7747 68.9658 85.7748 76.2802 89.2734 82.1484L119.865 133.457C122.806 138.39 119.252 144.646 113.51 144.646H8.08398C2.34122 144.646 -1.21331 138.39 1.72754 133.457L32.3193 82.1484C35.8181 76.2802 35.8182 68.9659 32.3193 63.0977L1.72754 11.79C-1.21343 6.85744 2.34117 0.599609 8.08398 0.599609Z" />
        </clipPath>
        <linearGradient
          id="paint0_linear_1164_2596"
          x1="218.962"
          y1="252.354"
          x2="48.2513"
          y2="-68.495"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0999616" stopColor="white" />
          <stop offset="0.642157" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default {
  title: 'Vector/RectangleOnBodyImage',
  component: Vector,
};
