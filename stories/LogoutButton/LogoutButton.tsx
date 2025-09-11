'use client';

import { axiosCoreWithAuth } from '@/lib/axios';
import { deleteCookie } from '@/lib/cookies';
import { useUserStore } from '@/store/UseUserStore';
import { LogoutIcon } from '@/stories/Icons';
import { addToast, Button } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export const LogoutButton = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const setUserInfo = useUserStore((state) => state.setUserInfo);

  const clearAllCookies = async () => {
    setUserInfo('is_login', false);
    await deleteCookie('token', { path: '/' });
    await deleteCookie('userInfo', { path: '/' });
  };

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      const axios = axiosCoreWithAuth();
      await axios.post('/user/auth/logout');

      clearAllCookies();

      router.push('/auth');

      addToast({ title: 'خروج از حساب کاربری با موفقیت انجام شد.', color: 'success' });
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
