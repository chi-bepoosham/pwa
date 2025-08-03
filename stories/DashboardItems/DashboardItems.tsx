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
      size={10}
      className="sm:flex sm:flex-row-reverse sm:gap-6 sm:justify-center sm:overflow-visible overflow-x-auto"
    >
      <div className="flex flex-row-reverse gap-6 justify-end sm:justify-center">
        <Button
          variant="bordered"
          className="w-40 h-40 shrink-0 flex flex-col items-center justify-center border-2 border-[#68BAA6] rounded-2xl bg-[#68BAA6]/10 focus:bg-[#68BAA6] active:text active:transition active:duration-500"
        >
          <i className="mb-2">
            <BookmarkIcon size={36} />
          </i>
          <span className="text-lg font-bold">نشان‌شده‌ها</span>
          <i className="text-[#68BAA6]">
            <StarIcon size={20} />
          </i>
        </Button>

        <Button
          variant="bordered"
          className="w-40 h-40 shrink-0 flex flex-col items-center justify-center border-2 border-[#68BAA6] rounded-2xl bg-[#68BAA6]/10 focus:bg-[#68BAA6] active:text-secondary active:transition active:duration-500"
        >
          <i className="mb-2">
            <ShapeIcon size={36} />
          </i>
          <span className="text-lg font-bold">تصویر فرم بدن</span>
          <i className="text-[#68BAA6]">
            <StarIcon size={20} />
          </i>
        </Button>

        <Button
          variant="bordered"
          className="w-40 h-40 shrink-0 flex flex-col items-center justify-center border-2 border-[#68BAA6] rounded-2xl bg-[#68BAA6]/10 focus:bg-[#68BAA6] active:text-white active:transition active:duration-500"
        >
          <i className="mb-2">
            <OrdersIcon size={36} />
          </i>
          <span className="text-lg font-bold">سـفارشــات</span>
          <i className="text-[#68BAA6]">
            <StarIcon size={20} />
          </i>
        </Button>
      </div>
    </ScrollShadow>
  );
};