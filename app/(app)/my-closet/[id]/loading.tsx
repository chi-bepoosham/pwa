'use client';

import { ArrowRightIcon, PlusIcon } from '@/stories/Icons';
import { Button, Spinner } from '@heroui/react';
import { useRouter } from 'next/navigation';
import Header from '../../components/Header';

export default function Loading() {
  const router = useRouter();

  return (
    <div className="flex flex-col w-full h-full">
      <Header
        variant="centered"
        title="کـمد لبـاس مـن!"
        startContent={
          <Button
            variant="bordered"
            color="secondary"
            size="lg"
            isIconOnly
            className="h-14 w-14 rounded-2xl shrink-0"
            onPress={() => router.push('/my-closet')}
          >
            <ArrowRightIcon size={36} />
          </Button>
        }
        endContent={
          <Button
            variant="flat"
            color="success"
            size="md"
            startContent={
              <span className="text-success">
                <PlusIcon size={36} />
              </span>
            }
            isDisabled
            isIconOnly
            className="h-14 w-14 rounded-2xl shrink-0"
          ></Button>
        }
      />
      <div className="flex justify-center items-center h-full w-full flex-1">
        <Spinner size="lg" color="primary" />
      </div>
    </div>
  );
}
