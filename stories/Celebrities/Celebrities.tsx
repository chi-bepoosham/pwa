'use client';

import { Avatar, AvatarGroup, Tooltip, Skeleton } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { MagicStarsIcon } from '../Icons';

interface Celebrity {
  fullName: string;
  image: string;
  id: number;
}

export interface CelebrityProps {
  number: number;
  celebrities: Celebrity[];
  isLoading?: boolean;
  error?: Error;
}

export const Celebrities: React.FC<CelebrityProps> = ({
  number,
  celebrities = [],
  isLoading = false,
  error,
}) => {
  if (isLoading) {
    return (
      <div className="w-full max-w-screen-md grid grid-cols-3 gap-1 bg-[#68BAA6]/50 border-2 border-[#68BAA6] rounded-3xl py-6 px-2">
        <div className="flex flex-row-reverse justify-center overflow-x-auto col-span-1">
          <div className="flex">
            <Skeleton className="w-10 h-10 rounded-full -mx-2 border-2 border-white" />
            <Skeleton className="w-10 h-10 rounded-full -mx-2 border-2 border-white" />
            <Skeleton className="w-10 h-10 rounded-full -mx-2 border-2 border-white" />
          </div>
        </div>

        <div className="flex flex-col justify-center text-secondary col-span-2 gap-2">
          <Skeleton className="w-2/4 h-5 rounded-xl" />
          <Skeleton className="w-3/4 h-5 rounded-xl" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full max-w-screen-md text-center text-red-500">
        خطا در بارگذاری سلبریتی‌ها
      </div>
    );
  }

  const visibleCelebs = celebrities.slice(0, 3);

  return (
    <Link href="/celebrities" className="w-full max-w-screen-md">
      <div className="w-full max-w-screen-md grid grid-cols-3 gap-1 bg-[#68BAA6]/50 border-2 border-[#68BAA6] rounded-3xl py-6 px-2 truncate">
        <div className="flex flex-row-reverse justify-center overflow-x-auto col-span-1">
          <div className="flex">
            <AvatarGroup>
              {visibleCelebs.map((celeb) => (
                <Tooltip
                  key={celeb.id}
                  color="secondary"
                  placement="top"
                  showArrow={false}
                  content={celeb.fullName}
                  delay={100}
                  closeDelay={10}
                >
                  <Avatar
                    src={`https://core.chibepoosham.app${celeb.image}`}
                    size="md"
                    className="cursor-pointer border-2 border-white -mx-2 object-cover object-top"
                    classNames={{
                      img: 'object-top',
                    }}
                  />
                </Tooltip>
              ))}
            </AvatarGroup>
          </div>
        </div>

        <div className="flex flex-col justify-center text-secondary col-span-2">
          <span>ســلبریتی‌هــای</span>
          <div className="flex">
            هـــم‌استــــایل بـــا شمـــــا{' '}
            <span className="text-[#68BAA6]">
              <MagicStarsIcon size={20} />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};
