import React from "react";


export const Icon = ({size = 60}: { size?: number }) => {
    return (

        <svg
            width={size}
            height={size}
            viewBox="0 0 8 9"
            fill="primary"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4.32324 8.16309L4.04264 7.40155C3.50394 5.93958 2.24457 4.86233 0.716797 4.55664C2.24457 4.25096 3.50394 3.1737 4.04264 1.71173L4.32324 0.950195L4.60385 1.71173C5.14255 3.1737 6.40191 4.25096 7.92969 4.55664C6.40191 4.86233 5.14255 5.93958 4.60385 7.40155L4.32324 8.16309Z"
            />
        </svg>

    )
}

export default {
    title: "Icons/Star",
    component: Icon,
}


