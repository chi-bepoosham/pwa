'use client';

import { useGetUser } from '@/api/user';
import { ArrowRightIcon } from '@/stories/Icons';
import { LogoutButton } from '@/stories/LogoutButton';
import ProfileForm from '@/stories/ProfileInfo/ProfileInfoForm';
import { Button } from '@heroui/react';
import { useRouter } from 'next/navigation';
import Header from '../../components/Header';

export default function Page() {
  const router = useRouter();
  const { userInfo, userInfoLoading, userInfoError } = useGetUser(3000);

  if (userInfoLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>در حال بارگذاری اطلاعات کاربری...</p>
      </div>
    );
  }

  if (userInfoError) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500">خطا در دریافت اطلاعات کاربری. لطفاً دوباره تلاش کنید.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full overflow-x-hidden scrollbar-hide relative min-h-screen">
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
            onPress={() => router.back()}
          >
            <ArrowRightIcon size={36} />
          </Button>
        }
        endContent={<LogoutButton />}
      />
      <ProfileForm userInfo={userInfo} />
    </div>
  );
}
