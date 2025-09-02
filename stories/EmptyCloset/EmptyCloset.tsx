'use client';

import { SacramentoLocal } from '@/lib/font';
import { PlusIcon } from '@/stories/Icons';
import { TryOnClothVector } from '@/stories/Vectors';
import { Button } from '@heroui/react';

type ClosetEmptyStateProps = {
  type: 'emptyCategory' | 'emptyAll';
  userName?: string;
  categoryTitle?: string;
  onAddClothes: () => void;
  onShowAll: () => void;
};

export default function ClosetEmptyState({
  type,
  userName,
  categoryTitle,
  onAddClothes,
  onShowAll,
}: ClosetEmptyStateProps) {
  return (
    <div className="flex flex-col justify-center gap-10 h-full w-full px-5 relative">
      <div className="flex justify-center items-center">
        <TryOnClothVector />
      </div>
      <div className="flex flex-col justify-center items-center gap-3">
        <span className={`${SacramentoLocal.className} text-3xl font-bold text-secondary-200`}>
          Your closet is empty
        </span>

        <span className="text-lg text-secondary font-semibold">{userName || 'کاربر'} عزیز!</span>

        {type === 'emptyCategory' && (
          <>
            <span className="text-lg text-secondary font-semibold">
              تا حالا لباس {categoryTitle} اضافه نکردی!
            </span>
            <Button
              variant="flat"
              color="primary"
              size="md"
              className="h-14 rounded-3xl shrink-0 bg-success-50 border border-success text-black"
              onPress={onShowAll}
            >
              مشاهده همه لباس ها
            </Button>
          </>
        )}

        {type === 'emptyAll' && (
          <>
            <span className="text-lg text-secondary font-semibold">کمد لباس شما خالی هست!</span>
            <Button
              variant="flat"
              color="primary"
              size="md"
              startContent={
                <span className="text-success">
                  <PlusIcon size={36} />
                </span>
              }
              className="h-14 rounded-3xl shrink-0 bg-success-50 border border-success text-black"
              onPress={onAddClothes}
            >
              افزودن لباس
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
