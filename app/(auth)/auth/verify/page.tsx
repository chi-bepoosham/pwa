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
    <div className="relative flex flex-col justify-between h-full overflow-hidden">

      <div className="p-2">
        <MinorButton
          className="px-1 py-4"
          variant="bordered"
          radius="lg"
          isLoading={false}
          icon={<i className="text-secondary"><ArrowRightIcon size={28} /></i>}
          color="secondary"
        />
      </div>

      <div className="flex flex-col justify-center items-center gap-14 w-full h-full">

        <div className="flex flex-col justify-center items-center gap-5">

          <div className="flex flex-row justify-center items-center gap-1.5">
            <i className="rotate-180">
              <CometStarVector />
            </i>
            <h2 className="text-nowrap">
              کــد تـــایید را وارد کــنید
            </h2>
            <i>
              <CometStarVector />
            </i>
          </div>
          <p>
            کد 5 رقمی به شمارۀ 09388505929 ارسال شد.
          </p>
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
          <button className="text-primary">
            اصلاح شماره موبایل
          </button>
        </div>


      </div>


      <div className="absolute -bottom-24 w-full">
        <Banner
          withStar={true}
          textColor="text-primary"
          starColor="text-primary"
        />
      </div>


    </div>
  );
}
