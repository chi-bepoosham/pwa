import React from "react";
import {NotificationIcon} from "@/stories/Icons";
import {Switch} from "@heroui/react";


export interface NotificationProps {

}


export const Notification = (props: NotificationProps) => {
    const {} = props;
    return (
        <div className="flex justify-between w-full mx-2">
            <div className="flex flex-row-reverse gap-2 items-center">
                <span className="text-secondary font-semibold select-none">
                    اعـلان‌هـای اپـلیکیشـن
                </span>
                <i className="text-secondary">
                    <NotificationIcon size={24}/>
                </i>
            </div>
            <div>
                <Switch color="secondary" size="md"/>
            </div>
        </div>
    )
}