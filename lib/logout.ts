'use client';

import { useUserStore } from '@/store/UseUserStore';
import { addToast } from '@heroui/react';
import { useRouter } from 'next/navigation';
import { axiosCoreWithAuth } from './axios';
import { deleteCookie } from './cookies';
import { AxiosError } from 'axios';

export const useLogout = () => {
  const router = useRouter();
  const setUserInfo = useUserStore((state) => state.setUserInfo);

  const logout = async () => {
    try {
      const axios = axiosCoreWithAuth();
      await axios.post('/user/auth/logout');

      setUserInfo('is_login', false);

      await deleteCookie('token', { path: '/' });
      await deleteCookie('userInfo', { path: '/' });

      router.push('/auth');

      addToast({ title: 'خروج از حساب کاربری با موفقیت انجام شد.', color: 'success' });
    } catch {
      addToast({ title: 'خطایی وجود دارد.', color: 'danger' });
    }
  };

  return logout;
};

export const logoutUser = async (redirect?: () => void) => {
  try {
    await deleteCookie('token', { path: '/' });
    await deleteCookie('userInfo', { path: '/' });

    if (redirect) redirect();
  } catch (err) {
    addToast({
      title: 'خطایی وجود دارد.',
      description: (err as AxiosError).message || '',
      color: 'danger',
    });
  }
};
