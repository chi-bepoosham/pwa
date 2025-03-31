import React from "react";
import {BFormVector, BorderVector} from "@/stories/Vectors";

export interface BodyFormProps {
}

export const BodyForm = (props: BodyFormProps) => {
    const {} = props;
    return (
        <div className="relative flex items-center justify-center">
            <BorderVector/>
            <div>
                <BFormVector/>
            </div>
        </div>
    );
};
