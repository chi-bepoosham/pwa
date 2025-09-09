'use client';

import { MinorButton } from '@/stories/MinorButton';
import { LoginByPhoneOtpFormType } from '@/types/LoginByPhoneOtpForm.type';
import { Button } from '@heroui/react';
import { KeyboardArrowLeft } from '@mui/icons-material';
import React from 'react';
import { Control, useFormState, useWatch } from 'react-hook-form';

export interface PhoneOtpLabelProps {
  isLoading?: boolean;
  control: Control<LoginByPhoneOtpFormType>;
}

export const Submit = (props: PhoneOtpLabelProps) => {
  const { isLoading, control } = props;

  const formState = useFormState({ control });
  const hasTokenSent = useWatch({ control, name: 'hasTokenSent' as keyof LoginByPhoneOtpFormType });

  if (hasTokenSent) {
    return (
      <Button
        className="text-sm w-full"
        type="submit"
        color="primary"
        variant="shadow"
        size="lg"
        isDisabled={formState.disabled}
        isLoading={formState.isLoading || formState.isValidating || formState.isSubmitting}
        endContent={<KeyboardArrowLeft />}
      >
        ورود
      </Button>
    );
  }
  return (
    <MinorButton
      className="text-sm w-full"
      type="submit"
      color="secondary"
      variant="solid"
      radius="lg"
      buttonTitle="تایید و دریافت کد تایید"
      size="lg"
      isDisable={
        isLoading ||
        formState.disabled ||
        formState.isLoading ||
        formState.isValidating ||
        formState.isSubmitting
      }
      isLoading={
        isLoading ||
        formState.disabled ||
        formState.isLoading ||
        formState.isValidating ||
        formState.isSubmitting
      }
    />
  );
};
