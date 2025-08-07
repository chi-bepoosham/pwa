"use client";
import { Button } from '@heroui/button';
import { GenderSelection } from '@/stories/GenderSelection';
import { MinorButton } from '@/stories/MinorButton';
import { MinorInput } from '@/stories/MinorInput/MinorInput';
import { Uploader } from '@/stories/Uploader';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterFormData, registerFormSchema } from './schema';
import router from 'next/router';

interface ProfileInfoProps {
  onNext: (data: RegisterFormData) => void;
  onSkip: () => void;
  loading: boolean;
  error: string | null;
  defaultValues?: Partial<RegisterFormData>;
  isDisabled?: boolean;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({ onNext, isDisabled, loading, error, defaultValues }) => {
  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors }
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      full_name: '',
      avatar: '',
      gender: undefined,
      email: '',
      ...defaultValues
    }
  });

  const handleFileUpload = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setValue('avatar', reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const onSubmit = (data: RegisterFormData) => {
    onNext(data); 
    router.push('/auth/x'); 
  };

  const formValues = watch();

  if (isDisabled) return null

  return (
    <>
    <div className='flex flex-col w-full justify-center gap-20 overflow-x-hidden scrollbar-hide py-16'>
        <Uploader 
          size="medium" 
          title="تصویر نمایه" 
          onImageUpload={handleFileUpload}
        />
            <div className='flex flex-col justify-center gap-8'>
              <MinorInput
                label='مشخصات شما'
                isMultieline={false}
                type="fullName"
                placeholder="نام و نام‌خانوادگی"
                size="lg"
                value={formValues.full_name}
                onChange={(e) => setValue('full_name', e.target.value)}
              />
              {errors.full_name && (
                <span className="text-red-500 text-sm mt-5 px-5">{errors.full_name.message}</span>
              )}
              <GenderSelection
                value={formValues.gender || ''}
                onChange={(value) => setValue('gender', value as '1' | '2')}
              />
              {errors.gender && (
                <span className="text-red-500 text-sm">{errors.gender.message}</span>
              )}
            </div>
        </div>
        <div className='flex flex-col justify-center gap-5 w-full max-w-80 mx-auto'>
          <MinorButton
            className="text-large"
            variant="flat"
            buttonTitle="مـــرحلۀ بــــعدی"
            radius="md"
            isLoading={loading}
            color="primary"
            onClick={handleSubmit(onSubmit)}
          />
          <Button 
          color="default" 
          variant="light"
          isDisabled={true} 
          // onClick={onSkip}
          >
            بعــدا تکـــمیل میکنـــم!
          </Button>
        {error && <div className="text-red-500 text-center mt-4">{error}</div>}
      </div>
      </>
  );
};

export default ProfileInfo;
