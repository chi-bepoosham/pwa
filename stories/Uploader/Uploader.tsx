"use client";
import React, {useState, useCallback} from "react";
import {useDropzone} from "react-dropzone";
import {Button} from "@heroui/react";
import {AddIcon, EditIcon} from "@/stories/Icons";
import Image from "next/image";
import clsx from "clsx";


type sizeType = "medium" | "large" | "x-large";

export interface UploaderProps {
    title?: string | React.ReactNode;
    onImageUpload?: (file: File) => void;
    size: sizeType;
}

export const Uploader = (props: UploaderProps) => {
    const {title, onImageUpload, size} = props;

    const [image, setImage] = useState<string | null>(null);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles.length > 0) {
            const file = acceptedFiles[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result as string);
                onImageUpload?.(file);
            };
            reader.readAsDataURL(file);
        }
    }, [onImageUpload]);

    const {getRootProps, getInputProps, open} = useDropzone({
        onDrop,
        accept: {"image/png": [], "image/jpeg": [], "image/jpg": []},
        maxSize: 2 * 1024 * 1024,
    });

    let sizeClass = "";
    switch (size) {
        case "medium":
            sizeClass = "w-[8rem] h-[8rem] text-base";
            break;
        case "large":
            sizeClass = "w-[10rem] h-[10rem] text-lg";
            break;
        case "x-large":
            sizeClass = "w-[14rem] h-[18rem] text-xl";
            break;
        default:
            sizeClass = "w-[6.5rem] h-[6.5rem] text-base";
            break;
    }

    const IconComponent = image ? EditIcon : AddIcon;

    return (
        <div className="relative flex flex-col items-center">

            <Button
                onPress={open}
                className={clsx(
                    "absolute z-20 bg-primary text-white flex items-center justify-center px-2.5",
                    size === "x-large"
                        ? "absolute bottom-4 w-[calc(85%)] rounded-2xl"
                        : "-bottom-4 min-w-0 rounded-full"
                )}
            >
                <IconComponent size={20}/>
                {size === "x-large" && (image ? "ویرایش عکس" : "افزودن عکس")}
            </Button>
            <div {...getRootProps({className: "hidden"})}>
                <input {...getInputProps()} />
            </div>
            <div
                className={clsx(
                    `relative ${sizeClass} border-2 border-secondary rounded-[28px] flex justify-center items-center z-10 px-2.5 py-10 bg-white`,
                    ["medium", "large"].includes(size)
                        ? "after:bg-primary-100 after:h-4 after:absolute after:rounded-[2px]"
                        : "",
                    size === "medium" ? "after:w-full" : "",
                    size === "large" ? "after:w-[80%]" : ""
                )}
            >
                {image ? (
                    <Image
                        width="32"
                        height="32"
                        src={image}
                        alt="Profile"
                        className="w-full h-full absolute object-cover rounded-[28px]"
                    />
                ) : (
                    <div className="text-secondary truncate select-none text-nowrap">
                        {title}
                    </div>
                )}
            </div>
            <div
                className={clsx(
                    "absolute inset-0 flex items-center justify-center bg-secondary-50 w-full h-full rounded-[35px]",
                    size === "medium" ? "rotate-45" : "-rotate-[7deg]"
                )}
            >
            </div>
        </div>
    );
};
