import React from "react";
import {Button} from "@heroui/react";
import {EmailIcon, InstagramIcon, TelegramIcon} from "@/stories/Icons";
import {sacramento} from "@/lib/font";


export interface SocialProps {
}

export const Social = (props: SocialProps) => {
    const {} = props
    return (
        <div className="flex flex-row-reverse gap-6 justify-center">
            <Button
                variant="bordered"
                className="w-40 h-40 flex flex-col items-center justify-center border-2 border-primary rounded-2xl bg-primary-50 active:bg-primary active:text-white active:transition active:duration-500"
            >
                <i className="mb-2">
                    <TelegramIcon size={36}/>
                </i>
                <span className={`text-xl ${sacramento.className}`}>
                    Telegram
                </span>
            </Button>

            <Button
                variant="bordered"
                className="w-40 h-40 flex flex-col items-center justify-center border-2 border-primary rounded-2xl bg-primary-50 active:bg-primary active:text-white active:transition active:duration-500"
            >
                <i className="mb-2">
                    <EmailIcon size={36}/>
                </i>
                <span className={`text-xl ${sacramento.className}`}>
                    Email
                </span>
            </Button>

            <Button
                variant="bordered"
                className="w-40 h-40 flex flex-col items-center justify-center border-2 border-primary rounded-2xl bg-primary-50 active:bg-primary active:text-white active:transition active:duration-500"
            >
                <i className="mb-2">
                    <InstagramIcon size={36}/>
                </i>
                <span className={`text-xl ${sacramento.className}`}>
                    Instagram
                </span>
            </Button>
        </div>
    );
};
