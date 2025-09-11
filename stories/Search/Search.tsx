'use client';

import { CrossIcon, FilterIcon, SearchIcon } from '@/stories/Icons';
import {
  Button,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
} from '@heroui/react';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

export interface SearchProps {
  title?: string;
  withFilter?: boolean;
  searchText?: string;
  statusFilter?: number;
  onSearch?: (value: string) => void;
  onStatusChange?: (status?: number) => void;
}

export const Search = ({
  withFilter,
  title,
  onSearch,
  searchText,
  statusFilter,
  onStatusChange,
}: SearchProps) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(searchText ?? '');
  }, [searchText]);

  const handleSearch = () => {
    if (onSearch) onSearch(value);
  };

  const handleClearFilter = () => {
    if (onStatusChange) onStatusChange(undefined);
  };
  const handleClearInput = () => {
    setValue('');
    if (onSearch) onSearch('');
  };

  return (
    <div className="w-full rounded-xl flex justify-center items-center gap-2">
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
            'h-16 border-2 bg-white dark:bg-default/60 dark:hover:bg-default/70',
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
          <div className="flex flex-row items-center justify-center gap-2">
            {value && (
              <button onClick={handleClearInput} className={clsx('text-secondary-400 p-1')}>
                <CrossIcon size={45}/>
              </button>
            )}
            {withFilter && (
              <>
                <i className="text-secondary-400 h-7">
                  <Divider orientation="vertical" />
                </i>
                <Dropdown>
                  <div className="relative w-fit h-full flex items-center">
                    <DropdownTrigger className="bg-transparent">
                      <Button
                        size="sm"
                        isIconOnly
                        variant={statusFilter ? 'ghost' : 'flat'}
                        color={statusFilter ? 'primary' : 'secondary'}
                        className="rounded-lg"
                      >
                        <FilterIcon size={40} />
                      </Button>
                    </DropdownTrigger>
                    {statusFilter && (
                      <div
                        className="z-20 w-5 h-5 bg-white border border-primary-600 rounded-full absolute -top-2.5 -left-2.5 flex items-center justify-center text-primary cursor-pointer"
                        onClick={handleClearFilter}
                      >
                        <CrossIcon size={32} />
                      </div>
                    )}
                  </div>
                  <DropdownMenu
                    aria-label="فیلتر وضعیت لباس"
                    onAction={(key) => {
                      if (onStatusChange) {
                        onStatusChange(Number(key) === 0 ? undefined : Number(key));
                      }
                    }}
                  >
                    {[
                      { key: 1, label: 'در حال پردازش' },
                      { key: 2, label: 'ثبت شده' },
                      { key: 3, label: 'خطاها' },
                    ].map((item) => (
                      <DropdownItem key={item.key}>
                        <div className="flex items-center w-full justify-between">
                          <span>{item.label}</span>
                          {statusFilter === item.key && <span className="text-success">✔</span>}
                        </div>
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
              </>
            )}
          </div>
        }
      />
    </div>
  );
};
