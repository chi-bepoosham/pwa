import { z } from 'zod';

export const registerFormSchema = z.object({
  first_name: z.string().min(1, { message: 'نام الزامی است' }),
  last_name: z.string().min(1, { message: 'نام‌خانوادگی الزامی است' }),
  avatar: z.string().optional(),
  gender: z.number().min(1).max(2, 'جنسیت معتبر نیست'),
  // gender: z.enum(['1', '2'], { message: 'جنسیت الزامی است' }),
  email: z.string().email({ message: 'ایمیل معتبر نیست' }).optional().or(z.literal('')),
  birthday: z.string().optional(),
});

export type RegisterFormData = z.infer<typeof registerFormSchema>;
