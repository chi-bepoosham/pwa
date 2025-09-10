'use client';

import { useGetUser } from '@/api/user';
import TextBackground from '@/components/common/text-background';
import { axiosCoreWithAuth } from '@/lib/axios';
import { setCookie } from '@/lib/cookies';
import { AccountName } from '@/stories/AccountName';
import { HintSlider } from '@/stories/HintSlider';
import { MinorButton } from '@/stories/MinorButton';
import { Uploader } from '@/stories/Uploader';
import { CometStarVector } from '@/stories/Vectors';
import { addToast, ScrollShadow } from '@heroui/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import ConfirmedBodyType from './confirmed';
import ErrorBodyType from './error';
import LoadingBodyType from './loading';
import PendingBodyType from './pending';
import { PersonalImageUploaderData } from './schema';

const PersonalImage = () => {
  const { userInfo, userInfoError } = useGetUser(2000);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!userInfoError) {
      setCookie('userInfo', userInfo ? JSON.stringify(userInfo) : '');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      setIsLoading(true);
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
    } finally {
      setIsLoading(false);
    }
  };
  let status;
  if (userInfo) {
    status = (userInfo as unknown as { process_body_image_status: number })
      .process_body_image_status;
  }

  return (
    <main className="flex flex-col w-full h-screen gap-4 overflow-x-hidden scrollbar-hide">
      <div className="flex flex-col gap-10 p-4 sticky top-0 z-20 bg-white">
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
      <ScrollShadow
        hideScrollBar
        className="flex-1 overflow-y-auto w-full overflow-x-hidden pb-36 bg-white"
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-start gap-4 w-full px-8">
            <Uploader
              size="x-large"
              title="تصویر نمایه"
              onImageUpload={handleFileUpload}
              isDisabled={!selectedFile || isLoading}
            />
            <div className="text-center flex gap-2 flex-col text-sm text-nowrap relative">
              <div>
                <AccountName name={userInfo ? userInfo.first_name : ''} />
              </div>
              <TextBackground bgColor="#4141bf">
                عکس تمام قد خودت رو با نور مناسب اینجا اضافه کن!
              </TextBackground>
            </div>
          </div>
          <div className="w-full">
            <HintSlider
              slides={[
                {
                  picture: '/static/images/correct_position_1.jpg',
                  matchRate: 85,
                  isCorrect: true,
                },
                {
                  picture: '/static/images/incorrect_position_1.jpg',
                  matchRate: 70,
                  isCorrect: false,
                },
                {
                  picture: '/static/images/correct_position_2.jpg',
                  matchRate: 85,
                  isCorrect: true,
                },
                {
                  picture: '/static/images/incorrect_position_2.jpg',
                  matchRate: 70,
                  isCorrect: false,
                },
              ]}
            />
          </div>
        </div>
      </ScrollShadow>
      <div className="flex flex-col items-center gap-4 w-full p-6 md:absolute fixed  bottom-0 z-20 bg-white shadow-[0px_-1px_10px_0px_#f1f1f1]">
        <MinorButton
          variant="solid"
          buttonTitle="ورود بـه صفحۀ اصلـی"
          color="primary"
          size="lg"
          radius="md"
          className="w-full"
          onClick={handleSubmit(onSubmit)}
          isDisable={!selectedFile || isLoading}
          isLoading={isLoading}
        />

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
      {status == 1 && <PendingBodyType />}
      {![null, 1, 2, 3].includes(status ?? null) && <LoadingBodyType userInfo={userInfo} />}
    </main>
  );
};

export default PersonalImage;
