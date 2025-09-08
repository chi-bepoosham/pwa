'use client';

import { Button } from '@heroui/react';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import DeleteClothesModal from '../DeleteClothesModal/DeleteClothesModal';
import { ArrowRightIcon, RecycleIcon } from '../Icons';

export interface ClosetCardProps {
  variant: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
  imageUrl: string;
  matchPercentage: number | null;
  link?: string;
  title?: string;
  isSliderActive?: boolean;
  onDelete?: () => void;
  userName: string;
  isPending?: boolean;
}

export const ClosetCard = (props: ClosetCardProps) => {
  const {
    userName,
    variant,
    imageUrl,
    matchPercentage,
    title,
    link,
    isSliderActive,
    onDelete,
    isPending,
  } = props;

  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleDeleteClick = () => {
    setDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (onDelete) onDelete();
    setDeleteModalOpen(false);
  };

  return (
    <div className="h-fit relative">
      {onDelete && (
        <Button
          variant="flat"
          size="sm"
          className={clsx(
            'bg-secondary-100 absolute top-2 z-10 rounded-3xl',
            !isSliderActive ? 'left-2' : 'right-2',
            isPending && 'pointer-events-none opacity-50'
          )}
          disabled={isPending}
          isIconOnly
          onPress={handleDeleteClick}
        >
          <i className="text-red-600">
            <RecycleIcon size={20} />
          </i>
        </Button>
      )}

      <Link
        href={link || '/my-closet'}
        className={clsx(
          'block',
          isPending && 'pointer-events-none opacity-50',
          isSliderActive && 'pointer-events-none '
        )}
      >
        <div
          className={clsx(
            'min:w-60 mx-auto rounded-3xl overflow-hidden cursor-pointer flex flex-col shrink-0 select-none relative',
            variant === 'primary' && 'bg-white border-2 border-secondary',
            variant === 'secondary' && 'bg-secondary-50 border border-secondary-50',
            variant === 'tertiary' && 'bg-primary',
            variant === 'quaternary' && 'bg-[#68BAA6]'
          )}
        >
          <div className={clsx('w-full', isSliderActive && 'h-96')}>
            <Image
              width={128}
              height={128}
              className="w-full object-cover h-full"
              src={'https://core.chibepoosham.app/' + imageUrl}
              alt="image"
              unoptimized
              quality={100}
            />
          </div>
          <div className="p-1.5">
            <div
              className={clsx(
                'p-2.5 flex flex-row justify-between items-center w-full gap-1 rounded-2xl',
                variant === 'primary' && !isSliderActive && 'bg-secondary-50',
                variant === 'secondary' && !isSliderActive && 'bg-white',
                variant === 'tertiary' && !isSliderActive && 'bg-white',
                variant === 'quaternary' && !isSliderActive && 'bg-white',
                isSliderActive && variant === 'primary' && 'bg-primary',
                isSliderActive && variant === 'secondary' && 'bg-primary',
                isSliderActive && variant === 'tertiary' && 'bg-none',
                isSliderActive && variant === 'quaternary' && 'bg-none'
              )}
            >
              {isPending ? (
                <span className="text-sm font-light truncate"> {title} </span>
              ) : (
                <div
                  className={clsx(
                    'text-sm font-semibold flex gap-2',
                    isSliderActive ? 'text-white' : 'text-secondary'
                  )}
                >
                  <h3>{matchPercentage}%</h3>
                  <span className="text-sm font-light truncate"> مناسب با فرم بدن</span>
                </div>
              )}
              {!isSliderActive && (
                <Button
                  variant="flat"
                  size="sm"
                  className={clsx(
                    'rounded-3xl',
                    isSliderActive ? 'bg-secondary' : 'bg-secondary-100'
                  )}
                  isIconOnly
                >
                  <i
                    className={clsx('-rotate-45', isSliderActive ? 'text-white' : 'text-secondary')}
                  >
                    <ArrowRightIcon size={20} />
                  </i>
                </Button>
              )}
            </div>
          </div>
        </div>
      </Link>

      {/* Modal */}
      <DeleteClothesModal
        userName={userName}
        isOpen={isDeleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};
