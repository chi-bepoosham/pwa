'use client';

import { Button } from '@heroui/react';
import { useRouter } from 'next/navigation';

export default function Error({ message }: { message: string }) {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      <p className="text-lg text-red-500">خطا در دریافت اطلاعات کاربر!</p>
      <span className="text-red-600">{message}</span>
      <Button
        variant="faded"
        color="secondary"
        onPress={() => {
          router.replace('/home');
        }}
      >
        بازگشت به صفحه اصلی
      </Button>
    </div>
  );
}

