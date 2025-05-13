"use client";
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

export interface BottomNavigationProps {
}

export const BottomNavigation = (props: BottomNavigationProps) => {
  const {} = props;
  const pathname = usePathname();
  
  const navItems = [
    {
      actionIcon: <HomeIcon size={28} />,
      icon: <OutlineHomeIcon size={28} />,
      label: 'صفحه اصلی',
      href: '/home',
    },
    {
      actionIcon: <ChestIcon size={28} />,
      icon: <OutlineChestIcon size={28} />,
      label: 'فـروشگـاه',
      href: '/shop',
    },
    {
      actionIcon: <MyDrawerIcon size={28} />,
      icon: <OutlineMyDrawerIcon size={28} />,
      label: 'کمد لباسم',
      href: '/my-closet',
    },
  ];

  return (
    <div className="w-full flex flex-row justify-center items-center">
      {navItems.map((item, index) => {
        const isActive = pathname === item.href;
        return (
          <Link
            href={item.href}
            key={index}
            className={`flex flex-col gap-2.5 justify-center items-center cursor-pointer w-28 relative max-h-fit ${
              isActive ? "" : "group"
            }`}
          >
            <i className={isActive ? "text-primary" : "text-secondary group-hover:hidden"}>
              {isActive ? item.actionIcon : item.icon}
            </i>
            <i className={isActive ? "hidden" : "text-primary hidden group-hover:block"}>
              {item.actionIcon}
            </i>
            <span className={`truncate ${
              isActive ? "text-secondary" : "text-secondary-400 group-hover:text-secondary"
            }`}>
              {item.label}
            </span>
            <span
              className={`absolute -bottom-2 h-0.5 bg-primary rounded-2xl transition-all duration-300 ${
                isActive ? "w-8 h-1" : "w-0 group-hover:w-8 group-hover:h-1"
              }`}>
            </span>
          </Link>
        );
      })}
    </div>
  );
};
