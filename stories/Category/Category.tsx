'use client';
import React, { useState, useRef } from 'react';
import { MinorButton } from '@/stories/MinorButton';

export interface CategoryProps {
  value?: string;
  onChange?: (selectedValue: string) => void;
  variant: 'primary' | 'secondary' | 'tertiary';
  items: { key: string; title: string }[];
  className?: string;
}

export const Category = ({ onChange, variant, items, className, value }: CategoryProps) => {
  const [selected, setSelected] = useState<string>(value || items[0].key);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = (key: string) => {
    setSelected(key);
    onChange?.(key);
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

  React.useEffect(() => {
    if (value) setSelected(value);
  }, [value]);

  return (
    <div 
      ref={containerRef}
      className={`w-full overflow-x-auto whitespace-nowrap flex gap-3 pb-2 ${className || ''}`}
      style={{
        scrollbarWidth: 'thin',
        scrollbarColor: '#888 #f1f1f1',
      }}
    >
      <div className="flex gap-3 px-4 justify-start">
        {items.map((item, index) => {
          const isActive = selected === item.key;
          const variantClasses = getVariantClasses(isActive);
          return (
            <MinorButton
              key={index}
              buttonTitle={item.title}
              onClick={() => handleClick(item.key)}
              variant={isActive ? 'solid' : 'bordered'}
              radius="md"
              className={`p-4 py-6 border-1.5 transition-all duration-200 w-fit flex-shrink-0 ${variantClasses}`}
              data-title={item.title}
            />
          );
        })}
      </div>
    </div>
  );
};
