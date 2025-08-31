import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { Button } from '@heroui/react';
import { ArrowRightIcon, RecycleIcon } from '../Icons';
import Link from 'next/link';

export interface ClosetCardProps {
  variant: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
  imageUrl: string;
  matchPercentage: number | null;

  link?: string;
  isSliderActive?: boolean;
  onDelete?: () => void;
}

export const ClosetCard = (props: ClosetCardProps) => {
  const { variant, imageUrl, matchPercentage, link, isSliderActive, onDelete } = props;

  return (
    <Link href={link || '#'} className='h-fit'>
      <div
        className={clsx(
          'min:w-60 mx-auto rounded-3xl overflow-hidden cursor-pointer ',
          'flex flex-col',
          'shrink-0',
          'select-none',
          'relative',
          variant === 'primary' && 'bg-white border-2 border-secondary',
          variant === 'secondary' && 'bg-secondary-50',
          variant === 'tertiary' && 'bg-primary',
          variant === 'quaternary' && 'bg-[#68BAA6]'
        )}
      >
        <Button
          variant="flat"
          size="sm"
          className={clsx(
            'bg-secondary-100',
            'absolute top-2 z-10 rounded-3xl',
            !isSliderActive ? 'left-2' : 'right-2'
          )}
          isIconOnly
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onDelete?.();
          }}
        >
          <i className="text-secondary">
            <RecycleIcon size={20} />
          </i>
        </Button>
        <div className="w-full h-full">
          <Image
            width="128"
            height="128"
            className="w-full object-cover shrink-0"
            src={imageUrl}
            alt="image"
          />
        </div>
        <div className='p-1.5'>
          <div
            className={clsx(
              'p-2.5',
              'flex flex-row justify-between items-center w-full gap-1',
              variant === 'primary' && !isSliderActive && 'bg-secondary-50 rounded-xl',
              variant === 'secondary' && !isSliderActive && 'bg-white rounded-xl',
              variant === 'tertiary' && !isSliderActive && 'bg-white rounded-xl',
              variant === 'quaternary' && !isSliderActive && 'bg-white rounded-xl',
              isSliderActive && variant === 'primary' && 'bg-primary rounded-xl',
              isSliderActive && variant === 'secondary' && 'bg-primary rounded-xl',
              isSliderActive && variant === 'tertiary' && 'bg-none rounded-xl',
              isSliderActive && variant === 'quaternary' && 'bg-none rounded-xl'
            )}
          >
            <h3
              className={clsx(
                'text-sm font-semibold truncate',
                isSliderActive ? 'text-white' : 'text-secondary'
              )}
            >
              {matchPercentage}
            </h3>
            <Button
              variant="flat"
              size="sm"
              className={clsx('rounded-2xl', isSliderActive ? 'bg-secondary' : 'bg-secondary-100')}
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
  );
};
