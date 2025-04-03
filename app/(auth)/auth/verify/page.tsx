'use client';
import { MinorButton } from '@/stories/MinorButton';
import React from 'react';
import { CometStarVector } from '@/stories/Vectors';
import { ArrowRightIcon } from '@/stories/Icons';
import { Banner } from '@/stories/Banner';
import { TokenInput } from '@/stories/LoginByPhoneOtpForm/TokenInput';
import { useForm } from 'react-hook-form';
import { LoginByPhoneOtpFormType } from '@/types/LoginByPhoneOtpForm.type';

export default function Page() {
  const {
    control,
    handleSubmit,
  } = useForm<LoginByPhoneOtpFormType>
  ({
    defaultValues: {
      phone: '',
      hasTokenSent: true,
      token: '',
    },
  });

  const onSubmit = (data: LoginByPhoneOtpFormType) => {
    console.log('Submitted Data:', data);
  };

  return (
    <div className="bg-white w-full h-screen flex flex-col justify-between items-center overflow-hidden">
      <div className="w-full h-full">
        <MinorButton
          size="sm"
          variant="bordered"
          radius="md"
          isLoading={false}
          icon={<i className="text-secondary"><ArrowRightIcon size={28} /></i>}
          color="secondary"
        />
      </div>
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="flex flex-row justify-center items-center gap-4">
          <i className="text-secondary-300">
            <CometStarVector />
          </i>
          <h2 className="text-secondary font-semibold text-nowrap">
            کــد تـــایید را وارد کــنید
          </h2>
          <i className="text-secondary-300 rotate-180">
            <CometStarVector />
          </i>
        </div>
        <h3>
          کد 5 رقمی به شمارۀ 09388505929 ارسال شد.
        </h3>
      </div>
      <div className="h-full">
        <TokenInput control={control} done={handleSubmit(onSubmit)} />
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center gap-3">
        <MinorButton
          size="lg"
          variant="flat"
          buttonTitle="تایید و ادامه"
          radius="md"
          isLoading={false}
          color="secondary"
        />
        <h4 className="text-primary">
          اصلاح شماره موبایل
        </h4>
      </div>
      <div className="w-full h-full text-primary">
        <Banner
          withStar={true}
          textColor="text-primary"
          starColor="text-primary"
        />
      </div>
    </div>
  );
}
