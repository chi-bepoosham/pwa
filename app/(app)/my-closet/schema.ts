import { title } from 'process';
import { z } from 'zod';

export const addClothesFormSchema = z.object({
  title: z.string().min(1, { message: 'عنوان الزامی است' }),
  type: z.enum(['upper', 'lower'], { message: 'دسته بندی الزامی است' }),
  image: z.string().min(1, { message: 'تصویر الزامی است' }),
});

export type AddClothesFormData = z.infer<typeof addClothesFormSchema>; 