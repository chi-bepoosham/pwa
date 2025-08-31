'use client';

import { usePathname } from 'next/navigation';
import { BottomNavigation } from '../BottomNavigation';

export const BottomNavWrapper = () => {
  const pathname = usePathname();

  const hideOnRoutes = ['/body_types', '/profile', '/celebrities', '/profile/about'];

  if (hideOnRoutes.includes(pathname)) return null;

  return (
    <div className="sticky w-full bottom-0 z-10">
      <BottomNavigation />
    </div>
  );
};
