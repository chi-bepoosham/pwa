'use client';

import { useGetUser } from '@/api/user';
import { setCookie } from '@/lib/cookies';
import { useEffect, useState } from 'react';
import PendingBodyType from './pending';
import ConfirmedBodyType from './confirmed';
import ErrorBodyType from './error';
import LoadingBodyType from './loading';
import { useRouter } from 'next/navigation';
import { PersonalImageUploaderData } from './schema';
import { useForm } from 'react-hook-form';
import { addToast, Button } from '@heroui/react';
import { axiosCoreWithAuth } from '@/lib/axios';
import { CometStarVector } from '@/stories/Vectors';
import { Uploader } from '@/stories/Uploader';
import { AccountName } from '@/stories/AccountName';
import TextBackground from '@/components/common/text-background';
import { HintSlider } from '@/stories/HintSlider';

const PersonalImage = () => {
  const { userInfo, userInfoError } = useGetUser(2000);

  useEffect(() => {
    // if (userInfoError) {
    //   console.log('here', userInfo);
    // }
    if (!userInfoError) {
      // console.log(userInfo);
      setCookie('userInfo', userInfo ? JSON.stringify(userInfo) : '');
    }
  }, [userInfo]);

  const router = useRouter();

  const { setValue, handleSubmit } = useForm<PersonalImageUploaderData>({
    defaultValues: {
      body_image: '',
    },
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileUpload = (file: File) => {
    setSelectedFile(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setValue('body_image', reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const onSubmit = async () => {
    try {
      if (!selectedFile) {
        addToast({
          title: 'لطفا یک تصویر انتخاب کنید',
          color: 'danger',
        });
        return;
      }
      const formData = new FormData();
      formData.append('image', selectedFile);
      const axios = axiosCoreWithAuth();
      await axios.post('/user/body_type/upload/image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      addToast({
        title: 'تصویر با موفقیت آپلود شد',
        color: 'success',
      });
      router.replace('/');
    } catch (error) {
      console.error('Upload error:', error);
    }
  };
  let status;
  if (userInfo) {
    status = (userInfo as unknown as { process_body_image_status: number })
      .process_body_image_status;
  }

  return (
    <main className="flex flex-col min-h-full flex-1">
      <div className="flex flex-col gap-10 py-4 sticky top-0 z-20 bg-white">
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
          <h3 className="text-secondary-300">مـرحـلۀ دوم</h3>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 w-full px-7 flex-1">
        <Uploader size="x-large" title="تصویر نمایه" onImageUpload={handleFileUpload} />
        <div className="text-center flex gap-2 flex-col text-sm text-nowrap relative">
          <div>
            <AccountName name={userInfo ? (userInfo as any).first_name : ''} />
          </div>
          <TextBackground bgColor="#4141F9">
            عکس تمام قد خودت رو با نور مناسب اینجا اضافه کن!
          </TextBackground>
        </div>
      </div>
      <div className="w-full p-4">
        <HintSlider
          slides={[
            { picture: '/static/images/correct_position_1.jpg', matchRate: 85, isCorrect: true },
            { picture: '/static/images/incorrect_position_1.jpg', matchRate: 70, isCorrect: false },
            { picture: '/static/images/correct_position_2.jpg', matchRate: 85, isCorrect: true },
            { picture: '/static/images/incorrect_position_2.jpg', matchRate: 70, isCorrect: false },
          ]}
        />
      </div>
      <div className="flex flex-col items-center gap-4 w-full py-4 sticky bottom-0 z-20 bg-white">
        <Button
          variant="shadow"
          color="primary"
          size="lg"
          className="h-14"
          onPress={() => handleSubmit(onSubmit)()}
        >
          ورود بـه صفحۀ اصلـی
        </Button>
        {/* <Button
          variant="light"
          color="primary"
          size="lg"
          className="h-8"
          onPress={() => router.replace('/auth/register')}
        >
          مـرحـلۀ قبل
        </Button> */}
      </div>
      {status == 3 && <ErrorBodyType userInfo={userInfo} />}
      {status == 2 && <ConfirmedBodyType userInfo={userInfo} />}
      {status == 1 && <PendingBodyType userInfo={userInfo} />}
      {![null, 1, 2, 3].includes(status) && <LoadingBodyType userInfo={userInfo} />}
    </main>
  );
};

export default PersonalImage;
