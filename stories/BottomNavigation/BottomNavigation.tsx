import React from 'react';
import { ChestIcon, HomeIcon, MyDrawerIcon } from '@/stories/Icons';

export interface BottomNavigationProps {
}

export const BottomNavigation = (props: BottomNavigationProps) => {
  const {} = props;
  const navItems = [
    { icon: <HomeIcon size={28} />, label: 'صفحه اصلی' },
    { icon: <ChestIcon size={28} />, label: 'فـروشگـاه' },
    { icon: <MyDrawerIcon size={28} />, label: 'کمد لباسم' },
  ];

  return (
    <div className="w-full flex flex-row justify-center items-center">
      {navItems.map((item, index) => (
        <div
          key={index}
          className="flex flex-col gap-2.5 justify-center items-center group cursor-pointer w-28 relative"
        >
          <i className="text-secondary group-hover:text-primary">{item.icon}</i>
          <span className="text-secondary group-hover:text-primary truncate">{item.label}</span>
          <span
            className="absolute -bottom-4 w-0 h-0.5 bg-primary rounded-2xl transition-all duration-300 group-hover:w-8 group-hover:h-1"
          >
          </span>
        </div>
      ))}
    </div>
  );
};
