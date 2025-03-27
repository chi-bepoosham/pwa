"use client";
import React, {useState} from "react";
import {Button} from "@heroui/react";
import {motion} from "framer-motion";


export interface MinorButtonProps {
    size?: "sm" | "md" | "lg";
    variant?: "solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "ghost";
    buttonTitle?: string | React.ReactNode;
    radius?: "none" | "sm" | "md" | "lg" | "full";
    isLoading?: boolean;
    icon?: React.ReactNode;
    color?: "primary" | "secondary" | "success" | "warning" | "danger";
}


const getCustomColorClass = (color?: string) => {
    switch (color) {
        case "primary":
            return "bg-primary";
        case "secondary":
            return "bg-secondary";
        case "success":
            return "bg-white";
        case "warning":
            return "bg-yellow-500";
        case "danger":
            return "bg-red-500";
        default:
            return "bg-primary";
    }
};

export const MinorButton = (props: MinorButtonProps) => {
    const {
        size,
        buttonTitle,
        variant,
        radius,
        isLoading,
        icon,
        color = "primary",
    } = props;
    const [, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
    };

    return (
        <Button
            className={`!min-w-0 ${getCustomColorClass(color)}`}
            size={size}
            variant={variant}
            radius={radius}
            color={color}
            onPress={handleClick}
            startContent={icon}
        >
            {isLoading ? (
                <div className="flex justify-center gap-3">
                    <motion.div
                        className="w-3 h-3 bg-white rounded-full"
                        animate={{opacity: [1, 0.2, 1]}}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            repeatType: "loop",
                            delay: 1.4,
                        }}
                    />
                    <motion.div
                        className="w-3 h-3 bg-white rounded-full"
                        animate={{opacity: [1, 0.2, 1]}}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            repeatType: "loop",
                            delay: 1,
                        }}
                    />
                    <motion.div
                        className="w-3 h-3 bg-white rounded-full"
                        animate={{opacity: [1, 0.2, 1]}}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            repeatType: "loop",
                            delay: 0.6,
                        }}
                    />
                </div>
            ) : (
                buttonTitle
            )}
        </Button>
    );
};
