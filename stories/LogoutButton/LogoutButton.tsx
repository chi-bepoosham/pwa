'use client';

import { useLogout } from '@/lib/logout';
import { LogoutIcon } from '@/stories/Icons';
import { addToast, Button } from '@heroui/react';
import React, { useState } from 'react';

export const LogoutButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const logout = useLogout();

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await logout();
    } catch (error) {
      console.error('Logout error:', error);
      addToast({ title: 'خطایی وجود دارد.', color: 'danger' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      variant="bordered"
      color="secondary"
      radius="lg"
      isIconOnly
      isLoading={isLoading}
      className="h-14 w-14"
      onPress={handleLogout}
    >
      <LogoutIcon size={36} />
    </Button>
  );
};
