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
                d="M7.01076 5.44891H13.0108C15.8441 5.44891 16.1274 6.77391 16.3191 8.39058L17.0691 14.6406C17.3108 16.6906 16.6774 18.3656 13.7608 18.3656H6.2691C3.3441 18.3656 2.71076 16.6906 2.96076 14.6406L3.71077 8.39058C3.8941 6.77391 4.17743 5.44891 7.01076 5.44891Z"
                strokeWidth={1.2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                opacity={0.4}
                d="M6.67773 6.69891V3.78225C6.67773 2.53225 7.51107 1.69891 8.76107 1.69891H11.2611C12.5111 1.69891 13.3444 2.53225 13.3444 3.78225V6.69891"
                strokeWidth={1.2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                opacity={0.4}
                d="M17.0194 14.2239H6.67773"
                strokeWidth={1.2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>


    )
}

export default {
    title: "Icons/Orders",
    component: Icon,
}


