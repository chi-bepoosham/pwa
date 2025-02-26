import React from "react";
import {BackBoxVector} from "@/stories/Vectors";
import {Button} from "@heroui/react";
import {AddIcon, EditIcon} from "@/stories/Icons";

export interface UserProfileProps {
    title?: string;
    icon?: React.ReactNode;
}

export const UserProfile = ({title, icon}: UserProfileProps) => {
    return (
        <div className="relative flex flex-col items-center">
            <Button
                className="absolute z-20 -bottom-4 bg-primary text-white rounded-full flex items-center justify-center w-fit">
                {icon || <AddIcon size={20}/> || <EditIcon size={20}/>}
            </Button>
            <div
                className="border border-secondary rounded-[28px] flex justify-center items-center relative z-10 px-2.5 py-10 bg-white">
                <h3 className="text-secondary">{title}</h3>
            </div>
            <div className="absolute inset-0 flex items-center justify-center scale-125">
                <BackBoxVector/>
            </div>
        </div>
    );
};
