'use client';
import TextBackground from '@/components/common/text-background';
import { MinorButton } from '@/stories/MinorButton';
import { Uploader } from '@/stories/Uploader';
import { VoiceAssistant } from '@/stories/VoiceAssistant';
import { addToast, Button } from '@heroui/react';
import { AccountName } from '@/stories/AccountName';
import { HintSlider } from '@/stories/HintSlider';
import { useForm } from 'react-hook-form';
import { axiosCoreWithAuth } from '@/lib/axios';
import { useEffect, useState } from 'react';
import { CometStarVector } from '@/stories/Vectors';
import { useGetUser } from '@/api/user';
import { setCookie } from '@/lib/cookies';
import { PersonalImageUploaderData, personalImageUploaderSchema } from './schema';
import { useRouter } from 'next/navigation';

interface PersonalImageProps {
}

const PersonalImage: React.FC<PersonalImageProps> = (props) => {
  const router = useRouter();

  const { setValue, handleSubmit, watch } = useForm<PersonalImageUploaderData>({
    defaultValues: {
      body_image: '',
    },
  });
  const { userInfo , userInfoError } = useGetUser();

  useEffect(() => {
    if(!userInfoError){
      console.log(userInfo);
      
      setCookie('userInfo', userInfo ? JSON.stringify(userInfo) : '');
    }
  }, [userInfo]);

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
          title: "لطفا یک تصویر انتخاب کنید",
          color: "danger",
        })
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
        color: "success",
      })
      router.replace('/');
    } catch (error: any) {
      console.error('Upload error:', error);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-10 py-4">
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
      <div className="flex flex-col items-center gap-4 w-full px-7">
        <Uploader size="x-large" title="تصویر نمایه" onImageUpload={handleFileUpload} />
        <div className="text-center flex gap-2 flex-col text-sm text-nowrap relative">
          <div>
            <AccountName name={userInfo?.first_name}/>
          </div>
          <TextBackground bgColor="#4141F9">
            عکس تمام قد خودت رو با نور مناسب اینجا اضافه کن!
          </TextBackground>
        </div>
      </div>

      <div className="w-full p-4">
        <HintSlider
          slides={[
            { picture: '/static/images/correct_position.jpg', matchRate: 85, isCorrect: true },
            { picture: '/static/images/incorrect_position.jpg', matchRate: 70, isCorrect: false },
            { picture: '/static/images/correct_position.jpg', matchRate: 85, isCorrect: true },
            { picture: '/static/images/incorrect_position.jpg', matchRate: 70, isCorrect: false },
          ]}
        />
      </div>

      <div className="flex flex-col items-center gap-4 w-full">
        <MinorButton
          variant="flat"
          buttonTitle="ورود بـه صفحۀ اصلـی"
          radius="md"
          isLoading={false}
          color="primary"
          onClick={handleSubmit(onSubmit)}
        />
        {/* <Button color="default" variant="light" onClick={onSkip}>
          مرحله قبل{' '}
        </Button> */}
      </div>

      {/* <div className="w-full">
        <VoiceAssistant />
      </div> */}
      {/* {error && <div className="text-red-500 text-center mt-4">{error}</div>} */}
    </>
  );
};

export default PersonalImage;
