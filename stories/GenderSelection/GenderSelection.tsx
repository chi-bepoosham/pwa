import React from "react";

export interface GenderSelectionProps {
    title: string;
    options: {
        label: string;
        icon: React.ReactNode;
    }[];
}

export const GenderSelection = (props: GenderSelectionProps) => {
    const {title, options} = props;
    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold">{title}</h2>
            <div className="flex gap-4">
                {options.map((option, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-center p-4 border rounded-lg cursor-pointer hover:bg-gray-100"
                    >
                        <div className="mr-2">{option.icon}</div>
                        <span className="text-lg">{option.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};
