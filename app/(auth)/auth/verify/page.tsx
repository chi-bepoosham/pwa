'use client';
import { MinorButton } from '@/stories/MinorButton';
import React, { useEffect } from 'react';
import { CometStarVector } from '@/stories/Vectors';
import { ArrowRightIcon } from '@/stories/Icons';
import { Banner } from '@/stories/Banner';
import { TokenInput } from '@/stories/LoginByPhoneOtpForm/TokenInput';
import { useForm } from 'react-hook-form';
import { LoginByPhoneOtpFormType } from '@/types/LoginByPhoneOtpForm.type';
import { useUserStore } from '@/store/UseUserStore';
import { useRouter } from 'next/navigation';
import { axiosCore } from '@/lib/axios';
import { toast } from 'react-toastify';
import { AxiosError, AxiosResponse } from 'axios';

export default function Page() {
  const userInfo = useUserStore((state) => state.userInfo);
  const setUserInfo = useUserStore((state) => state.setUserInfo)
  const Route = useRouter();
  const { control, handleSubmit } = useForm<LoginByPhoneOtpFormType>({
    defaultValues: {
      phone: '',
      hasTokenSent: true,
      token: '',
    },
  });

  const onSubmit = async (data: LoginByPhoneOtpFormType) => {
    try {
      const axios = axiosCore();

      const response : AxiosResponse = await axios.post('/user/auth/otp/confirm', {
        mobile: userInfo.phone_number,
        code: data.token,
      });

      console.log('OTP confirmed:', response.status);

      if (response.data.object.token) {
        // Save token if needed: localStorage.setItem('token', response.token)
        document.cookie = `token=${response.data.object.token}; path=/; max-age=2592000; SameSite=Strict`;
        toast.success('ورود با موفقیت انجام شد');
        Route.push('/home'); // Redirect to home
      } else {
        setUserInfo("api_key" , response.data.object.api_key)
        setUserInfo("has_rejester" , !!response.data.object.token)
        toast.info('برای تکمیل ثبت‌نام به صفحه ثبت‌نام منتقل شدید');
        Route.push('/auth/register'); // Redirect to register
      }
    } catch (err) {
      const error = err as AxiosError<{ message: string; errors?: Record<string, string[]> }>;
      const message = error?.response?.data?.message || 'تأیید کد با خطا مواجه شد';
      toast.error(message);
    }
  };

  useEffect(() => {
    if (!userInfo.phone_number) Route.push('/auth');
  }, [userInfo]);

  return (
    <div className="flex flex-col justify-between h-full overflow-hidden">
      <div className="p-2">
        <MinorButton
          className="px-1 py-4"
          variant="bordered"
          radius="lg"
          isLoading={false}
          icon={
            <i className="text-secondary">
              <ArrowRightIcon size={28} />
            </i>
          }
          color="secondary"
        />
      </div>

      <div className="flex flex-col justify-center items-center gap-14 w-full h-full">
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="flex flex-row justify-center items-center gap-1.5">
            <i className="rotate-180">
              <CometStarVector />
            </i>
            <h2 className="text-nowrap">کــد تـــایید را وارد کــنید</h2>
            <i>
              <CometStarVector />
            </i>
          </div>
          <p>کد 5 رقمی به شمارۀ {userInfo.phone_number} ارسال شد.</p>
        </div>

        <TokenInput control={control} done={handleSubmit(onSubmit)} />

        <div className="flex flex-col justify-center items-center gap-5 w-full">
          <MinorButton
            className="w-full max-w-64"
            variant="flat"
            buttonTitle="تایید و ادامه"
            radius="md"
            isLoading={false}
            color="secondary"
          />
          <button onClick={() => Route.push('/auth')} className="text-primary">اصلاح شماره موبایل</button>
        </div>
      </div>

      <div className="w-full absolute -bottom-20 left-0 right-auto">
        <Banner withStar={true} textColor="text-primary" starColor="text-primary" />
      </div>
    </div>
  );
}
