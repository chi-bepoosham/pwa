'use client';

import { Input, Textarea } from '@heroui/react';
import React, { forwardRef, useState } from 'react';

interface BaseProps {
  type?: 'text' | 'email' | 'phone' | 'unit' | 'plate';
  placeholder?: string;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  isMultieline?: boolean;
}

export type MinorInputProps = BaseProps &
  Partial<React.ComponentPropsWithoutRef<typeof Input>> &
  Partial<React.ComponentPropsWithoutRef<typeof Textarea>>;

export const MinorInput = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  MinorInputProps
>(({
    type = 'text',
    placeholder,
    label,
    size = 'md',
    isMultieline = false,
    onChange,
    ...props
  }, ref) => {

  const [error, setError] = useState<string>('');

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    if (value && !/^09\d*$/.test(value)) {
      setError('شماره تلفن باید با 09 شروع شود و فقط شامل عدد باشد.');
    } else {
      setError('');
    }
    if (onChange) onChange({ ...e, target: { ...e.target, value } });
  };

  return (
    <div className="w-full px-5 flex flex-col gap-1">
      {label && <label className="text-large text-secondary">{label}</label>}

      {isMultieline ? (
        <Textarea
          placeholder={placeholder}
          ref={ref as React.Ref<HTMLTextAreaElement>}
          size={size}
          {...props}
          className="w-full border-2 border-secondary-100 rounded-xl text-secondary hover:border-secondary focus:border-secondary outline-none"
        />
      ) : (
        <div className="relative">
          <Input
            type={type === 'phone' || type === 'unit' || type === 'plate' ? 'tel' : type}
            placeholder={placeholder}
            ref={ref as React.Ref<HTMLInputElement>}
            size={size}
            {...props}
            className={`w-full border-2 rounded-xl text-secondary hover:border-secondary focus:border-secondary outline-none
              ${error ? 'border-red-500' : 'border-secondary-100'}`}
            onChange={type === 'phone' ? handlePhoneChange : onChange}
            maxLength={type === 'phone' ? 11 : undefined}
          />
          {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
        </div>
      )}
    </div>
  );
});

MinorInput.displayName = 'MinorInput';
