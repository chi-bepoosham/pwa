'use client';
import React from 'react';
import {
  ChestIcon,
  HomeIcon,
  OutlineHomeIcon,
  MyDrawerIcon,
  OutlineChestIcon,
  OutlineMyDrawerIcon,
} from '@/stories/Icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { addToast } from '@heroui/react';

export interface BottomNavigationProps {
  isDisabled?: boolean;
}

export const BottomNavigation = (props: BottomNavigationProps) => {
  const {} = props;
  const pathname = usePathname();

  const navItems = [
    {
      actionIcon: <HomeIcon size={22} />,
      icon: <OutlineHomeIcon size={22} />,
      label: 'صفحه اصلی',
      href: '/home',
    },
    {
      actionIcon: <ChestIcon size={22} />,
      icon: <OutlineChestIcon size={22} />,
      label: 'فـروشگـاه',
      href: '/shop',
      disabled: true,
    },
    {
      actionIcon: <MyDrawerIcon size={22} />,
      icon: <OutlineMyDrawerIcon size={22} />,
      label: 'کمد لباسم',
      href: '/my-closet',
    },
  ];

  const disabledHandler = () => {
    addToast({
      title: 'این قسمت هنوز فعال نشده است',
      color: 'warning',
    });
  };

  return (
    <div className="h-20 bg-white shadow-[0px_-10px_24px_0px_#f1f1f1] rounded-t-[40px] w-full max-w-screen-sm mx-auto flex flex-row justify-center items-center">
      {navItems.map((item, index) => {
        const isActive = pathname === item.href;
        return (
          <Link
            href={item.disabled ? '#' : item.href}
            key={index}
            data-active={isActive}
            onClick={item.disabled ? disabledHandler : undefined}
            className={clsx(
              'flex flex-col gap-2 justify-center items-center cursor-pointer w-28 relative max-h-fit group text-sm'
            )}
          >
            <i className="group-data-[active=true]:text-primary text-secondary group-data-[active=true]:hidden group-hover:hidden">
              {item.icon}
            </i>
            <i className="text-primary hidden group-data-[active=true]:block group-hover:block">
              {item.actionIcon}
            </i>
            <span className="truncate group-data-[active=true]:text-secondary text-secondary-400 group-hover:text-secondary">
              {item.label}
            </span>
            <span className="absolute -bottom-2 h-1 bg-primary rounded-2xl transition-all duration-300 group-data-[active=true]:w-6 w-0 group-hover:w-8" />
          </Link>
        );
      })}
    </div>
  );
};
