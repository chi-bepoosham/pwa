import { BookmarkIcon, OrdersIcon, ShapeIcon, StarIcon } from '@/stories/Icons';
import { Button, ScrollShadow } from '@heroui/react';
import React from 'react';

// export interface SocialProps {}

export const DashboardItems = () => {
  // const {} = props;
  return (
    <ScrollShadow
      orientation="horizontal"
      hideScrollBar={true}
      size={0}
      className="xs:flex xs:flex-row-reverse xs:gap-6 xs:justify-center xs:overflow-visible overflow-x-auto"
    >
      <div className="flex flex-row-reverse gap-5 justify-center">
        <Button
          variant="bordered"
          className="w-24 h-24 p-2 pt-4 aspect-square shrink-0 flex flex-col items-center justify-around border-2 border-[#68BAA6] rounded-3xl bg-[#68BAA6]/10 focus:bg-[#68BAA6] active:text active:transition active:duration-500 group"
        >
          <i>
            <BookmarkIcon size={24} />
          </i>
          <span className="font-bold text-xs">نشان‌شده‌ها</span>
          <i className="text-[#68BAA6] group-focus:text-black">
            <StarIcon size={12} />
          </i>
        </Button>

        <Button
          variant="bordered"
          className="w-24 h-24 p-2 pt-4 aspect-square shrink-0 flex flex-col items-center justify-around border-2 border-[#68BAA6] rounded-3xl bg-[#68BAA6]/10 focus:bg-[#68BAA6] active:text-secondary active:transition active:duration-500 group"
        >
          <i>
            <ShapeIcon size={24} />
          </i>
          <span className="font-bold text-xs">تصویر فرم بدن</span>
          <i className="text-[#68BAA6] group-focus:text-black">
            <StarIcon size={12} />
          </i>
        </Button>

        <Button
          variant="bordered"
          className="w-24 h-24 p-2 pt-4 aspect-square shrink-0 flex flex-col items-center justify-around border-2 border-[#68BAA6] rounded-3xl bg-[#68BAA6]/10 focus:bg-[#68BAA6] active:text-white active:transition active:duration-500 group"
        >
          <i>
            <OrdersIcon size={24} />
          </i>
          <span className="font-bold text-xs">سـفارشــات</span>
          <i className="text-[#68BAA6] group-focus:text-black">
            <StarIcon size={12} />
          </i>
        </Button>
      </div>
    </ScrollShadow>
  );
};
