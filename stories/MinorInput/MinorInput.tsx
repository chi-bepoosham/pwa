'use client';
import React from 'react';
import { Input } from '@heroui/react';

export type InputType = 'email' | 'fullName' | 'phone' | 'select' | 'unit' | 'plate' | 'discount';

export interface MinorInputProps {
  type?: InputType;
  placeholder?: string;
  label?: string;
  value?: string;
  options?: { label: string; value: string }[];
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export const MinorInput = ({
                             type = 'fullName',
                             placeholder,
                             label,
                             value,
                             options = [],
                             onChange,
                           }: MinorInputProps) => {
  const getPlaceholder = () => {
    if (placeholder) return placeholder;
    switch (type) {
      case 'email': return 'ایمیل خود را وارد کنید';
      case 'fullName': return 'نام و نام‌خانوادگی';
      case 'phone': return '+98';
      case 'select': return 'انتخاب کنید';
      case 'unit': return 'شماره واحد';
      case 'plate': return 'شماره پلاک';
      case 'discount': return 'کد تخفیف را وارد کنید';
      default: return '';
    }
  };

  return (
    <div className="w-full flex flex-col gap-2">
      {label && <label className="text-large text-secondary">{label}</label>}
      {type === 'select' ? (
        <select
          value={value}
          onChange={onChange}
          className="w-full border-2 border-secondary-100 rounded-xl text-secondary bg-white p-3 focus:outline-none focus:border-secondary"
        >
          <option value="">{getPlaceholder()}</option>
          {options?.map(opt => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <Input
          type={(type === 'phone' || type === 'unit' || type === 'plate') ? 'tel' : 'text'}
          placeholder={getPlaceholder()}
          value={value}
          onChange={onChange}
          className="w-full border-2 border-secondary-100 rounded-xl text-secondary hover:border-secondary focus:border-secondary"
          classNames={{
            innerWrapper: ['bg-white'],
            inputWrapper: ['bg-white'],
          }}
        />
      )}
    </div>
  );
};
