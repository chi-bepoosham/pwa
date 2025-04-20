'use client';
import React, { useState } from 'react';
import { MinorButton } from '@/stories/MinorButton';

export interface CategoryProps {
  isSize?: boolean;
  onChange?: (selectedValue: string) => void;
}

const categoryOptions = [
  { title: 'زمستان' },
  { title: 'مردانه' },
  { title: 'زنانه' },
  { title: 'جدیدترین‌ها' },
  { title: 'چرم' },
];

const sizeOptions = [
  { title: 'S' },
  { title: 'M' },
  { title: 'L' },
  { title: 'XL' },
  { title: '2XL' },
  { title: '3XL' },
];

export const Category = ({ isSize, onChange }: CategoryProps) => {
  const options = isSize ? sizeOptions : categoryOptions;

  const [selected, setSelected] = useState<string>(options[0].title);

  const handleClick = (title: string) => {
    setSelected(title);
    onChange?.(title);
  };

  return (
    <div className="flex flex-row gap-3 w-full justify-center items-center">
      {options.map((item, index) => {
        const isActive = selected === item.title;

        return (
          <MinorButton
            key={index}
            buttonTitle={item.title}
            onClick={() => handleClick(item.title)}
            variant={isActive ? 'solid' : 'bordered'}
            radius="md"
            className={`px-5 py-2.5 border-1.5 transition-all duration-200 ${
              isActive
                ? 'bg-secondary text-white'
                : 'text-gray-400 border-black hover:text-black'
            }`}
          />
        );
      })}
    </div>
  );
};
