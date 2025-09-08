'use client';

import { Banner } from '@/stories/Banner';
import { DashboardItems } from '@/stories/DashboardItems';
import { Fitting } from '@/stories/Fitting';
import { ArrowRightIcon, ShoppingBagIcon } from '@/stories/Icons';
import { SettingItems } from '@/stories/Setting/SettingItems';
import { Button } from '@heroui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col w-full overflow-x-hidden scrollbar-hide  min-h-screen">
      <Header
        variant="centered"
        title="تنظیمات"
        startContent={
          <Button
            variant="bordered"
            color="secondary"
            size="lg"
            isIconOnly
            className="h-14 w-14 aspect-square rounded-2xl shrink-0"
            onPress={() => router.replace('/home')}
          >
            <ArrowRightIcon size={36} />
          </Button>
        }
        endContent={
          <Button
            variant="solid"
            color="primary"
            size="lg"
            isIconOnly
            className="h-14 w-14 aspect-square rounded-2xl shrink-0"
            as={Link}
            href="/profile"
            isDisabled
          >
            <ShoppingBagIcon size={36} />
          </Button>
        }
      />
      <div className="flex flex-col gap-10 px-8 pb-32">
        <div className="w-full flex flex-col gap-4 relative z-10">
          <DashboardItems />
          <Fitting />
        </div>
        <div className="shadow-[0px_-10px_24px_0px_#f1f1f1] rounded-2xl overflow-hidden mb-20 bg-background z-10">
          <SettingItems />
        </div>
      </div>
      <div className="w-full absolute bottom-0 left-0 z-0">
        <Banner withStar={true} textColor="text-primary-200" starColor="text-primary" />
      </div>
    </div>
  );
}
