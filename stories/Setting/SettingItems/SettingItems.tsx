"use client";
import React, {useEffect, useRef, useState} from "react";
import {Listbox, ListboxItem, Switch} from "@heroui/react";
import {BookmarkIcon, InfoIcon, NotificationIcon, ShareIcon, UserIcon} from "@/stories/Icons";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export interface SettingItemProps {
}

export const SettingItems = (props: SettingItemProps) => {
    const {} = props;
    const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false);

    const handleNotificationsClick = () => {
        setIsNotificationsEnabled(!isNotificationsEnabled);
    };


    const isFirst = useRef(true)
    useEffect(() => {
        if (isFirst.current) {
            isFirst.current = false
            return
        }
        if (isNotificationsEnabled) {
            toast.info("اعلان‌های اپلیکیشن فعال شد", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            toast.info("اعلان‌های اپلیکیشن غیرفعال شد", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }, [isNotificationsEnabled])

    return (
        <div>
            <Listbox
                aria-label="User Menu"
                className="p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1 max-w-[300px] overflow-visible shadow-small rounded-medium"
                itemClasses={{
                    base: "px-3 first:rounded-t-medium last:rounded-b-medium rounded-none gap-3 h-12 data-[hover=true]:bg-secondary-50",
                }}
            >
                <ListboxItem
                    key="user info"
                    endContent={<ChevronRightIcon/>}
                    startContent={<UserIcon size={24}/>}
                >
                    اطلاعات حساب کاربری
                </ListboxItem>
                <ListboxItem
                    key="orders payment"
                    endContent={<ChevronRightIcon/>}
                    startContent={<BookmarkIcon size={24}/>}
                >
                    سفارشات و تراکنش‌ها
                </ListboxItem>
                <ListboxItem
                    key="bookmarks"
                    endContent={<ChevronRightIcon/>}
                    startContent={<BookmarkIcon size={24}/>}
                >
                    مـحصولات نـشان‌شده
                </ListboxItem>
                <ListboxItem
                    key="share"
                    endContent={<ChevronRightIcon/>}
                    startContent={<ShareIcon size={24}/>}
                >
                    مـــعرفی بــه دوستـــان
                </ListboxItem>
                <ListboxItem
                    key="aboutus"
                    endContent={<ChevronRightIcon/>}
                    startContent={<InfoIcon size={24}/>}
                >
                    دربارۀ تیم ما
                </ListboxItem>
                <ListboxItem
                    key="notifications"
                    onPress={handleNotificationsClick}
                    endContent={
                        <Switch
                            color="secondary"
                            isSelected={isNotificationsEnabled}
                            onValueChange={setIsNotificationsEnabled}
                        />
                    }
                    startContent={<NotificationIcon size={24}/>}
                >
                    اعـلان‌هـای اپـلیکیشـن
                </ListboxItem>
            </Listbox>
            <ToastContainer/>
        </div>
    );
};

export const ChevronRightIcon = () => {
    return (
        <svg
            className="rotate-180"
            aria-hidden="true"
            fill="none"
            focusable="false"
            height="1em"
            role="presentation"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            width="1em"
        >
            <path d="m9 18 6-6-6-6"/>
        </svg>
    );
};
