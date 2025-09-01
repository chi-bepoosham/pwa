'use client';

import { Button } from '@heroui/react';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ArrowRightIcon, RecycleIcon } from '../Icons';

export interface ClosetCardProps {
  variant: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
  imageUrl: string;
  matchPercentage: number | null;
  link: string;
  isSliderActive?: boolean;
  onDelete?: () => void;
}

export const ClosetCard = (props: ClosetCardProps) => {
  const { variant, imageUrl, matchPercentage, link, isSliderActive, onDelete } = props;

  const handleDelete = () => {
    if (onDelete) onDelete();
  };

  return (
    <div className="h-fit relative">
      {onDelete && (
        <Button
          variant="flat"
          size="sm"
          className={clsx(
            'bg-secondary-100 absolute top-2 z-10 rounded-3xl',
            !isSliderActive ? 'left-2' : 'right-2'
          )}
          isIconOnly
          onPress={handleDelete}
        >
          <i className="text-secondary">
            <RecycleIcon size={20} />
          </i>
        </Button>
      )}

      <Link href={link} className="block">
        <div
          className={clsx(
            'min:w-60 mx-auto rounded-3xl overflow-hidden cursor-pointer flex flex-col shrink-0 select-none relative',
            variant === 'primary' && 'bg-white border-2 border-secondary',
            variant === 'secondary' && 'bg-secondary-50',
            variant === 'tertiary' && 'bg-primary',
            variant === 'quaternary' && 'bg-[#68BAA6]'
          )}
        >
          <div className="w-full h-full">
            <Image
              width={128}
              height={128}
              className="w-full object-cover shrink-0"
              src={imageUrl}
              alt="image"
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
              <h3
                className={clsx(
                  'text-sm font-semibold truncate',
                  isSliderActive ? 'text-white' : 'text-secondary'
                )}
              >
                {matchPercentage}%
              </h3>
              <Button
                variant="flat"
                size="sm"
                className={clsx(
                  'rounded-3xl',
                  isSliderActive ? 'bg-secondary' : 'bg-secondary-100'
                )}
                isIconOnly
              >
                <i className={clsx('-rotate-45', isSliderActive ? 'text-white' : 'text-secondary')}>
                  <ArrowRightIcon size={20} />
                </i>
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
