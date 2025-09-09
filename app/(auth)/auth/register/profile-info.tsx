'use client';

import { GenderSelection } from '@/stories/GenderSelection';
import { MinorButton } from '@/stories/MinorButton';
import { MinorInput } from '@/stories/MinorInput/MinorInput';
import { Uploader } from '@/stories/Uploader';
import { addToast } from '@heroui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { RegisterFormData, registerFormSchema } from './schema';

interface ProfileInfoProps {
  onNext: (data: RegisterFormData) => void;
  onSkip: () => void;
  loading: boolean;
  error: string | null;
  defaultValues?: Partial<RegisterFormData>;
  isDisabled?: boolean;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({
  onNext,
  isDisabled,
  loading,
  error,
  defaultValues,
}) => {
  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      first_name: '',
      last_name: '',
      avatar: '',
      gender: 1,
      email: '',
      ...defaultValues,
    },
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
  };

  const formValues = watch();

  useEffect(() => {
    if (error) {
      addToast({ title: error, color: 'danger' });
    }
  }, [error]);

  if (isDisabled) return null;

  return (
    <div className="h-full flex flex-col justify-start relative">
      <div className="flex flex-col w-full justify-center gap-8 overflow-x-hidden scrollbar-hide">
        <Uploader size="medium" title="تصویر نمایه" onImageUpload={handleFileUpload} />
        <div className="flex flex-col justify-center gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <MinorInput
                label="مشخصات شما"
                isMultieline={false}
                type="fullName"
                placeholder="نام"
                size="lg"
                value={formValues.first_name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setValue('first_name', e.target.value)
                }
              />
              {errors.first_name && (
                <span className="text-red-500 text-xs px-5">{errors.first_name.message}</span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <MinorInput
                isMultieline={false}
                type="fullName"
                placeholder="نام‌خانوادگی"
                size="lg"
                value={formValues.last_name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setValue('last_name', e.target.value)
                }
              />
              {errors.last_name && (
                <span className="text-red-500 text-xs px-5">{errors.last_name.message}</span>
              )}
            </div>
          </div>
          <div className="px-5">
            <GenderSelection
              value={formValues.gender || 1}
              onChange={(value) => setValue('gender', value)}
            />
          </div>
          {errors.gender && <span className="text-red-500 text-sm">{errors.gender.message}</span>}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-5 w-full p-6 md:absolute fixed bottom-0  shadow-[0px_-1px_10px_0px_#f1f1f1]">
        <MinorButton
          className="text-large w-full"
          variant="flat"
          buttonTitle="مـــرحلۀ بــــعدی"
          radius="md"
          size="lg"
          isLoading={loading}
          color="primary"
          onClick={handleSubmit(onSubmit)}
        />
        {/* <Button
          color="default"
          variant="light"
          isDisabled={true}
          // onClick={onSkip}
        >
          بعــدا تکـــمیل میکنـــم!
        </Button> */}
        {/* {error && <div className="text-red-500 text-center mt-4">{error}</div>} */}
      </div>
    </div>
  );
};

export default ProfileInfo;
