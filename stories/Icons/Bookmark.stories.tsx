import React from "react";


export const Icon = ({size = 60}: { size?: number }) => {
    return (

        <svg
            width={size}
            height={size}
            viewBox="0 0 21 21"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                opacity={0.4}
                d="M8.03125 7.57391C9.51458 8.11558 11.1313 8.11558 12.6146 7.57391"
                strokeWidth={1.2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M14.3398 1.69891H6.30651C4.53151 1.69891 3.08984 3.14891 3.08984 4.91558V16.6572C3.08984 18.1572 4.16484 18.7906 5.48151 18.0656L9.54818 15.8072C9.98151 15.5656 10.6815 15.5656 11.1065 15.8072L15.1732 18.0656C16.4898 18.7989 17.5648 18.1656 17.5648 16.6572V4.91558C17.5565 3.14891 16.1148 1.69891 14.3398 1.69891Z"
                strokeWidth={1.2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M14.3398 1.69891H6.30651C4.53151 1.69891 3.08984 3.14891 3.08984 4.91558V16.6572C3.08984 18.1572 4.16484 18.7906 5.48151 18.0656L9.54818 15.8072C9.98151 15.5656 10.6815 15.5656 11.1065 15.8072L15.1732 18.0656C16.4898 18.7989 17.5648 18.1656 17.5648 16.6572V4.91558C17.5565 3.14891 16.1148 1.69891 14.3398 1.69891Z"
                strokeWidth={1.2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>


    )
}

export default {
    title: "Icons/Bookmark",
    component: Icon,
}


