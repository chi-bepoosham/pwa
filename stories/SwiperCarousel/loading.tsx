'use client';

import { Skeleton } from '@heroui/react';
import React from 'react';

export default function SwiperCarouselLoading() {
  return (
    <div className="relative w-full max-w-screen-sm mx-auto flex flex-col gap-4">
      <Skeleton className="w-full h-[60vh] rounded-3xl" />
      <div className="flex items-center gap-2">
        <div className="h-32 w-1 rounded-3xl bg-primary" />
        <div className="flex flex-col gap-2 w-full py-2">
          <Skeleton className="w-full h-4 rounded-xl" />
          <Skeleton className="w-3/4 h-6 rounded-xl" />
        </div>
      </div>
    </div>
  );
}
