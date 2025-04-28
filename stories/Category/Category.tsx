'use client';
import React, { useState } from 'react';
import { MinorButton } from '@/stories/MinorButton';

export interface CategoryProps {
  isSize?: boolean;
  onChange?: (selectedValue: string) => void;
  theme: 'light' | 'dark';
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

export const Category = ({ isSize, onChange, theme }: CategoryProps) => {
  const options = isSize ? sizeOptions : categoryOptions;
  const [selected, setSelected] = useState<string>(options[0].title);

  const handleClick = (title: string) => {
    setSelected(title);
    onChange?.(title);
  };

  return (
    <div className="w-full overflow-x-auto whitespace-nowrap flex gap-3 justify-center items-center">
      {options.map((item, index) => {
        const isActive = selected === item.title;

        const bgClass = theme === 'light' ? 'bg-primary' : 'bg-secondary';
        const borderClass = theme === 'light' ? 'border-primary' : 'border-secondary';
        const textClass = isActive
          ? 'text-white'
          : theme === 'light'
            ? 'text-primary'
            : 'text-gray-400';

        return (
          <MinorButton
            key={index}
            buttonTitle={item.title}
            onClick={() => handleClick(item.title)}
            variant={isActive ? 'solid' : 'bordered'}
            radius="md"
            className={`p-4 border-1.5 transition-all duration-200 w-fit ${textClass} ${borderClass} ${
              isActive ? bgClass : ''
            }`}
          />
        );
      })}
    </div>
  );
};
