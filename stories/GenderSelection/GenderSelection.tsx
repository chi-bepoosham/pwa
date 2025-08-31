'use client';

import React from 'react';
import { RadioGroup, useRadio, VisuallyHidden, cn } from '@heroui/react';
import { WomenGenderIcon, MenGenderIcon } from '@/stories/Icons';

export interface GenderSelectionProps {
  name?: string;
  value?: number;
  onChange?: (value: number) => void;
}

export const GenderSelection = ({ name, value, onChange }: GenderSelectionProps) => {
  const handleChange = (val: string) => {
    if (onChange) onChange(Number(val));
  };

  return (
    <div className="w-full flex justify-center items-start">
      <RadioGroup
        name={name}
        label={<span className="text-secondary font-semibold text-large w-full">انتخاب جنسیت</span>}
        orientation="horizontal"
        className="select-none w-full"
        value={value?.toString()}
        onValueChange={handleChange}
      >
        <div className="w-full flex justify-center gap-4">
          <CustomRadio value="2" icon={<WomenGenderIcon size={20} />}>
            خانم
          </CustomRadio>
          <CustomRadio value="1" icon={<MenGenderIcon size={20} />}>
            آقـــــا
          </CustomRadio>
        </div>
      </RadioGroup>
    </div>
  );
};

type CustomRadioProps = {
  value: string;
  icon: React.ReactNode;
  children: React.ReactNode;
};

export const CustomRadio = ({ value, icon, children }: CustomRadioProps) => {
  const { Component, getBaseProps, getInputProps, getLabelProps, getLabelWrapperProps } = useRadio({
    value,
  });

  return (
    <Component
      {...getBaseProps()}
      className={cn(
        'group inline-flex items-center active:opacity-50 justify-between flex-row-reverse tap-highlight-transparent',
        'max-w-[200px] cursor-pointer border-2 border-[#68BAA6]/40 rounded-xl gap-4 p-3',
        'data-[selected=true]:border-secondary',
        'data-[selected=true]:bg-secondary'
      )}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <span className="bg-[#68BAA6]/15 p-1.5 rounded-lg">{icon}</span>
      <div {...getLabelWrapperProps()}>
        {children && (
          <span {...getLabelProps()} className="text-large group-data-[selected=true]:text-white">
            {children}
          </span>
        )}
      </div>
    </Component>
  );
};
