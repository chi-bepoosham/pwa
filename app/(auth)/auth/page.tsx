'use client';

import { axiosCore } from '@/lib/axios';
import { useUserStore } from '@/store/UseUserStore';
import { GoogleIcon } from '@/stories/Icons';
import { LoginByPhoneOtpForm } from '@/stories/LoginByPhoneOtpForm';
import { Logo } from '@/stories/Logo';
import { MinorButton } from '@/stories/MinorButton';
import { CometStarVector } from '@/stories/Vectors';
import { LoginByPhoneOtpFormType } from '@/types/LoginByPhoneOtpForm.type';
import { addToast } from '@heroui/react';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { ErrorOption, FieldPath } from 'react-hook-form';

// type input
type T = LoginByPhoneOtpFormType;

export interface LoginHandleSubmit {
  data: T;
  setError?: (
    name: FieldPath<LoginByPhoneOtpFormType> | `root.${string}` | 'root',
    error: ErrorOption
  ) => void;
  resetToken?: () => void;
}

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);

  const setUserInfo = useUserStore((state) => state.setUserInfo);

  const router = useRouter();

  const handleReset = () => {};

  const handleSubmit = async (data: LoginByPhoneOtpFormType) => {
    try {
      setIsLoading(true);
      const axios = axiosCore();
      await axios.post('/user/auth/otp/send', {
        mobile: `0${data.phone}`,
      });
      addToast({
        title: 'کد تایید به شماره شما ارسال شد',
        color: 'success',
      });
      setUserInfo('phone_number', `0${data.phone}`);
      router.push('/auth/verify');
    } catch (err) {
      setIsLoading(false);
      addToast({
        title: 'خطای ارسال',
        description: (err as AxiosError).message || 'خطایی در ارسال کد تایید رخ داد',
        color: 'danger',
      });
    }
  };

  return (
    <div className="flex-1 flex flex-col justify-center items-center w-full h-full max-h-screen overflow-hidden bg-primary">
      <div className="flex flex-col items-center justify-center h-full w-full gap-5 py-8">
        <Logo withLogoType={true} />
        <div className="flex flex-row justify-center items-center w-full gap-4">
          <i className="rotate-180 text-white">
            <CometStarVector />
          </i>
          <h2 className="text-nowrap text-white">ورود و ثــبت‌نـــام</h2>
          <i className="">
            <CometStarVector />
          </i>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-around w-full h-full rounded-t-3xl p-8 pb-12 bg-white">
        <div className="py-4 w-full">
          <LoginByPhoneOtpForm submit={handleSubmit} reset={handleReset} isLoading={isLoading} />
        </div>
        <div className="flex flex-row items-center justify-center w-full h-full gap-4">
          <i className="rotate-180">
            <CometStarVector />
          </i>
          <h4 className="text-secondary">یــا</h4>
          <i>
            <CometStarVector />
          </i>
        </div>
        <div className="w-full h-full flex justify-center items-center py-4">
          <MinorButton
            variant="ghost"
            buttonTitle="ورود بـــــا حســــاب گــــــوگل"
            radius="md"
            size="lg"
            isDisable
            isLoading={false}
            icon={<GoogleIcon size={20} />}
            color="secondary"
            className="w-full text-sm"
          />
        </div>
      </div>
    </div>
  );
}
