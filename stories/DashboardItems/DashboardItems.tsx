import React from "react";
import { Button, ScrollShadow } from "@heroui/react";
import { BookmarkIcon, OrdersIcon, ShapeIcon, StarIcon } from "@/stories/Icons";

export interface SocialProps {}

export const DashboardItems = (props: SocialProps) => {
  const {} = props;
  return (
    <ScrollShadow
      orientation="horizontal"
      hideScrollBar={true}
      size={0}
      className="xs:flex xs:flex-row-reverse xs:gap-6 xs:justify-center xs:overflow-visible overflow-x-auto"
    >
      <div className="flex flex-row-reverse gap-5 justify-end xs:justify-center">
        <Button
          variant="bordered"
          className="w-32 h-32 sm:w-36 sm:h-36 aspect-square shrink-0 flex flex-col items-center justify-center border-2 border-[#68BAA6] rounded-2xl bg-[#68BAA6]/10 focus:bg-[#68BAA6] active:text active:transition active:duration-500"
        >
          <i className="mb-2">
            <BookmarkIcon size={36} />
          </i>
          <span className="text-medium font-bold sm:text-xl">نشان‌شده‌ها</span>
          <i className="text-[#68BAA6]">
            <StarIcon size={20} />
          </i>
        </Button>

        <Button
          variant="bordered"
          className="w-32 h-32 sm:w-36 sm:h-36 aspect-square shrink-0 flex flex-col items-center justify-center border-2 border-[#68BAA6] rounded-2xl bg-[#68BAA6]/10 focus:bg-[#68BAA6] active:text-secondary active:transition active:duration-500"
        >
          <i className="mb-2">
            <ShapeIcon size={36} />
          </i>
          <span className="text-medium font-bold sm:text-xl">تصویر فرم بدن</span>
          <i className="text-[#68BAA6]">
            <StarIcon size={20} />
          </i>
        </Button>

        <Button
          variant="bordered"
          className="w-32 h-32 sm:w-36 sm:h-36 aspect-square shrink-0 flex flex-col items-center justify-center border-2 border-[#68BAA6] rounded-2xl bg-[#68BAA6]/10 focus:bg-[#68BAA6] active:text-white active:transition active:duration-500"
        >
          <i className="mb-2">
            <OrdersIcon size={36} />
          </i>
          <span className="text-medium font-bold sm:text-xl">سـفارشــات</span>
          <i className="text-[#68BAA6]">
            <StarIcon size={20} />
          </i>
        </Button>
      </div>
    </ScrollShadow>
  );
};