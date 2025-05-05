import React from "react";
import { CometStarVector } from "@/stories/Vectors";
import {sacramento} from "@/lib/font";

export interface TitleRowProps {
    withStar?: boolean;
    text?: string;
    description?: string;
    starColor?: string;
}

export const Title = (props: TitleRowProps) => {
    const { withStar, text, description, starColor = "white" } = props;

    return (
        <div className="flex flex-col items-center text-center">
            <div className="flex flex-row gap-3 justify-center items-center overflow-hidden">
                {withStar && <i className={`text-${starColor}`}><CometStarVector /></i>}
                <span className={`${sacramento.className} text-secondary-300 text-nowrap text-2xl`}>{text}</span>
                {withStar && <i className={`rotate-180 text-${starColor}`}><CometStarVector /></i>}
            </div>
            {description && <span className="text-sm text-secondary font-semibold">{description}</span>}
        </div>
    );
};
