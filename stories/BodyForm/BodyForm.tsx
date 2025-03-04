import React from "react";
import {DottedLineVector} from "@/stories/Vectors";

export interface BodyFormProps {
}

export const BodyForm = (props: BodyFormProps) => {
    const {} = props;
    return (
        <div className="relative bg-primary-100 w-52 h-72 rounded-3xl flex  justify-center items-center">
            <div className="absolute -top-28">
                <DottedLineVector/>
            </div>

        </div>
    );
};
