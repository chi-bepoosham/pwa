'use client';

import { UserFormData, userSchema } from '@/app/(app)/profile/info/schema';
import { useUserStore } from '@/store/UseUserStore';
import { GenderSelection } from '@/stories/GenderSelection';
import { MinorInput } from '@/stories/MinorInput';
import { MyBodyTypeCard } from '@/stories/MyBodyTypeCard';
import { Uploader } from '@/stories/Uploader';
import { UserType } from '@/types/UserType.type';
import { Button } from '@heroui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { getCookie } from '../../lib/cookies';
import BodyTypeImageModal from '../BodyTypeImageModal/BodyTypeImageModal';
interface ProfileFormProps {
  userInfo: UserType;
}

const ProfileForm = ({ userInfo }: ProfileFormProps) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { api_key, setUserInfo } = useUserStore((state) => ({
    api_key: state.userInfo.api_key,
    setUserInfo: state.setUserInfo,
  }));
  console.log('here', api_key);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<UserFormData & { avatar?: File | string }>({
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

  const onSubmit = async (data: UserFormData & { avatar?: File | string }) => {
    setLoading(true);
    setError(null);

    try {
      let response;

      // Prepare FormData if avatar exists
      if (data.avatar) {
        const formData = new FormData();

        if (data.avatar instanceof File) {
          formData.append('avatar', data.avatar);
        } else if (typeof data.avatar === 'string') {
          const blob = await (await fetch(data.avatar)).blob();
          formData.append('avatar', blob, 'avatar.jpg');
        }

        // Add other fields
        Object.entries(data).forEach(([key, value]) => {
          if (key !== 'avatar' && value !== undefined) {
            formData.append(key, String(value));
          }
        });

        response = await axios.post(
          'https://core.chibepoosham.app/api/v1/user/update/profile',
          formData,
          {
            headers: {
              'Api-Key': api_key,
              'Content-Type': 'multipart/form-data',
            },
          }
        );
      } else {
        // No avatar, send JSON
        response = await axios.post(
          'https://core.chibepoosham.app/api/v1/user/update/profile',
          data,
          {
            headers: {
              'Api-Key': api_key,
            },
          }
        );
      }

      console.log('Profile updated', response.data);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchApiKey = async () => {
      if (!api_key || api_key === '') {
        console.log('1');
        const cookieApiKey = await getCookie('api_key');
        if (cookieApiKey) {
          console.log(api_key);
          setUserInfo('api_key', cookieApiKey);
        }
      }
    };
    fetchApiKey();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [api_key]);

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-10 relative z-10 px-8"
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
        <div className="cursor-pointer" onClick={() => setModalOpen(true)}>
          <MyBodyTypeCard
            value={userInfo?.body_type?.title ?? undefined}
            image={userInfo?.body_image ?? undefined}
          />
        </div>

        {error && <p className="text-red-500 mt-2">{error}</p>}

        <div className="w-full flex justify-center mb-16">
          <Button
            type="submit"
            size="lg"
            variant="shadow"
            className="bg-primary rounded-3xl text-white h-16 px-8"
            isLoading={loading || isSubmitting}
          >
            ذخیره تغییرات جدید
          </Button>
        </div>
      </form>

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
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);
