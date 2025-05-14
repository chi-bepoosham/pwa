import React from "react";
import {
    RectangleVector,
    CircleVector,
    HourGlassVector,
    TriangleVector,
    ReverseTriangleVector
} from "@/stories/Vectors/index";

export interface TypesProps {
    selectedType: "rectangle" | "reverseTriangle" | "circle" | "hourglass" | "triangle";
}

interface BodyType {
    type: string;
    description: string;
    Component: React.ElementType;
}

const bodyTypes: BodyType[] = [
    {
        type: "rectangle",
        description: "عرض شانه ها با کمر و عرض لگن نسبت مناسبی دارد.",
        Component: RectangleVector
    },
    {
        type: "reverseTriangle",
        description: "شانه های پهن به نسبت عرض لگن است.",
        Component: ReverseTriangleVector
    },
    {
        type: "circle",
        description: "پهن ترین قسمت بدن در این بادی تایپ میانه بدن یا کمر است.",
        Component: CircleVector
    },
    {
        type: "hourglass",
        description: "عرض شانه و‌عرض لگن نسبتا هم اندازه و کمر به نسبت باریک است.",
        Component: HourGlassVector
    },
    {
        type: "triangle",
        description: "لگن پهن تر به نسبت عرض شانه و کمر است.",
        Component: TriangleVector
    }
];

export const Types = ({selectedType}: TypesProps) => {
    const selectedBodyType = bodyTypes.find(bt => bt.type === selectedType);

    if (!selectedBodyType) return <p>نوع بدنی یافت نشد.</p>;

    const {Component} = selectedBodyType;

    return (
        <div 
        className="flex flex-col items-center justify-center w-full h-full p-8 shrink-0 min-w-28"
        >
            <Component/>
        </div>
    );
};
