import { GenderSelection } from '@/stories/GenderSelection';
import { MinorButton } from '@/stories/MinorButton';
import { MinorInput } from '@/stories/MinorInput';
import { Uploader } from '@/stories/Uploader';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterFormData, registerFormSchema } from './schema';

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
      first_name: '',
      last_name: '',
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
  };

  const formValues = watch();

  if (isDisabled) return null

  return (
    <>
      <div className="flex flex-col items-center gap-10 w-full p-6">
        <Uploader 
          size="medium" 
          title="تصویر نمایه" 
          onImageUpload={handleFileUpload}
        />
        <div className="flex flex-col gap-4 w-full">
          <h2 className="text-secondary font-semibold">مشخصات شما</h2>
          <div className="flex flex-col gap-1 w-full">
            <MinorInput
              type="fullName"
              placeholder="نام"
              size="lg"
              value={formValues.first_name}
              onChange={(e) => setValue('first_name', e.target.value)}
            />
            {errors.first_name && (
              <span className="text-red-500 text-sm">{errors.first_name.message}</span>
            )}
          </div>
          <div className="flex flex-col gap-1 w-full">
            <MinorInput
              type="fullName"
              placeholder="نام خانوادگی"
              size="lg"
              value={formValues.last_name}
              onChange={(e) => setValue('last_name', e.target.value)}
            />
            {errors.last_name && (
              <span className="text-red-500 text-sm">{errors.last_name.message}</span>
            )}
          </div>
          {/* <MinorInput
            type="email"
            placeholder="ایمیل (اختیاری)"
            value={formValues.email}
            onChange={(e) => setValue('email', e.target.value)}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )} */}
          <div className="flex flex-col gap-1 w-full">
            <GenderSelection
              value={formValues.gender || ''}
              onChange={(value) => setValue('gender', value as '1' | '2')}
            />
            {errors.gender && (
              <span className="text-red-500 text-sm">{errors.gender.message}</span>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center py-4 gap-4 w-full">
        <MinorButton
          className="w-full max-w-64 text-large"
          variant="flat"
          buttonTitle="مـــرحلۀ بــــعدی"
          radius="md"
          isLoading={loading}
          color="primary"
          onClick={handleSubmit(onSubmit)}
        />
        {/* <Button color="default" variant="light" onClick={onSkip}>
          بعــدا تکـــمیل میکنـــم!
        </Button> */}
      </div>

      {/* <div className="w-full">
        <VoiceAssistant />
      </div> */}
      {error && <div className="text-red-500 text-center mt-4">{error}</div>}
    </>
  );
};

export default ProfileInfo;
