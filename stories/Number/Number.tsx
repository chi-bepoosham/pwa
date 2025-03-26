import React from "react";


export interface NumberProps {
    number: React.ReactNode;
}


export const Number = (props: NumberProps) => {
    const {number} = props;
    return (
        <div className="relative inline-block h-8">
            <div
                className=
                    "absolute -inset-2 h-full rounded-xl right-3.5 aspect-square -top-2 border-2 border-secondary flex items-center justify-center"
            >
                <div className="text-secondary text-2xl font-semibold">{number}</div>
            </div>

            <div
                className=
                    "relative bg-secondary-100 rounded-xl h-full aspect-square"
            >
            </div>
        </div>
    )
}