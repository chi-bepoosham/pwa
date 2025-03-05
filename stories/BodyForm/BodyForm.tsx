import React from "react";
import {BorderVector, ShapeVector} from "@/stories/Vectors";


export interface BodyFormProps {
}

export const BodyForm = (props: BodyFormProps) => {
    const {} = props;
    return (
        <div>
            <div className="relative flex items-center justify-center">
                <BorderVector/>
            </div>
            <ShapeVector/>
        </div>
    );
};
