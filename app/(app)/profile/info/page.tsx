'use client';

import { useGetUser } from '@/api/user';
import { ArrowRightIcon } from '@/stories/Icons';
import { LogoutButton } from '@/stories/LogoutButton';
import ProfileForm from '@/stories/ProfileInfo/ProfileInfoForm';
import { Button } from '@heroui/react';
import { useRouter } from 'next/navigation';
import Header from '../../components/Header';
import Error from './error';
import Loading from './loading';

export default function Page() {
  const { userInfo, userInfoLoading, userInfoError } = useGetUser(3000);

  const router = useRouter();

  if (userInfoLoading) return <Loading />;
  if ((userInfoError || !userInfo) && !userInfoLoading)
    return <Error message={userInfoError.message} />;

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
            onPress={() => router.replace('/home')}
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
