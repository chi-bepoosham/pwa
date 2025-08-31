'use client';

import { LogoutIcon } from '@/stories/Icons';
import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { MinorButton } from '../MinorButton';

export const LogoutButton = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = () => {
    setIsLoading(true);

    setTimeout(() => {
      deleteCookie('token');
      deleteCookie('userInfo');
      router.push('/');
    }, 500);
  };

  return (
    <MinorButton
      icon={<LogoutIcon size={36} />}
      variant="bordered"
      color="secondary"
      radius="lg"
      isIconOnly
      isLoading={isLoading}
      className="h-14 w-14"
      onClick={handleLogout}
    />
  );
};
