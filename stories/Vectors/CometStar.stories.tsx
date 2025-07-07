import React from 'react';


export const Vector = () => {
    return (
      <svg
        width={99}
        height={9}
        viewBox="0 0 99 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M95.0479 8.02886L94.7178 8.92473L94.3877 8.02886C93.9301 6.78702 93.0305 5.78115 91.8892 5.18255H-8.21188C-8.48801 5.18255 -8.71188 4.95869 -8.71188 4.68255C-8.71188 4.4064 -8.48801 4.18255 -8.21188 4.18255H91.8875C93.0296 3.58406 93.9299 2.57779 94.3877 1.33533L94.7178 0.439453L95.0479 1.33533C95.6816 3.0552 97.1632 4.32248 98.9604 4.68209C97.1632 5.0417 95.6816 6.30899 95.0479 8.02886Z"
            fill="url(#paint0_linear_1061_848)"
            fillOpacity={0.2}
          />
          <defs>
              <linearGradient
                id="paint0_linear_1061_848"
                x1={98.9604}
                y1={4.68209}
                x2={-8.71188}
                y2={4.68209}
                gradientUnits="userSpaceOnUse"
              >
                  <stop stopColor="#0C0D11" />
                  <stop offset={1} stopColor="#0C0D11" stopOpacity={0} />
              </linearGradient>
          </defs>
      </svg>

    )
}


export default {
    title: "Vector/CometStar",
    component: Vector,
}