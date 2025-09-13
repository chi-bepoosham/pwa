'use client';

import { endpoints } from '@/api/endpoints';
import { useGetUser } from '@/api/user';
import { fetcher } from '@/lib/axios';
import { setCookie } from '@/lib/cookies';
import { CrossIcon } from '@/stories/Icons';
import { SwiperCarousel } from '@/stories/SwiperCarousel/SwiperCarousel';
import { Button, ScrollShadow } from '@heroui/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import useSWR from 'swr';
import Header from '../components/Header';

export default function Page() {
  const router = useRouter();

  const { userInfo } = useGetUser(3000);

  useEffect(() => {
    if (userInfo) {
      setCookie('userInfo', JSON.stringify(userInfo));
    }
  }, [userInfo]);

  const bodyTypeURL = endpoints.user.bodyTypeDetails;
  const { data, isLoading, error } = useSWR(bodyTypeURL, fetcher);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const celebrities = (data as any)?.object.body_type.celebrities;

  const handleGoBack = () => {
    router.replace('/home');
  };

  return (
    <div className="flex flex-col w-full  bg-black pb-4">
      <Header
        color="bg-black"
        textColor="text-zinc-400"
        variant="side"
        title="هــرروز شیک‌تــر از دیــروز..."
        endContent={
          <Button
            variant="bordered"
            color="secondary"
            size="lg"
            isIconOnly
            className="h-14 w-14 rounded-2xl shrink-0 text-white border-white"
            onPress={handleGoBack}
          >
            <CrossIcon size={48} />
          </Button>
        }
      />

      <ScrollShadow
        visibility={'bottom'}
        hideScrollBar
        className="flex-1 overflow-y-auto max-w-screen-sm overflow-x-hidden px-4 pb-36 bg-black"
      >
        <div className="flex max-w-screen-sm justify-center items-center px-0 pb-16">
          <SwiperCarousel isLoading={isLoading} error={error} celebrities={celebrities ?? []} />
        </div>
      </ScrollShadow>
    </div>
  );
}
