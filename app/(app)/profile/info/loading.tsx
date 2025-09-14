'use client';

import { ArrowRightIcon } from '@/stories/Icons';
import { LogoutButton } from '@/stories/LogoutButton';
import { Button, Spinner } from '@heroui/react';
import { useRouter } from 'next/navigation';
import Header from '../../components/Header';

export default function Loading() {
  const router = useRouter();
  return (
    <div className="flex flex-col w-full h-full">
      <Header
        variant="centered"
        title="اطلاعات حساب کاربری"
        startContent={
          <Button
            variant="bordered"
            color="secondary"
            size="lg"
            isIconOnly
            className="h-14 w-14 rounded-2xl shrink-0"
            onPress={() => router.replace('/home')}
          >
            <ArrowRightIcon size={36} />
          </Button>
        }
        endContent={<LogoutButton />}
      />
      <div className="flex justify-center items-center h-full w-full flex-1">
        <Spinner size="lg" color="primary" />
      </div>
    </div>
  );
}
