import React from "react";
import {Button} from "@heroui/react";


export interface MinorButtonProps {
    size?: "sm" | "md" | "lg";
    variant?: "solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "ghost";
    buttonTitle?: string;
    radius?:"none" | "sm" | "md" | "lg" | "full";
}

export const MinorButton = (props: MinorButtonProps) => {

    const {size, buttonTitle, variant,radius} = props;
    return (
        <Button
            size={size}
            variant={variant}
            radius={radius}
        >
            {buttonTitle}
        </Button>
    );
};







