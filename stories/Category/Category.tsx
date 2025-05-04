'use client';
import React, { useState, useRef } from 'react';
import { MinorButton } from '@/stories/MinorButton';

export interface CategoryProps {
  onChange?: (selectedValue: string) => void;
  variant: 'primary' | 'secondary' | 'tertiary';
  options: { title: string }[];
  className?: string;
  defaultSelected?: string;
}

export const Category = ({  onChange, variant, options, className, defaultSelected }: CategoryProps) => {
  const [selected, setSelected] = useState<string>(defaultSelected || options[0].title);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = (title: string) => {
    setSelected(title);
    onChange?.(title);
  };

  const getVariantClasses = (isActive: boolean) => {
    switch (variant) {
      case 'primary':
        return isActive
          ? 'bg-primary text-white border-primary'
          : 'bg-white text-primary border-primary';
      case 'secondary':
        return isActive
          ? 'bg-secondary text-white border-secondary'
          : 'bg-white text-secondary border-secondary';
      case 'tertiary':
        return isActive
          ? 'bg-tertiary text-white border-tertiary'
          : 'bg-white text-tertiary border-tertiary';
      default:
        return '';
    }
  };

  const scrollToSelected = () => {
    const selectedElement = containerRef.current?.querySelector(`[data-title="${selected}"]`);
    if (selectedElement) {
      selectedElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  };

  React.useEffect(() => {
    scrollToSelected();
  }, [selected]);

  return (
    <div 
      ref={containerRef}
      className={`w-full overflow-x-auto whitespace-nowrap flex gap-3 pb-2 ${className || ''}`}
      style={{
        scrollbarWidth: 'thin',
        scrollbarColor: '#888 #f1f1f1',
      }}
    >
      <div className="flex gap-3 px-4">
        {options.map((item, index) => {
          const isActive = selected === item.title;
          const variantClasses = getVariantClasses(isActive);

          return (
            <MinorButton
              key={index}
              buttonTitle={item.title}
              onClick={() => handleClick(item.title)}
              variant={isActive ? 'solid' : 'bordered'}
              radius="md"
              className={`p-4 border-1.5 transition-all duration-200 w-fit flex-shrink-0 ${variantClasses}`}
              data-title={item.title}
            />
          );
        })}
      </div>
    </div>
  );
};

// Example usage of the Category component
const ExampleUsage = () => {
  const categoryOptions = [
    { title: 'Shirts' },
    { title: 'Pants' },
    { title: 'Shoes' },
    { title: 'Accessories' }
  ];

  const handleCategoryChange = (selectedCategory: string) => {
    console.log('Selected category:', selectedCategory);
  };

  return (
    <Category
      variant="primary"
      options={categoryOptions}
      onChange={handleCategoryChange}
      className="my-4"
      defaultSelected="Pants"
    />
  );
};
