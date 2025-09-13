'use client';

import { Button } from '@heroui/react';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import ClotheStatusErrorModal from '../ClotheStatusErrorModal/ClotheStatusErrorModal';
import DeleteClothesModal from '../DeleteClothesModal/DeleteClothesModal';
import { ArrowRightIcon, InfoIcon, RecycleIcon } from '../Icons';

export interface ClosetCardProps {
  variant: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'error';
  imageUrl: string;
  matchPercentage: number | null;
  errorMessage?: string;
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
    errorMessage,
  } = props;

  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isErrorModalOpen, setErrorModalOpen] = useState(false);

  const handleDeleteClick = () => {
    setDeleteModalOpen(true);
  };
  const handleErrorModal = () => {
    setErrorModalOpen(true);
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
            'bg-white/20 absolute top-2 z-10 rounded-3xl',
            !isSliderActive ? 'left-2' : 'right-2',
            isPending && 'pointer-events-none opacity-50'
          )}
          disabled={isPending}
          isIconOnly
          onPress={handleDeleteClick}
        >
          <i className="text-black">
            <RecycleIcon size={20} />
          </i>
        </Button>
      )}
      {variant === 'error' && errorMessage && (
        <Button
          variant="flat"
          size="sm"
          className="bg-white/20 rounded-full absolute top-1 z-10 right-2"
          isIconOnly
          onPress={handleErrorModal}
        >
          <i className="text-red-500">
            <InfoIcon size={20} />
          </i>
        </Button>
      )}
      <Link
        href={link || '/my-closet'}
        className={clsx(
          'block',
          isPending && 'pointer-events-none opacity-50',
          (isSliderActive || variant === 'error') && 'pointer-events-none '
        )}
      >
        <div
          className={clsx(
            'min:w-60 mx-auto rounded-2xl overflow-hidden cursor-pointer flex flex-col shrink-0 select-none relative',
            variant === 'primary' && 'bg-white border-2 border-secondary',
            variant === 'secondary' && 'bg-secondary-50 border border-secondary-50',
            variant === 'tertiary' && 'bg-primary',
            variant === 'quaternary' && 'bg-[#68BAA6]',
            variant === 'error' && 'bg-red-200  shadow-md shadow-red-300/50'
          )}
        >
          <div className={clsx('w-full', isSliderActive && 'h-80')}>
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
                'flex flex-row justify-between flex-wrap items-center w-full gap-1 rounded-2xl',
                variant === 'primary' && !isSliderActive && 'bg-secondary-50 p-2.5 ',
                variant === 'secondary' && !isSliderActive && 'bg-white p-2.5 ',
                variant === 'tertiary' && !isSliderActive && 'bg-white p-2.5 ',
                variant === 'quaternary' && !isSliderActive && 'bg-white p-2.5 ',
                isSliderActive &&
                  variant === 'primary' &&
                  'bg-primary px-0 py-2.5  rounded-b-2xl rounded-t-xl',
                isSliderActive && variant === 'secondary' && 'bg-primary p-2.5',
                isSliderActive && variant === 'tertiary' && 'bg-none p-2.5 ',
                isSliderActive && variant === 'quaternary' && 'bg-none p-2.5 '
              )}
            >
              {isPending ? (
                <span className="text-xs font-light truncate"> {title} </span>
              ) : variant === 'error' ? (
                <div className="text-xs font-semibold flex flex-col gap-2 text-red-500">
                  <p className="truncate py-1 px-4">خطا در پردازش تصویر!</p>
                </div>
              ) : isSliderActive && variant === 'primary' ? (
                <div className="text-xs font-semibold flex flex-col gap-2 text-white">
                  <div className="flex gap-2 items-end">
                    <div className="bg-white/20 w-fit rounded-l-md px-2 font-bold text-sm">
                      {matchPercentage}
                    </div>
                    <span className="text-black text-sm">درصد</span>
                  </div>
                  <p className="truncate py-1 px-4"> مناسب با فرم بدن!</p>
                </div>
              ) : (
                <div
                  className={clsx(
                    'text-xs font-semibold flex gap-2 items-center',
                    isSliderActive ? 'text-white' : 'text-secondary'
                  )}
                >
                  <h3 className="text-sm">{matchPercentage}%</h3>
                  <span className="text-sm font-light truncate"> مناسب با فرم بدن</span>
                </div>
              )}
              {!isSliderActive && variant !== 'error' && (
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
      {errorMessage && (
        <ClotheStatusErrorModal
          message={errorMessage}
          isOpen={isErrorModalOpen}
          onClose={() => setErrorModalOpen(false)}
        />
      )}
    </div>
  );
};
