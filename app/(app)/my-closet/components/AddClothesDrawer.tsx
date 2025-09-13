import { axiosCoreWithAuth } from '@/lib/axios';
import { Category } from '@/stories/Category';
import { MinorButton } from '@/stories/MinorButton';
import { MinorInput } from '@/stories/MinorInput';
import { Uploader } from '@/stories/Uploader';
import { CometStarVector } from '@/stories/Vectors';
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  addToast,
} from '@heroui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';
import { AddClothesFormData, addClothesFormSchema } from '../schema';

interface AddClothesDrawerProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onSuccess?: () => void;
}

export const AddClothesDrawer: React.FC<AddClothesDrawerProps> = (props) => {
  const { isOpen, onClose } = props;

  const router = useRouter();

  const {
    handleSubmit,
    setValue,
    control,
    reset,
    formState: { errors, isLoading, isSubmitting, isValidating },
  } = useForm<AddClothesFormData>({
    resolver: zodResolver(addClothesFormSchema),
    defaultValues: {
      title: '',
      type: 'upper',
      image: '',
    },
  });

  const handleFileUpload = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setValue('image', reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const onSubmit = async (data: AddClothesFormData) => {
    try {
      const formData = new FormData();
      // Convert base64 to blob
      const base64Response = await fetch(data.image);
      const blob = await base64Response.blob();
      formData.append('image', blob, 'clothes.jpg');

      const req_data = {
        title: data.title,
        type: data.type,
      };
      // Add other fields to FormData
      Object.entries(req_data).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const axios = axiosCoreWithAuth();
      const response = await axios.post('/user/clothes/upload/image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response);
      addToast({
        title: 'لباس با موفقیت ثبت شد',
        color: 'success',
      });
      reset();
      setValue('image', '');
      router.push('/my-closet');

      if (props.onSuccess) props.onSuccess();
    } catch (error) {
      console.log(error);
      addToast({
        title: 'خطایی در ثبت لباس رخ داده است',
        color: 'danger',
      });
    } finally {
      onClose();
    }
  };

  const categoryItems = [
    { key: 'upper', title: 'بالا پوش' },
    { key: 'lower', title: 'پایین پوش' },
  ];

  return (
    <Drawer
      isOpen={isOpen}
      placement="bottom"
      size="5xl"
      className="w-fit max-w-full left-auto right-auto flex flex-col justify-center items-center h-[80vh] overflow-y-auto overflow-x-hidden"
      onClose={onClose}
    >
      <DrawerContent>
        <DrawerHeader className="flex flex-row gap-2 justify-center items-center py-5 sticky top-0 z-10 bg-white truncate w-full">
          <i className="rotate-180">
            <CometStarVector />
          </i>
          <span className="text-secondary font-bold">اضافه کردن لباس به کمد</span>
          <i className="">
            <CometStarVector />
          </i>
        </DrawerHeader>
        <DrawerBody className="flex flex-col justify-start h-full  w-full items-center gap-10 overflow-y-auto">
          <div className="w-full flex flex-col gap-5 justify-center items-center pt-5">
            <span className="text-secondary-300">تصویر لباس خودت رو اینجا اضافه کن!</span>
            <Uploader
              size="large"
              title="تصویر لباس شما"
              onImageUpload={handleFileUpload}
              isDisabled={isSubmitting || isValidating || isLoading}
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <span className="text-foreground">نام لباس خودتو اینجا بنویس.</span>
            <Controller
              name="title"
              control={control}
              render={({ field }) => {
                return (
                  <MinorInput
                    isMultieline={false}
                    placeholder="مثلا دورس اسپرت"
                    size="lg"
                    value={field.value}
                    onChange={field.onChange}
                  />
                );
              }}
            />
            {errors.title && <span className="text-danger text-xs">{errors.title?.message}</span>}
          </div>
          <div className="w-full flex flex-col gap-2">
            <span className="text-foreground">لباست جزو کدوم دسته‌بندی هست؟</span>
            <Controller
              name="type"
              control={control}
              render={({ field }) => {
                return (
                  <Category
                    variant="primary"
                    items={categoryItems}
                    value={field.value}
                    onChange={field.onChange}
                    className="flex justify-center items-center"
                  />
                );
              }}
            />
            {errors.type && <span className="text-danger text-xs">{errors.type?.message}</span>}
          </div>
        </DrawerBody>
        <DrawerFooter className="sticky bottom-0 z-10 w-full bg-white justify-center">
          <MinorButton
            variant="solid"
            color="primary"
            buttonTitle="افزودن لباس به کمدم"
            className="max-w-80 w-full px-4 py-6"
            onClick={handleSubmit(onSubmit)}
            isLoading={isSubmitting || isValidating || isLoading}
            isDisable={isSubmitting || isValidating || isLoading}
          />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
