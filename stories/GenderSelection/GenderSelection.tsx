'use client';

import React from 'react';
import { RadioGroup, useRadio, VisuallyHidden, cn } from '@heroui/react';
import { WomenGenderIcon, MenGenderIcon } from '@/stories/Icons';
import { UseRadioProps } from '@/node_modules/@heroui/radio/dist/use-radio';

export interface GenderSelectionProps {
}

export const GenderSelection = (props: GenderSelectionProps) => {
  const {} = props;
  return (
    <div className="w-full flex justify-center items-start">
      <RadioGroup
        label={
          <span className="text-secondary font-semibold text-large">
              انتخاب جنسیت
          </span>
        }
        orientation="horizontal"
        className="select-none"
      >
        <CustomRadio
          value="woman"
          icon={<WomenGenderIcon size={20} />}
        >
          خانم
        </CustomRadio>
        <CustomRadio
          value="man"
          icon={<MenGenderIcon size={20} />}
        >
          آقـــــا
        </CustomRadio>
      </RadioGroup>
    </div>
  );
};


type CustomRadioProps = UseRadioProps & {
  icon: React.ReactNode;
  children: React.ReactNode;
}


export const CustomRadio = (props: CustomRadioProps) => {

  const {
    Component,
    children,
    getBaseProps,
    getInputProps,
    getLabelProps,
    getLabelWrapperProps,
  } = useRadio(props);


  return (
    <Component
      {...getBaseProps()}
      className={cn(
        'group inline-flex items-center active:opacity-50 justify-between flex-row-reverse tap-highlight-transparent',
        'max-w-[300px] cursor-pointer border-2 border-[#68BAA6]/40 rounded-xl gap-4 p-3',
        'data-[selected=true]:border-secondary',
        'data-[selected=true]:bg-secondary',
      )}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <span
        className="bg-[#68BAA6]/15 p-1.5 rounded-lg"
      >
        {props.icon}
      </span>
      <div {...getLabelWrapperProps()}>
        {children && (
          <span
            {...getLabelProps()}
            className="text-large group-data-[selected=true]:text-white"
          >
            {children}
          </span>
        )}
      </div>
    </Component>
  );
};
