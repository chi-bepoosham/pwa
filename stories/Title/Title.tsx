import React from "react";
import {StarVector} from "@/stories/Vectors";

export interface TitleRowProps {
    withStar?: boolean;
}

export const Title = (props: TitleRowProps) => {
    const {withStar} = props;

    return (
        <div className="flex flex-col gap-3 justify-center items-center w-full h-screen">
            <i className="text-white/50">

            </i>
            {withStar && <StarVector/>}
        </div>
    );
};






