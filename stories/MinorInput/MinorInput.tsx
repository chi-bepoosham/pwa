'use client';
import React, { useState } from 'react';
import { Input } from '@heroui/react';



type InputType = 'email' | 'fullName' | 'phone' | 'select' | 'unit' | 'plate';



export interface MinorInputProps {
  type?: InputType;
  placeholder?: string;
  label?: string;
  options?: { label: string; value: string }[];
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export const MinorInput = ({
                             type = 'fullName',
                             placeholder,
                             label,
                             options = [],
                             onChange,
                           }: MinorInputProps) => {
  const [value, setValue] = useState(type === 'phone' ? '+98' : '');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    let newValue = e.target.value;

    if (type === 'phone') {
      newValue = newValue.replace(/[^0-9+]/g, '');
      if (!newValue.startsWith('+98')) {
        newValue = '+98';
      }
    } else if (type === 'unit' || type === 'plate') {
      newValue = newValue.replace(/\D/g, '');
    }

    setValue(newValue);
    onChange?.(e);
  };

  const getPlaceholder = () => {
    if (placeholder) return placeholder;

    switch (type) {
      case 'email':
        return 'ایمیل خود را وارد کنید';
      case 'fullName':
        return 'نام و نام‌خانوادگی';
      case 'phone':
        return '+98';
      case 'select':
        return 'انتخاب کنید';
      case 'unit':
        return 'شماره واحد';
      case 'plate':
        return 'شماره پلاک';
      default:
        return ;
    }
  };



  return (
    <div className="w-full flex flex-col gap-2">
      {label && <label className="text-large text-secondary">{label}</label>}

      {type === 'select' ? (
        <select
          value={value}
          onChange={handleChange}
          className="w-full border-2 border-secondary-100 rounded-xl text-secondary bg-white p-3 focus:outline-none focus:border-secondary"
        >
          <option value="">{getPlaceholder()}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <Input
          type={(type === 'phone' || type === 'unit' || type === 'plate') ? 'tel' : type}
          placeholder={getPlaceholder()}
          value={value}
          onChange={handleChange}
          className="w-full border-2 border-secondary-100 rounded-xl text-secondary hover:border-secondary focus:border-secondary"
          classNames={{
            innerWrapper: ['bg-white', 'focus:bg-white', 'hover:bg-white'],
            inputWrapper: ['bg-white', 'group-data-[focus=true]:bg-white', 'data-[hover=true]:bg-white'],
          }}
        />
      )}
    </div>
  );
};
