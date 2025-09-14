'use client';

import { UserFormData, userSchema } from '@/app/(app)/profile/info/schema';
import { axiosCoreWithAuth } from '@/lib/axios';
import { GenderSelection } from '@/stories/GenderSelection';
import { MinorInput } from '@/stories/MinorInput';
import { MyBodyTypeCard } from '@/stories/MyBodyTypeCard';
import { Uploader } from '@/stories/Uploader';
import { UserType } from '@/types/UserType.type';
import { addToast, Button } from '@heroui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { AxiosError } from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import BodyTypeImageModal from '../BodyTypeImageModal/BodyTypeImageModal';

interface ProfileFormProps {
  userInfo: UserType;
}

const ProfileForm = ({ userInfo }: ProfileFormProps) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<UserFormData & { avatar?: File | string }>({
    resolver: zodResolver(userSchema),
    defaultValues: userInfo
      ? {
          first_name: userInfo.first_name || '',
          last_name: userInfo.last_name || '',
          email: userInfo.email || '',
          mobile: userInfo.mobile || '',
          gender: userInfo.gender || 0,
        }
      : {},
  });

  const onSubmit = async (data: UserFormData & { avatar?: File | string }) => {
    setLoading(true);

    try {
      const axios = axiosCoreWithAuth();
      if (data.avatar) {
        const formData = new FormData();

        if (data.avatar instanceof File) {
          formData.append('avatar', data.avatar);
        } else if (typeof data.avatar === 'string') {
          const blob = await (await fetch(data.avatar)).blob();
          formData.append('avatar', blob, 'avatar.jpg');
        }

        Object.entries(data).forEach(([key, value]) => {
          if (key !== 'avatar' && value !== undefined) {
            formData.append(key, String(value));
          }
        });
        await axios.post('https://core.chibepoosham.app/api/v1/user/update/profile', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      } else {
        await axios.post('https://core.chibepoosham.app/api/v1/user/update/profile', data);
      }
      addToast({
        title: 'پروفایل با موفقیت به‌روزرسانی شد',
        color: 'success',
      });
    } catch (err) {
      const message = err instanceof AxiosError ? err.message : 'خطای ناشناخته‌ای رخ داد';
      addToast({
        title: 'خطا در ذخیره تغییرات',
        description: message,
        color: 'danger',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {!userInfo ? null : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-10 relative z-10 px-4"
        >
          <Uploader
            size="medium"
            title=""
            onImageUpload={(file) => setValue('avatar', file)}
            initialImage={
              userInfo?.avatar ? 'https://core.chibepoosham.app/' + userInfo.avatar : null
            }
          />

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
              error={errors.email?.message}
              {...register('email')}
            />
            <MinorInputWrapper
              placeholder="شماره موبایل"
              type="phone"
              error={errors.mobile?.message}
              {...register('mobile')}
            />
          </div>

          <GenderSelection value={watch('gender')} />
          <div className="cursor-pointer" onClick={() => setModalOpen(true)}>
            <MyBodyTypeCard
              value={userInfo?.body_type?.title ?? undefined}
              image={userInfo?.body_image ?? undefined}
            />
          </div>

          {/* {error && <p className="text-/red-500 mt-2 px-4">{error}</p>} */}

          <div className="w-full flex justify-center mb-16">
            <Button
              type="submit"
              size="lg"
              variant="shadow"
              className="bg-primary rounded-2xl text-white h-16 px-12"
              isLoading={loading || isSubmitting}
            >
              ذخیره تغییرات جدید
            </Button>
          </div>
        </form>
      )}
      <BodyTypeImageModal
        userInfo={userInfo}
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
};

export default ProfileForm;

const MinorInputWrapper = ({
  error,
  ...props
}: React.ComponentProps<typeof MinorInput> & { error?: string }) => (
  <div>
    <MinorInput {...props} size="lg" />
    {error && <p className="text-red-500 text-xs mt-1 px-5">{error}</p>}
  </div>
);
