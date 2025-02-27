import React, {useRef, useState} from "react";
import {BackBoxVector} from "@/stories/Vectors";
import {Button} from "@heroui/react";
import {AddIcon, EditIcon} from "@/stories/Icons";
import Image from "next/image";

export interface UserProfileProps {
    title?: string;
    iconType?: "add" | "edit";
    onImageUpload?: (file: File) => void;
}

export const UserProfile = ({title, iconType = "add", onImageUpload}: UserProfileProps) => {
    const [image, setImage] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleButtonClick = () => {
        if (iconType === "add" && fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result as string);
                onImageUpload?.(file);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="relative flex flex-col items-center">
            <Button
                onPress={handleButtonClick}
                className="absolute z-20 -bottom-4 bg-primary text-white rounded-full flex items-center justify-center w-10 h-10"
            >
                {iconType === "add" ? <AddIcon size={20}/> : <EditIcon size={20}/>}
            </Button>
            <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileChange}
            />
            <div
                className="relative w-[6.5rem] h-[6.5rem] border border-secondary rounded-[28px] flex justify-center items-center z-10 px-2.5 py-10 bg-white after:bg-primary-50 after:w-full after:h-4 after:absolute after:rounded-[2px]">
                {image ? (
                    <Image
                        width="32"
                        height="32"
                        src={image}
                        alt="Profile"
                        className="w-full h-full absolute object-cover rounded-[28px]"
                    />
                ) : (
                    <h3 className="text-secondary truncate">{title}</h3>
                )}
            </div>
            <div className="absolute inset-0 flex items-center justify-center scale-125">
                <BackBoxVector/>
            </div>
        </div>
    );
};
