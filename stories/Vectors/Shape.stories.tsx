import React from 'react';


export const Vector = () => {
    return (

        <svg
            width={155}
            height={181}
            viewBox="0 0 155 181"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M8.87344 1.11591H146.312C152.132 1.11591 155.734 7.4575 152.754 12.4568L111.786 81.1678C108.306 87.0045 108.306 94.2793 111.786 100.116L152.754 168.827C155.734 173.826 152.132 180.168 146.312 180.168H8.87345C3.05304 180.168 -0.549154 173.826 2.43156 168.827L43.3992 100.116C46.8792 94.2793 46.8792 87.0046 43.3992 81.1678L2.43156 12.4568C-0.549148 7.45751 3.05303 1.11591 8.87344 1.11591Z"
                fill="#4141F9"
                fillOpacity={0.05}
                stroke="url(#paint0_linear_7_19)"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_7_19"
                    x1={25.897}
                    y1={-14.4232}
                    x2={95.897}
                    y2={35.0768}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#0C0D11"/>
                    <stop offset={1} stopColor="#0C0D11" stopOpacity={0}/>
                </linearGradient>
            </defs>
        </svg>


    )
}


export default {
    title: "Vector/Shape",
    component: Vector,
}