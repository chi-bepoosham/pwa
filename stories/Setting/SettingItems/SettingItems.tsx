'use client';

import React, { useEffect, useRef, useState } from 'react';
import { addToast, Listbox, ListboxItem, Switch } from '@heroui/react';
import {
  BookmarkIcon,
  InfoIcon,
  NotificationIcon,
  PaymentIcon,
  ShareIcon,
  UserIcon,
} from '@/stories/Icons';
// import { json } from 'stream/consumers';

// export interface SettingItemProps {}

export const SettingItems = () => {
  //   const {} = props;

  const appLink = 'https://chibepoosham.app';

  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false);

  const handleNotificationsClick = () => {
    setIsNotificationsEnabled(!isNotificationsEnabled);
  };

  const isFirst = useRef(true);
  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    if (isNotificationsEnabled) {
      addToast({
        title: 'اعلان‌های اپلیکیشن فعال شد',
        color: 'success',
      });
    } else {
      addToast({
        title: 'اعلان‌های اپلیکیشن غیرفعال شد',
        color: 'success',
      });
    }
  }, [isNotificationsEnabled]);

  return (
    <div>
      <Listbox
        aria-label="User Menu"
        className="p-0 gap-0 w-full overflow-visible"
        itemClasses={{
          base: 'px-3 first:rounded-t-medium last:rounded-b-medium rounded-none gap-3 h-12 data-[hover=true]:bg-secondary-50',
        }}
      >
        <ListboxItem
          href="/profile/info"
          key="user info"
          endContent={<ChevronRightIcon />}
          startContent={<UserIcon size={24} />}
        >
          اطلاعات حساب کاربری
        </ListboxItem>
        <ListboxItem
          href="/"
          isDisabled={true}
          key="orders payment"
          endContent={<ChevronRightIcon />}
          startContent={<PaymentIcon size={24} />}
        >
          سفارشات و تراکنش‌ها
        </ListboxItem>
        <ListboxItem
          isDisabled={true}
          href="/profile/shown"
          key="bookmarks"
          endContent={<ChevronRightIcon />}
          startContent={<BookmarkIcon size={24} />}
        >
          مـحصولات نـشان‌شده
        </ListboxItem>
        <ListboxItem
          key="share"
          onPress={async () => {
            const link = appLink;

            try {
              await navigator.share({
                title: 'چی بپوشم؟ ',
                text: 'یه اپلیکیشن هوشمند برای انتخاب استایل — امتحانش کن!',
                url: link,
              });
            } catch (err) {
              addToast({
                title: 'اشتراک گذاری با خطا مواجه شد',
                color: 'warning',
              });
            }
          }}
          endContent={<ChevronRightIcon />}
          startContent={<ShareIcon size={24} />}
        >
          مـــعرفی بــه دوستـــان
        </ListboxItem>
        <ListboxItem
          href="/profile/about"
          key="aboutus"
          endContent={<ChevronRightIcon />}
          startContent={<InfoIcon size={24} />}
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
          startContent={<NotificationIcon size={24} />}
        >
          اعـلان‌هـای اپـلیکیشـن
        </ListboxItem>
      </Listbox>
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
};
