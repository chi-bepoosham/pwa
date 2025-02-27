import React from "react";
import {NotificationIcon} from "@/stories/Icons";


export interface NotificationProps {

}


export const Notification = (props: NotificationProps) => {
    const {} = props;
    return (
        <div className="flex justify-between">
            <div className="flex flex-row-reverse gap-2">
                <span className="text-secondary font-semibold">
                    اعـلان‌هـای اپـلیکیشـن
                </span>
                <i className="text-secondary">
                    <NotificationIcon size={25}/>
                </i>
            </div>
            <div>

            </div>
        </div>
    )
}