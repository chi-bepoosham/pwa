import React from 'react';
import {
  ChestIcon,
  HomeIcon,
  OutlineHomeIcon,
  MyDrawerIcon,
  OutlineChestIcon,
  OutlineMyDrawerIcon,
} from '@/stories/Icons';

export interface BottomNavigationProps {
}

export const BottomNavigation = (props: BottomNavigationProps) => {
  const {} = props;
  const navItems = [
    {
      actionIcon: <HomeIcon size={28} />,
      icon: <OutlineHomeIcon size={28} />,
      label: 'صفحه اصلی',
    },
    {
      actionIcon: <ChestIcon size={28} />,
      icon: <OutlineChestIcon size={28} />,
      label: 'فـروشگـاه',
    },
    {
      actionIcon: <MyDrawerIcon size={28} />,
      icon: <OutlineMyDrawerIcon size={28} />,
      label: 'کمد لباسم',
    },
  ];

  return (
    <div className="w-full flex flex-row justify-center items-center">
      {navItems.map((item, index) => (
        <div
          key={index}
          className="flex flex-col gap-2.5 justify-center items-center group cursor-pointer w-28 relative"
        >
          <i className="text-secondary group-hover:hidden">{item.icon}</i>
          <i className="text-primary hidden group-hover:block">{item.actionIcon}</i>
          <span className="text-secondary-400 group-hover:text-secondary truncate">
            {item.label}
          </span>
          <span
            className="absolute -bottom-4 w-0 h-0.5 bg-primary rounded-2xl transition-all duration-300 group-hover:w-8 group-hover:h-1"></span>
        </div>
      ))}
    </div>
  );
};
