"use client";
import React, {useState} from "react";
import {Button} from "@heroui/react";
import {motion} from "framer-motion";

export interface MinorButtonProps {
    size?: "sm" | "md" | "lg";
    variant?: "solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "ghost";
    buttonTitle?: string;
    radius?: "none" | "sm" | "md" | "lg" | "full";
    isLoading?: boolean;
}

export const MinorButton = (props: MinorButtonProps) => {
    const {size, buttonTitle, variant, radius, isLoading} = props;
    const [, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
    };

    return (
        <Button
            size={size}
            variant={variant}
            radius={radius}
            color="primary"
            onPress={handleClick}
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
