import { z } from 'zod';

export const userSchema = z.object({
  first_name: z
    .string()
    .min(2, 'نام باید حداقل ۲ کاراکتر باشد')
    .max(50, 'نام نمی‌تواند بیشتر از ۵۰ کاراکتر باشد')
    .trim(),
  // .regex(/^[آ-ی\s]+$/, 'نام و فامیل باید فقط شامل حروف فارسی و فاصله باشد'),
  last_name: z
    .string()
    .min(2, 'نام خانوادگی باید حداقل ۲ کاراکتر باشد')
    .max(50, 'نام خانوادگی نمی‌تواند بیشتر از ۵۰ کاراکتر باشد')
    .trim(),
  // .regex(/^[آ-ی\s]+$/, 'نام و فامیل باید فقط شامل حروف فارسی و فاصله باشد'),
  email: z
    .string()
    .email('ایمیل معتبر وارد کنید')
    .optional()
    .or(z.literal('').transform(() => undefined)),
  mobile: z.string().regex(/^09\d{9}$/, 'شماره موبایل معتبر نیست'),
  gender: z.number().min(0).max(2, 'جنسیت معتبر نیست'),
  avatar: z.any().optional(),
});

export type UserFormData = z.infer<typeof userSchema>;
