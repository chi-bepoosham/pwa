'use client';

import { usePathname } from 'next/navigation';
import { BottomNavigation } from '../BottomNavigation';

export const BottomNavWrapper = () => {
  const pathname = usePathname();

  const hideOnRoutes = [
    '/body_types',
    '/profile',
    '/celebrities',
    '/profile/about',
    '/profile/info',
  ];

  if (hideOnRoutes.includes(pathname)) return null;

  return (
    <div className="fixed w-full bottom-0 z-10 ">
      <BottomNavigation />
    </div>
  );
};
