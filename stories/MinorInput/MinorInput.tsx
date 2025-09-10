'use client';

import { Input, Textarea } from '@heroui/react';
import React, { forwardRef } from 'react';

export interface MinorInputProps {
  type?: 'text' | 'email' | 'phone' | 'unit' | 'plate';
  placeholder?: string;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  isMultieline?: boolean;
  // تمام props اضافی مثل onChange و value از react-hook-form
  [key: string]: any;
}

export const MinorInput = forwardRef<HTMLInputElement | HTMLTextAreaElement, MinorInputProps>(
  ({ type = 'text', placeholder, label, size = 'md', isMultieline = false, ...props }, ref) => {
    return (
      <div className="w-full px-5 flex flex-col gap-2">
        {label && <label className="text-large text-secondary">{label}</label>}

        {isMultieline ? (
          <Textarea
            placeholder={placeholder}
            ref={ref as any}
            size={size}
            {...props} // onChange و value از register میاد
            className="w-full border-2 border-secondary-100 rounded-xl text-secondary hover:border-secondary focus:border-secondary outline-none"
          />
        ) : (
          <Input
            type={type === 'phone' || type === 'unit' || type === 'plate' ? 'tel' : type}
            placeholder={placeholder}
            ref={ref as any}
            size={size}
            {...props} // onChange و value از register میاد
            className="w-full border-2 border-secondary-100 rounded-xl text-secondary hover:border-secondary focus:border-secondary outline-none"
          />
        )}
      </div>
    );
  }
);

MinorInput.displayName = 'MinorInput';
