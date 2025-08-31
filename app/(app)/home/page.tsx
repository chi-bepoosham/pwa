'use client';

import { BodyForm } from '@/stories/BodyForm';
import { Celebrities } from '@/stories/Celebrities';
import { endpoints } from '@/api/endpoints';
import useSWR from 'swr';
import { fetcher } from '@/lib/axios';
import Header from '../components/Header';
import { BodyTypeResponseType } from '@/types/BodyType.type';
import Link from 'next/link';
import { Button, Spinner } from '@heroui/react';
import { InfoIcon, UserIcon } from '@/stories/Icons';
import { useGetUser } from '@/api/user';
import { useEffect } from 'react';
import { setCookie } from '@/lib/cookies';

export default function Home() {
  // گرفتن اطلاعات کاربر
  const { userInfo, userInfoError } = useGetUser(3000);

  useEffect(() => {
    if (userInfo) {
      setCookie('userInfo', JSON.stringify(userInfo));
    }
  }, [userInfo]);

  // گرفتن جزئیات فرم بدن
  const bodyTypeURL = endpoints.user.bodyTypeDetails;
  const { data, isLoading, error } = useSWR<BodyTypeResponseType>(bodyTypeURL, fetcher);
  const bd = data?.object.body_type;

  // const suggestionSliderData = [
  //   { imageUrl: "/124.jpeg", name: "tie" },
  //   { imageUrl: "/124.jpeg", name: "tie" },
  //   { imageUrl: "/124.jpeg", name: "tie" },
  //   { imageUrl: "/124.jpeg", name: "tie" },
  // ]

  return (
    <div className="flex flex-col w-full">
      <Header
        variant="centered"
        title="فــــرم بـــــدن شـــــما"
        subtitle={
          <div className="text-primary">
            {isLoading && !error && <Spinner size="sm" color="primary" />}
            {!isLoading && !error && bd?.title}
            {error && <p className="text-red-500 truncate">{error?.message || 'خطا در دریافت'}</p>}
          </div>
        }
        startContent={
          <Button
            variant="solid"
            color="default"
            size="lg"
            isIconOnly
            className="h-14 w-14 rounded-2xl shrink-0"
            as={Link}
            href="/body_types"
          >
            <InfoIcon size={36} />
          </Button>
        }
        endContent={
          <Button
            variant="solid"
            color="primary"
            size="lg"
            isIconOnly
            className="h-14 w-14 rounded-2xl shrink-0"
            as={Link}
            href="/profile"
          >
            <UserIcon size={36} />
          </Button>
        }
      />

      <div className="w-full flex flex-col gap-4 pb-16">
        <div className="w-full flex justify-center items-center">
          <BodyForm />
        </div>

        <div className="w-full flex justify-center items-center px-8">
          <Celebrities
            isLoading={isLoading}
            error={error}
            number={bd?.celebrities.length || 0}
            celebrities={
              bd?.celebrities?.map((celeb) => ({
                id: celeb.id,
                fullName: celeb.title,
                image: celeb.image,
              })) || []
            }
          />
        </div>

        {/* <div className="w-full flex justify-center items-center px-8 pb-10">
          <SuggestionSlider slides={suggestionSliderData} />
        </div> */}
      </div>
    </div>
  );
}
