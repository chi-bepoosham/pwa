import { useGetUser } from '@/api/user';
import { BookmarkIcon, OrdersIcon, ShapeIcon, StarIcon } from '@/stories/Icons';
import { Button, ScrollShadow, Skeleton } from '@heroui/react';
import React, { useState } from 'react';
import BodyTypeImageModal from '../BodyTypeImageModal/BodyTypeImageModal';

export const DashboardItems = () => {
  const { userInfo, userInfoLoading, userInfoError } = useGetUser();

  const [isModalOpen, setModalOpen] = useState(false);

  if (userInfoLoading && !userInfoError) {
    return (
      <div className="xs:flex xs:flex-row-reverse xs:gap-6 xs:justify-center xs:overflow-visible overflow-x-auto">
        <div className="grid grid-cols-3 gap-4 justify-between w-full max-w-screen-sm">
          <Skeleton className="col-span-1 w-full h-24 p-2 pt-4 aspect-square shrink-0 rounded-3xl" />
          <Skeleton className="col-span-1 w-full h-24 p-2 pt-4 aspect-square shrink-0 rounded-3xl" />
          <Skeleton className="col-span-1 w-full h-24 p-2 pt-4 aspect-square shrink-0 rounded-3xl" />
        </div>
      </div>
    );
  }

  return (
    <>
      <ScrollShadow
        orientation="horizontal"
        hideScrollBar={true}
        size={0}
        className="xs:flex xs:flex-row-reverse xs:gap-6 xs:justify-center xs:overflow-visible overflow-x-auto"
      >
        <div className="grid grid-cols-3 gap-4 justify-between w-full max-w-screen-sm">
          <Button
            isDisabled
            variant="bordered"
            className="col-span-1 w-full h-24 p-2 pt-4 aspect-square shrink-0 flex flex-col items-center justify-around border-2 border-[#68BAA6] rounded-3xl bg-[#68BAA6]/10 focus:bg-[#68BAA6] active:text active:transition active:duration-500 group"
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
            className="col-span-1 w-full h-24 p-2 pt-4 aspect-square shrink-0 flex flex-col items-center justify-around border-2 border-[#68BAA6] rounded-3xl bg-[#68BAA6]/10 focus:bg-[#68BAA6] active:text-secondary active:transition active:duration-500 group"
            variant="bordered"
            onPress={() => setModalOpen(true)}
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
            isDisabled
            variant="bordered"
            className="col-span-1 w-full h-24 p-2 pt-4 aspect-square shrink-0 flex flex-col items-center justify-around border-2 border-[#68BAA6] rounded-3xl bg-[#68BAA6]/10 focus:bg-[#68BAA6] active:text-white active:transition active:duration-500 group"
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

      {/* Modal */}
      <BodyTypeImageModal
        userInfo={userInfo}
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
};
