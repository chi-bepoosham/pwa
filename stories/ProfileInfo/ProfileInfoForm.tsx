'use client';

import { UserFormData, userSchema } from '@/app/(app)/profile/info/schema';
import { GenderSelection } from '@/stories/GenderSelection';
import { MinorInput } from '@/stories/MinorInput';
import { MyBodyTypeCard } from '@/stories/MyBodyTypeCard';
import { Uploader } from '@/stories/Uploader';
import { UserType } from '@/types/UserType.type';
import { Button } from '@heroui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

interface ProfileFormProps {
  userInfo: UserType;
}

const ProfileForm = ({ userInfo }: ProfileFormProps) => {
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
      reset({
        first_name: userInfo.first_name || '',
        last_name: userInfo.last_name || '',
        email: userInfo.email || '',
        mobile: userInfo.mobile || '',
        gender: userInfo.gender || 0,
      });
      setValue('gender', userInfo.gender || 0);
    }
  }, [userInfo, reset, setValue]);

  const onSubmit = async (data: UserFormData) => {
    console.log('Validated data:', data);
    // ⚡ API آپدیت پروفایل
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-10 relative z-10 px-8"
    >
      <Uploader size="medium" title="" />

      <div className="w-full mx-auto flex flex-col gap-6">
        <h3 className="font-semibold text-lg">مشخصات شما</h3>

        <MinorInputWrapper
          placeholder="نام"
          error={errors.first_name?.message}
          {...register('first_name')}
        />
        <MinorInputWrapper
          placeholder="نام خانوادگی"
          error={errors.last_name?.message}
          {...register('last_name')}
        />
        <MinorInputWrapper
          placeholder="ایمیل خود را وارد کنید"
          type="email"
          error={errors.email?.message}
          {...register('email')}
        />
        <MinorInputWrapper
          placeholder="شماره موبایل"
          type="tel"
          error={errors.mobile?.message}
          {...register('mobile')}
        />
      </div>

      <GenderSelection value={watch('gender')} onChange={(val) => setValue('gender', val)} />

      <MyBodyTypeCard
        value={userInfo?.body_type?.title ?? undefined}
        image={userInfo?.body_image ?? undefined}
      />

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
  );
};

export default ProfileForm;

const MinorInputWrapper = ({
  error,
  ...props
}: React.ComponentProps<typeof MinorInput> & { error?: string }) => (
  <div>
    <MinorInput {...props} size="lg" />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);
