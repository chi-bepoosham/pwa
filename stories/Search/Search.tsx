"use client"
import React from 'react';
import { Divider, Input } from '@heroui/react';
import { FilterIcon, SearchIcon } from '@/stories/Icons';
import clsx from 'clsx';

export interface SearchProps {
  withFilter: boolean;
}

export const Search = (props: SearchProps) => {
  const {
    withFilter,
  } = props;

  const handleSearch = () => {

  };


  return (
      <div className="w-full rounded-xl flex justify-center items-center">      
      <Input
        isClearable={false}
        classNames={{
          label: 'text-black/50 dark:text-white/90',
          input: clsx(
            'text-black/100 dark:text-white/90',
            withFilter ? 'placeholder:text-secondary-300' : 'placeholder:text-secondary',
          ),
          innerWrapper: clsx(
            'bg-white',
            withFilter && 'bg-white',
          ),
          inputWrapper: clsx(
            'border-2 bg-white dark:bg-default/60 dark:hover:bg-default/70',
            'group-data-[hover=true]:bg-white',
            'group-data-[focus=true]:bg-white dark:group-data-[focus=true]:bg-default/60',
            '!cursor-text',
            withFilter ? 'border-secondary-100' : 'border-secondary',
          ),
        }}
        placeholder={withFilter ? 'جستجوی لباس یا فروشگاه' : ''}
        radius="lg"
        startContent={
          <button
            onClick={handleSearch}
            className={clsx('',
              withFilter ? 'text-secondary-300' : 'text-secondary',
            )}
          >
            <SearchIcon size={28} />
          </button>
        }
        endContent={
          withFilter && (
            <div className="flex flex-row items-center justify-center gap-7">
              <i className="text-secondary-400 h-7">
                <Divider orientation="vertical" />
              </i>
              <button>
                <FilterIcon size={28} />
              </button>
            </div>
          )
        }
      />
    </div>
  );
};
