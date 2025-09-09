'use client';

import { axiosCore } from '@/lib/axios';
import { setCookie } from '@/lib/cookies';
import { useUserStore } from '@/store/UseUserStore';
import { CometStarVector } from '@/stories/Vectors';
import { AxiosResponse } from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import ProfileInfo from './profile-info';
import { RegisterFormData } from './schema';

interface RegisterRequestData {
  first_name: string;
  last_name: string;
  mobile: string;
  avatar?: string;
  gender?: 1 | 2;
  email?: string;
}

export default function Page() {
  const router = useRouter();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [formData, setFormData] = useState<RegisterFormData>({
    first_name: '',
    last_name: '',
    avatar: '',
    gender: 1,
    email: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { phone_number, api_key } = useUserStore((state) => state.userInfo);

  const handleNextStep = async (data: RegisterFormData) => {
    setLoading(true);
    setError(null);

    try {
      // Prepare request data with required fields
      const requestData: RegisterRequestData = {
        first_name: data.first_name,
        last_name: data.last_name,
        mobile: phone_number,
      };

      // Add optional fields except avatar
      if (data.gender) requestData.gender = data.gender as 1 | 2;
      if (data.email) requestData.email = data.email;

      let response: AxiosResponse;

      // If there's an avatar, use FormData
      if (data.avatar) {
        const formData = new FormData();
        // Convert base64 to blob
        const base64Response = await fetch(data.avatar);
        const blob = await base64Response.blob();
        formData.append('avatar', blob, 'avatar.jpg');

        // Add other fields to FormData
        Object.entries(requestData).forEach(([key, value]) => {
          formData.append(key, value);
        });

        response = await axiosCore().post('/user/auth/register', formData, {
          headers: {
            'Api-Key': api_key,
            'Content-Type': 'multipart/form-data',
          },
        });
      } else {
        // No avatar, send JSON
        response = await axiosCore().post('/user/auth/register', requestData, {
          headers: {
            'Api-Key': api_key,
          },
        });
      }

      if (response.status === 200) {
        setFormData(data);
        await setCookie('token', response.data.object.token);
        await setCookie('userInfo', JSON.stringify(response.data.object.user));
        await setCookie('api_key', api_key);

        if (pageNumber === 0) {
          setPageNumber(1);
        } else {
          // Registration complete, redirect to home or dashboard
          router.replace('/personal-image-uploader');
        }
      } else {
        throw new Error(response.data?.message || 'Registration failed');
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleSkip = () => {
    if (!phone_number || !api_key) {
      setError('برای رد کردن این مرحله نیاز به اطلاعات کاربری دارید');
      return;
    }
    if (pageNumber === 0) {
      setPageNumber(1);
    } else {
      // Skip final step, redirect to home or dashboard
      router.replace('/personal-image-uploader');
    }
  };
  useEffect(() => {
    if (!api_key) {
      router.replace('/auth');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [api_key]);

  return (
    <div className="flex flex-col justify-between w-full h-screen gap-10 overflow-x-hidden scrollbar-hide">
      <div className="flex flex-col justify-center items-center p-4">
        <div className="flex flex-row justify-center items-center gap-4">
          <i className="rotate-180">
            <CometStarVector />
          </i>
          <h2 className="text-secondary font-semibold">ثــــبت‌نــــام</h2>
          <i>
            <CometStarVector />
          </i>
        </div>
        <h3 className="text-secondary-300">مـرحـلۀ اول</h3>
      </div>
      <ProfileInfo
        onNext={handleNextStep}
        onSkip={handleSkip}
        loading={loading}
        error={error}
        defaultValues={formData}
        // isDisabled={!api_keys}
      />
    </div>
  );
}
