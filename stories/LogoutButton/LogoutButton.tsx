'use client';

import { LogoutIcon } from '@/stories/Icons';
import { Button } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export const LogoutButton = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const clearAllCookies = () => {
    const cookies = document.cookie.split(';');

    cookies.forEach((c) => {
      const eqPos = c.indexOf('=');
      const name = eqPos > -1 ? c.substr(0, eqPos) : c;

      document.cookie = `${name.trim()}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;

      document.cookie = `${name.trim()}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=${
        window.location.pathname
      };`;

      document.cookie = `${name.trim()}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;domain=127.0.0.1;`;
    });
  };

  // const handleLogout = () => {
  //   setIsLoading(true);

  //   setTimeout(() => {
  //     clearCookies();
  //     router.push('/');
  //   }, 500);
  // };

  return (
    <Button
      variant="bordered"
      color="secondary"
      radius="lg"
      isIconOnly
      isLoading={isLoading}
      className="h-14 w-14"
      onPress={() => {
        setIsLoading(true);
        clearAllCookies();
        router.push('/auth');
      }}
    >
      <LogoutIcon size={36} />
    </Button>
  );
};
