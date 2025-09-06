'use client';

import { axiosCore } from '@/lib/axios';
import { setCookie } from '@/lib/cookies';
import { useUserStore } from '@/store/UseUserStore';
import { Banner } from '@/stories/Banner';
import { ArrowRightIcon } from '@/stories/Icons';
import { TokenInput } from '@/stories/LoginByPhoneOtpForm/TokenInput';
import { CometStarVector } from '@/stories/Vectors';
import { LoginByPhoneOtpFormType } from '@/types/LoginByPhoneOtpForm.type';
import { addToast, Button } from '@heroui/react';
import { AxiosError, AxiosResponse } from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Page() {
  const userInfo = useUserStore((state) => state.userInfo);
  const setUserInfo = useUserStore((state) => state.setUserInfo);

  const router = useRouter();
  const { control, handleSubmit, resetField, setFocus, formState } =
    useForm<LoginByPhoneOtpFormType>({
      defaultValues: {
        phone: '',
        hasTokenSent: true,
        token: '',
      },
    });

  const onSubmit = async (data: LoginByPhoneOtpFormType) => {
    try {
      const axios = axiosCore();

      const response: AxiosResponse = await axios.post('/user/auth/otp/confirm', {
        mobile: userInfo.phone_number,
        code: data.token,
      });

      if (response.data.object.token) {
        await setCookie('token', response.data.object.token);
        await setCookie('userInfo', JSON.stringify(response.data.object.user));
        addToast({
          title: 'ورود با موفقیت انجام شد',
          color: 'success',
        });
        router.replace('/home'); // Redirect to home
      } else {
        setUserInfo('api_key', response.data.object.api_key);
        setUserInfo('has_rejester', !!response.data.object.token);
        addToast({
          title: 'برای تکمیل ثبت‌نام به صفحه ثبت‌نام منتقل شدید',
          color: 'success',
        });
        router.replace('/auth/register'); // Redirect to register
      }
    } catch (err) {
      const error = err as AxiosError<{ message: string; errors?: Record<string, string[]> }>;
      const message = error?.response?.data?.message || 'تأیید کد با خطا مواجه شد';
      addToast({
        title: 'خطایی در تایید کد رخ داد',
        description: message,
        color: 'danger',
      });
      resetField('token');
      setFocus('token', { shouldSelect: true });
    }
  };

  useEffect(() => {
    if (!userInfo.phone_number) router.push('/auth');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);

  const [isSending, setIsSending] = useState(false);
  const sendAgain = async () => {
    setIsSending(true);
    try {
      const axios = axiosCore();
      const response = await axios.post('/user/auth/otp/send', {
        mobile: `${userInfo.phone_number}`,
      });
      addToast({
        title: 'کد تایید به شماره شما ارسال شد',
        color: 'success',
      });
      setUserInfo('phone_number', `${userInfo.phone_number}`);
      router.push('/auth/verify');
      console.log('OTP sent successfully:', response.status);
    } catch (err) {
      addToast({
        title: 'خطایی در ارسال کد تایید رخ داد',
        description: (err as AxiosError).message || 'خطایی در ارسال کد تایید رخ داد',
        color: 'danger',
      });
      console.error(err);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <main className="flex flex-col justify-between h-full overflow-hidden">
      <div className="p-6 sticky top-0 w-full bg-white z-10">
        <Button
          variant="bordered"
          color="default"
          size="lg"
          isIconOnly
          className="border-foreground rounded-2xl"
          onPress={() => router.push('/auth')}
        >
          <i className="text-secondary">
            <ArrowRightIcon size={28} />
          </i>
        </Button>
      </div>
      <div className="flex flex-col justify-center items-center gap-14 w-full h-full mx-auto max-w-80">
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="flex flex-row justify-center items-center gap-1.5">
            <i className="rotate-180">
              <CometStarVector />
            </i>
            <h2 className="text-nowrap font-bold">کــد تـــایید را وارد کــنید</h2>
            <i>
              <CometStarVector />
            </i>
          </div>
          <p>کد 5 رقمی به شمارۀ {userInfo.phone_number} ارسال شد.</p>
        </div>

        <TokenInput control={control} done={handleSubmit(onSubmit)} />

        <div className="flex flex-col justify-center items-center gap-3 w-full">
          {/* <MinorButton
            className="w-full max-w-64"
            variant="flat"
            buttonTitle="تایید و ادامه"
            radius="md"
            isLoading={false}
            color="primary"
          /> */}
          <Button
            fullWidth
            variant="light"
            color="primary"
            size="sm"
            onPress={sendAgain}
            isLoading={
              isSending || formState.isLoading || formState.isValidating || formState.isSubmitting
            }
            isDisabled={isSending || formState.disabled}
          >
            ارسال مجدد کد پیامکی
          </Button>
          <Button
            fullWidth
            // isDisabled={true}
            type="submit"
            variant="solid"
            color="primary"
            size="lg"
            isDisabled={formState.disabled}
            isLoading={formState.isLoading || formState.isValidating || formState.isSubmitting}
          >
            تایید و ادامه
          </Button>
          <Button
            fullWidth
            onPress={() => router.push('/auth')}
            variant="light"
            color="primary"
            size="lg"
          >
            اصلاح شماره موبایل
          </Button>
        </div>
      </div>

      <div className="w-full fixed -bottom-16 left-0 right-auto">
        <Banner withStar={true} textColor="text-primary" starColor="text-primary" />
      </div>
    </main>
  );
}
