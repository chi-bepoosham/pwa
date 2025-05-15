'use client';
import React from 'react';
import { Logo } from '@/stories/Logo';
import { CometStarVector } from '@/stories/Vectors';
import { LoginByPhoneOtpForm } from '@/stories/LoginByPhoneOtpForm';
import { MinorButton } from '@/stories/MinorButton';
import { GoogleIcon } from '@/stories/Icons';
import { LoginByPhoneOtpFormType } from '@/types/LoginByPhoneOtpForm.type';
import { ErrorOption, FieldPath } from 'react-hook-form';
import { axiosCore } from '@/lib/axios';
import { useUserStore } from '@/store/UseUserStore';
import { useRouter } from 'next/navigation';

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
  // zustand
  const setUserInfo = useUserStore((state) => state.setUserInfo);

  // state
  const Route = useRouter();

  const handleReset = () => {
    console.log('فرم ریست شد');
  };

  const handleSubmit = async (data: LoginByPhoneOtpFormType) => {
    try {
      const axios = axiosCore();
      const response = await axios.post('/user/auth/otp/send', {
        mobile: `0${data.phone}`,
      });
      setUserInfo('phone_number', `0${data.phone}`);
      Route.push('/auth/verify');
      console.log('OTP sent successfully:', response.status);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-full overflow-hidden bg-primary">
      <div className="flex flex-col items-center justify-center h-full w-full gap-5 py-8">
        <Logo withLogoType={true} />
        <div className="flex flex-row justify-center items-center w-full gap-4">
          <i className="rotate-180">
            <CometStarVector />
          </i>
          <h2 className="text-nowrap text-white">ورود و ثــبت‌نـــام</h2>
          <i className="">
            <CometStarVector />
          </i>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between w-full h-full rounded-t-3xl p-4 bg-white">
        <div className="py-4">
          <LoginByPhoneOtpForm submit={handleSubmit} reset={handleReset} />
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
            isLoading={false}
            icon={<GoogleIcon size={28} />}
            color="secondary"
          />
        </div>
      </div>
    </div>
  );
}
