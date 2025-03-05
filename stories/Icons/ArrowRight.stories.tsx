import React from "react";


export const Icon = ({size = 60}: { size?: number }) => {
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
                d="M16.96 7.49548L24.0416 14.5772L16.96 21.6588"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M4.20825 14.5771H23.8433"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>


    )
}

export default {
    title: "Icons/ArrowRight",
    component: Icon,
}


