'use client';
import React from 'react';
import { Input, Textarea } from '@heroui/react';

// export type InputType = 'email' | 'fullName' | 'phone' | 'select' | 'unit' | 'plate' | 'discount' | 'description';

export interface MinorInputProps {
  type?: string;
  placeholder?: string;
  label?: string;
  value?: string;
  options?: { label: string; value: string }[];
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  size?: 'sm' | 'md' | 'lg';
  isMultieline?: boolean;
}

export const MinorInput = ({
                             type = 'fullName',
                             placeholder,
                             label,
                             value,
                             options = [],
                             onChange,
                             size = 'md',
                             isMultieline,
                           }: MinorInputProps) => {


  return (
    <div className="w-full px-5 flex flex-col gap-2">
      {label && <label className="text-large text-secondary">{label}</label>}
      {isMultieline ? (
        <Textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full border-2 border-secondary-100 rounded-xl text-secondary hover:border-secondary focus:border-secondary"
        classNames={{
          innerWrapper: [
            'bg-white',
          ],
          inputWrapper: [
            'bg-white',
            'data-[hover=true]:bg-white',
            'group-data-[focus=true]:bg-white'
          ],
        }}
      />
      ) : (
        <Input
          type={(type === 'phone' || type === 'unit' || type === 'plate') ? 'tel' : 'text'}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          size={size}
          className="w-full border-2 border-secondary-100 rounded-xl text-secondary hover:border-secondary focus:border-secondary"
          classNames={{
            innerWrapper: [
              'bg-white',
            ],
            inputWrapper: [
              'bg-white',
              'data-[hover=true]:bg-white',
              'group-data-[focus=true]:bg-white'
            ],
          }}
        />
      )}
    </div>
  );
};
