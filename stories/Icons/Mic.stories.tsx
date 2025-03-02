import React from "react";


export const Icon = ({size = 60}: { size?: number }) => {
    return (

        <svg
            width={size}
            height={size}
            viewBox="0 0 66 66"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                opacity={0.1}
                d="M16.0301 7.78048L7.54478 16.2658C-1.8278 25.6383 -1.8278 40.8343 7.54478 50.2069L16.0301 58.6922C25.4026 68.0648 40.5986 68.0648 49.9712 58.6922L58.4565 50.2069C67.8291 40.8343 67.8291 25.6383 58.4565 16.2658L49.9712 7.78048C40.5986 -1.5921 25.4026 -1.5921 16.0301 7.78048Z"
                fill="#4141F9"
            />
            <path
                d="M19.4233 12.8717L12.635 19.6599C5.13698 27.1579 5.13698 39.3147 12.635 46.8128L19.4233 53.601C26.9213 61.0991 39.0781 61.0991 46.5762 53.601L53.3644 46.8128C60.8625 39.3147 60.8625 27.1579 53.3644 19.6599L46.5762 12.8717C39.0781 5.37359 26.9213 5.37358 19.4233 12.8717Z"
                fill="#4141F9"
            />
            <path
                d="M38.2996 28.3589L38.2996 38.1151"
                stroke="white"
                strokeWidth={2.5}
                strokeLinecap="round"
            />
            <path
                d="M32.9988 32.2437L32.9988 34.2297"
                stroke="white"
                strokeWidth={2.5}
                strokeLinecap="round"
            />
            <path
                d="M54.2019 30.4155L54.2019 36.0571"
                stroke="white"
                strokeWidth={2.5}
                strokeLinecap="round"
            />
            <path
                d="M11.7974 32.2437L11.7974 34.2297"
                stroke="white"
                strokeWidth={2.5}
                strokeLinecap="round"
            />
            <path
                d="M22.3992 23.6001L22.3992 42.8726"
                stroke="white"
                strokeWidth={2.5}
                strokeLinecap="round"
            />
            <path
                d="M48.9031 26.9468L48.9031 39.5254"
                stroke="white"
                strokeWidth={2.5}
                strokeLinecap="round"
            />
            <path
                d="M27.7 26.1147L27.7 40.3589"
                stroke="white"
                strokeWidth={2.5}
                strokeLinecap="round"
            />
            <path
                d="M17.0981 28.5884L17.0981 37.8844"
                stroke="white"
                strokeWidth={2.5}
                strokeLinecap="round"
            />
            <path
                d="M43.6003 23.6001L43.6042 42.8726"
                stroke="white"
                strokeWidth={2.5}
                strokeLinecap="round"
            />
        </svg>

    )
}

export default {
    title: "Icons/Mic",
    component: Icon,
}


