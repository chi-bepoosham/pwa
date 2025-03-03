import React from "react";
import {ShieldVector} from "@/stories/Vectors";
import {MicIcon} from "@/stories/Icons";




export const VoiceAssistant = () => {
    return (
            <div
                className="relative w-full h-36 bg-secondary rounded-t-3xl flex justify-center items-center">
                <div className="absolute -top-40 translate-y-0 translate-x-0">
                    <ShieldVector/>
                </div>
                <div className="absolute -top-10 bg-white rounded-full flex items-center justify-center z-10">
                    <i className="text-primary cursor-pointer">
                        <MicIcon size={80}/>
                    </i>
                </div>
                <p className="text-white text-lg font-medium select-none">
                    سلام! من اینجا بهت کمک می‌کنم تا بتونی ...
                </p>
            </div>
    );
};
