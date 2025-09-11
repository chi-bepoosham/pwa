'use client';

import { FilterIcon, SearchIcon } from '@/stories/Icons';
import { Divider, Input } from '@heroui/react';
import clsx from 'clsx';
import React, { useState } from 'react';

export interface SearchProps {
  withFilter: boolean;
  title?: string;
  onSearch?: (value: string) => void;
}

export const Search = ({ withFilter, title, onSearch }: SearchProps) => {
  const [value, setValue] = useState('');

  const handleSearch = () => {
    if (onSearch) onSearch(value);
  };

  return (
    <div className="w-full rounded-xl flex justify-center items-center">
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        isClearable={false}
        classNames={{
          label: 'text-black/50 dark:text-white/90',
          input: clsx(
            'text-black/100 dark:text-white/90',
            withFilter ? 'placeholder:text-secondary-300' : 'placeholder:text-secondary'
          ),
          innerWrapper: clsx('bg-white', withFilter && 'bg-white'),
          inputWrapper: clsx(
            'border-2 bg-white dark:bg-default/60 dark:hover:bg-default/70',
            'group-data-[hover=true]:bg-white',
            'group-data-[focus=true]:bg-white dark:group-data-[focus=true]:bg-default/60',
            '!cursor-text',
            withFilter ? 'border-secondary-100' : 'border-secondary'
          ),
        }}
        placeholder={title ? title : 'جستجوی لباس یا فروشگاه'}
        radius="lg"
        size="lg"
        startContent={
          <button
            onClick={handleSearch}
            className={clsx('', withFilter ? 'text-secondary-300' : 'text-secondary')}
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
