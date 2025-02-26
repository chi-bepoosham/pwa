import React from "react";
import { CometStarVector } from "@/stories/Vectors";

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
                <i className="text-secondary font-semibold text-nowrap">{text}</i>
                {withStar && <i className={`rotate-180 text-${starColor}`}><CometStarVector /></i>}
            </div>
            {description && <p className="text-sm text-gray-400 mt-1">{description}</p>}
        </div>
    );
};
