'use client';

import { useGetUser } from '@/api/user';
import { GenderSelection } from '@/stories/GenderSelection';
import { ArrowRightIcon, LogoutIcon } from '@/stories/Icons';
import { MinorInput } from '@/stories/MinorInput';
import { MyBodyTypeCard } from '@/stories/MyBodyTypeCard';
import { Uploader } from '@/stories/Uploader';
import { UserType } from '@/types/UserType.type';
import { Button } from '@heroui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Header from '../../components/Header';
import { UserFormData, userSchema } from './schema';
import { LogoutButton } from '@/stories/LogoutButton';

export default function Page() {
  const { userInfo, userInfoLoading, userInfoError } = useGetUser(3000);
  const router = useRouter();

  const sanitizeUserForForm = (user: UserType): UserFormData => ({
    first_name: user.first_name || '',
    last_name: user.last_name || '',
    email: user.email || '',
    mobile: user.mobile || '',
    gender: user.gender || 0,
  });

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      mobile: '',
      gender: 0,
    },
  });

  useEffect(() => {
    if (userInfo) {
      const sanitized = sanitizeUserForForm(userInfo);
      reset(sanitized);
      setValue('gender', sanitized.gender);
    }
  }, [userInfo, reset, setValue]);

  const onSubmit = async (data: UserFormData) => {
    console.log('Validated data:', data);
    // await updateUser(data);
  };

  // حالت loading
  if (userInfoLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>در حال بارگذاری اطلاعات کاربری...</p>
      </div>
    );
  }

  // حالت error
  if (userInfoError) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500">خطا در دریافت اطلاعات کاربری. لطفاً دوباره تلاش کنید.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full overflow-x-hidden scrollbar-hide relative min-h-screen">
      <Header
        variant="centered"
        title="اطلاعات حساب کاربری"
        startContent={
          <Button
            variant="bordered"
            color="secondary"
            size="lg"
            isIconOnly
            className="h-14 w-14 rounded-2xl shrink-0"
            onPress={() => router.back()}
          >
            <ArrowRightIcon size={36} />
          </Button>
        }
        endContent={<LogoutButton />}
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-10 relative z-10  px-8"
      >
        <Uploader size="medium" title="" />

        <div className="w-full mx-auto flex flex-col gap-6">
          <h3 className="font-semibold text-lg">مشخصات شما</h3>
          {/* نام */}
          <div>
            <MinorInput
              //  label="نام"
              placeholder="نام"
              size="lg"
              {...register('first_name')}
            />
            {errors.first_name && (
              <p className="text-red-500 text-sm mt-1">{errors.first_name.message}</p>
            )}
          </div>

          {/* نام خانوادگی */}
          <div>
            <MinorInput
              // label="نام خانوادگی"
              placeholder="نام خانوادگی"
              size="lg"
              {...register('last_name')}
            />
            {errors.last_name && (
              <p className="text-red-500 text-sm mt-1">{errors.last_name.message}</p>
            )}
          </div>

          {/* ایمیل */}
          <div>
            <MinorInput
              // label="ایمیل"
              placeholder="ایمیل خود را وارد کنید"
              size="lg"
              type="email"
              {...register('email')}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* موبایل */}
          <div>
            <MinorInput
              // label="موبایل"
              placeholder="شماره موبایل"
              size="lg"
              type="tel"
              {...register('mobile')}
            />
            {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile.message}</p>}
          </div>
        </div>

        {/* انتخاب جنسیت */}
        <GenderSelection value={watch('gender')} onChange={(val) => setValue('gender', val)} />

        {/* فرم بدن */}
        <MyBodyTypeCard value={userInfo?.body_type?.title} image={userInfo?.body_image} />
        {/* دکمه ثبت */}
        <div className="w-full flex justify-center mb-16">
          <Button
            type="submit"
            size="lg"
            variant="shadow"
            className="bg-primary rounded-3xl text-white h-16 px-8"
            isLoading={isSubmitting}
          >
            ذخیره تغییرات جدید
          </Button>
        </div>
      </form>
    </div>
  );
}
