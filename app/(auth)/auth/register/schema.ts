import { z } from 'zod';

export const registerFormSchema = z.object({
  full_name: z.string().min(1, { message: 'نام و نام‌خانوادگی الزامی است' }),
  avatar: z.string().optional(),
  gender: z.enum(['1', '2'], { message: 'جنسیت الزامی است' }),
  email: z.string().email({ message: 'ایمیل معتبر نیست' }).optional().or(z.literal('')),
  birthday: z.string().optional()
});

export type RegisterFormData = z.infer<typeof registerFormSchema>; 