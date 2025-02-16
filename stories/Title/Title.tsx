import React from "react";
import {CometStarVector} from "@/stories/Vectors";

export interface TitleRowProps {
    withStar?: boolean;
    text?: string;
}

export const Title = (props: TitleRowProps) => {
    const {withStar, text} = props;

    return (
        <div className="flex flex-row gap-3 justify-center items-center overflow-hidden">
            {withStar && <i className="text-white"><CometStarVector/></i>}
            <i className="text-secondary font-semibold text-nowrap">{text}</i>
            {withStar && <i className="rotate-180 text-white"><CometStarVector/></i>}
        </div>
    );
};
