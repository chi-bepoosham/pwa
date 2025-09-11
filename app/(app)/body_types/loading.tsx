'use client';

import { CrossIcon } from '@/stories/Icons';
import { Button, Skeleton } from '@heroui/react';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';

export default function Loading() {
  const router = useRouter();

  return (
    <div className="flex flex-col w-full">
      <Header
        variant="side"
        title="انــواع فــرم بــدن!"
        endContent={
          <Button
            variant="bordered"
            color="secondary"
            size="lg"
            isIconOnly
            className="h-14 w-14 rounded-2xl shrink-0"
            onPress={() => {
              router.replace('/home');
            }}
          >
            <CrossIcon size={48} />
          </Button>
        }
      />
      <div className="flex flex-col gap-5 px-6 pb-6">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="w-full h-52 rounded-2xl" disableAnimation={false} />
        ))}
      </div>
    </div>
  );
}
