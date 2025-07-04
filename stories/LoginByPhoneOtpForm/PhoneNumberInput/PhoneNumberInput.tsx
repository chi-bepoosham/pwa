'use client';

import React from 'react';
import { Divider, Input } from '@heroui/react';
import { PatternFormat } from 'react-number-format';
import { Control, Controller, useController } from 'react-hook-form';
import { LoginByPhoneOtpFormType } from '@/types/LoginByPhoneOtpForm.type';
import { InfoIcon } from '@/stories/Icons';
import clsx from 'clsx';


export interface PhoneNumberInputProps {
  control: Control<LoginByPhoneOtpFormType>;
  changeNumber: () => void;
}

export const PhoneNumberInput = (props: PhoneNumberInputProps) => {

  const {
    control,
  } = props;


  const hasTokenSentField = useController({ control, name: 'hasTokenSent' as keyof LoginByPhoneOtpFormType });
  const hasTokenSent = hasTokenSentField.field.value as boolean;


  return (
    <Controller
      name="phone"
      control={control}
      render={({ field, fieldState, formState }) => (
        <PatternFormat
          fullWidth
          size="lg"
          radius="sm"
          color="secondary"
          variant="bordered"
          placeholder="127077707"
          labelPlacement="outside"
          type="tel"

          endContent={(
            <div dir="ltr" className={clsx("flex flex-row items-center justify-start", fieldState.invalid && "text-danger")}>
              +98
              <Divider orientation="vertical" className="h-4 mx-2" />
            </div>
          )}

          customInput={Input}
          getInputRef={field.ref}
          name={field.name}

          format="### ### ####"
          allowEmptyFormatting
          mask=" "

          value={field.value}
          onChange={field.onChange}

          isInvalid={fieldState.invalid}
          errorMessage={fieldState.error?.message}

          autoFocus

          isReadOnly={hasTokenSent || formState.isLoading || formState.isSubmitting || formState.disabled || field.disabled}
        />
      )}
    />
  );
};

