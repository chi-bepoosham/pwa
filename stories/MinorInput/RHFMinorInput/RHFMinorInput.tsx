'use client';
import React from 'react';
import { useController, Control } from 'react-hook-form';
import { MinorInput, MinorInputProps } from '../MinorInput';

interface RHFMinorInputProps extends Omit<MinorInputProps, 'value' | 'onChange'> {
  name: string;
  control: Control<any>;
}

export const RHFMinorInput = ({ name, control, ...rest }: RHFMinorInputProps) => {
  const {
    field: { onChange, value },
  } = useController({
    name,
    control,
  });

  return (
    <MinorInput
      {...rest}
      value={value}
      onChange={onChange}
    />
  );
};
