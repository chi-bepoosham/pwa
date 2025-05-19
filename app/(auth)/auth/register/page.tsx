"use client"
import React, { useState } from 'react';
import { CometStarVector } from '@/stories/Vectors';
import ProfileInfo from './profile-info';
import PersonalImage from './personal-image';
import { useUserStore } from '@/store/UseUserStore';
import { axiosCore } from '@/lib/axios';
import { AxiosResponse } from 'axios';
import { useRouter } from 'next/navigation';
import { RegisterFormData } from './schema';

interface RegisterRequestData {
  first_name: string;
  last_name: string;
  mobile: string;
  avatar?: string;
  gender?: '1' | '2';
  email?: string;
}

export default function Page() {
  const router = useRouter();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [formData, setFormData] = useState<RegisterFormData>({
    first_name: '',
    last_name: '',
    avatar: '',
    gender: undefined,
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
        mobile: phone_number
      };

      // Add optional fields except avatar
      if (data.gender) requestData.gender = data.gender;
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
            'Content-Type': 'multipart/form-data'
          }
        });
      } else {
        // No avatar, send JSON
        response = await axiosCore().post('/user/auth/register', requestData, {
          headers: {
            'Api-Key': api_key
          }
        });
      }

      if (response.status === 200) {
        setFormData(data);
        document.cookie = `token=${response.data.object.token}; path=/; max-age=2592000; SameSite=Strict`;
        if (pageNumber === 0) {
          setPageNumber(1);
        } else {
          // Registration complete, redirect to home or dashboard
          router.push('/home');
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
      router.push('/home');
    }
  };

  return (
    <div className="flex flex-col justify-between w-full h-screen gap-12 bg-white overflow-x-hidden overflow-y-auto">
      <div className="flex flex-col gap-10">
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
          <h3 className="text-secondary-300">مـرحـلۀ {pageNumber === 0 ? "اول" : "دوم"}</h3>
        </div>
      </div>
      {pageNumber === 0 ? (
        <ProfileInfo
          onNext={handleNextStep}
          onSkip={handleSkip}
          loading={loading}
          error={error}
          defaultValues={formData}
        />
      ) : (
        <PersonalImage
          onNext={handleNextStep}
          onSkip={handleSkip}
          loading={loading}
          error={error}
          defaultValues={formData}
        />
      )}
    </div>
  );
}
