import React from "react";


export const Icon = ({size = 60}: { size?: number }) => {
    return (

        <svg
            width={size}
            height={size}
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x={0.0424805}
                width={16}
                height={16}
                rx={7}
                fill="#0C0D11"
                fillOpacity={0.1}
            />
        </svg>


    )
}

export default {
    title: "Icons/Notification",
    component: Icon,
}


