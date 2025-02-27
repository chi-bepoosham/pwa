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
                d="M18.7334 14.1656L16.1251 8.0739C15.2418 6.00723 13.6168 5.9239 12.5251 7.89056L10.9501 10.7322C10.1501 12.1739 8.65843 12.2989 7.6251 11.0072L7.44177 10.7739C6.36677 9.4239 4.8501 9.59056 4.0751 11.1322L2.64177 14.0072C1.63343 16.0072 3.09177 18.3656 5.3251 18.3656H15.9584C18.1251 18.3656 19.5834 16.1572 18.7334 14.1656Z"
                strokeWidth={1.2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                opacity={0.4}
                d="M6.47559 6.69891C7.8563 6.69891 8.97559 5.57963 8.97559 4.19891C8.97559 2.8182 7.8563 1.69891 6.47559 1.69891C5.09487 1.69891 3.97559 2.8182 3.97559 4.19891C3.97559 5.57963 5.09487 6.69891 6.47559 6.69891Z"
                strokeWidth={1.2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>


    )
}

export default {
    title: "Icons/Shape",
    component: Icon,
}


