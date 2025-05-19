import TextBackground from '@/components/common/text-background';
import { MinorButton } from '@/stories/MinorButton';
import { Uploader } from '@/stories/Uploader';
import { VoiceAssistant } from '@/stories/VoiceAssistant';
import { AccountName } from '@/stories/AccountName';
import { HintSlider } from '@/stories/HintSlider';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterFormData, registerFormSchema } from './schema';
import { axiosCoreWithAuth } from '@/lib/axios';
import { toast } from 'react-toastify';
import { useState } from 'react';

interface PersonalImageProps {
  onNext: (data: RegisterFormData) => void;
  onSkip: () => void;
  loading: boolean;
  error: string | null;
  defaultValues?: RegisterFormData;
}

const PersonalImage: React.FC<PersonalImageProps> = ({ onNext, loading, error, defaultValues }) => {
  const {
    setValue,
    handleSubmit,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
    defaultValues
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileUpload = (file: File) => {
    setSelectedFile(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setValue('avatar', reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const onSubmit = async (data: RegisterFormData) => {
    try {
      if (!selectedFile) {
        toast.error('لطفا یک تصویر انتخاب کنید');
        return;
      }

      const formData = new FormData();
      formData.append('image', selectedFile);

      const axios = axiosCoreWithAuth();
      await axios.post('/user/body_type/upload/image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      toast.success('تصویر با موفقیت آپلود شد');
      onNext(data);
      
    } catch (error: unknown) {
      console.error('Upload error:', error);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center gap-4 w-full px-7">
        <Uploader 
          size="x-large" 
          title="تصویر نمایه"
          onImageUpload={handleFileUpload}
        />
        <div className="text-center flex gap-2 flex-col text-sm text-nowrap relative">
          <div>
            <AccountName />
          </div>
          <TextBackground bgColor="#4141F9">
            عکس تمام قد خودت رو با نور مناسب اینجا اضافه کن!
          </TextBackground>
        </div>
      </div>

      <div className="w-full p-4">
        <HintSlider slides={[
          { picture: '/banner.png', matchRate: 85, isCorrect: true },
          { picture: '/img_5.png', matchRate: 70, isCorrect: false },
          { picture: '/banner.png', matchRate: 90, isCorrect: true },
          { picture: '/img_5.png', matchRate: 35, isCorrect: false },
          { picture: '/banner.png', matchRate: 60, isCorrect: true },
          { picture: '/img_5.png', matchRate: 90, isCorrect: false },
        ]}
        />
      </div>

      <div className="flex flex-col items-center gap-4 w-full">
        <MinorButton
          variant="flat"
          buttonTitle="ورود بـه صفحۀ اصلـی"
          radius="md"
          isLoading={loading}
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
      {error && <div className="text-red-500 text-center mt-4">{error}</div>}
    </>
  );
};

export default PersonalImage;
