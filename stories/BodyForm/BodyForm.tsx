import React from "react";
import {BFormVector, BorderVector, ShapeVector} from "@/stories/Vectors";

export interface BodyFormProps {
}

export const BodyForm = (props: BodyFormProps) => {
    const {} = props;
    return (
        <div className="">
            <BorderVector/>
            <div className="relative flex justify-center items-center">
                <ShapeVector/>
                <div className="absolute">
                    <BFormVector/>
                </div>
            </div>


        </div>
    );
};
