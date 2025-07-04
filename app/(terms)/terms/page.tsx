'use client';
import { useRouter } from 'next/navigation';
import { ArrowRightIcon } from '@/stories/Icons';
import { Button } from '@heroui/react';

export default function Home() {
  const router = useRouter();

  return (
    <main className="relative flex flex-col max-h-full gap-5 justify-between">
      <div className="p-6 sticky top-0 w-full bg-white z-10">
        <Button
            variant='bordered'
            color='default'
            size='lg'
            isIconOnly
            className='border-foreground rounded-2xl'
            onPress={() => router.back()}
          >
            <i className="text-secondary">
              <ArrowRightIcon size={28} />
            </i>
        </Button>
      </div>
      <div className="relative flex flex-col max-h-full gap-5 justify-between p-6">

        <h1 className="text-2xl font-bold mb-4 text-primary">قوانین و مقررات</h1>
        <section className="space-y-4 text-sm leading-7 text-gray-800">
          <p className='text-justify'>
          هرگونه عضویت در سایت، ارسال اطلاعات، استفاده از خدمات و بهره‌بردن از امکانات این سامانه و سایت به منزله‌ی پذیرش این توافق‌نامه خواهد بود، لذا خواهشمند است پیش از انجام اقدامات مزبور، مفاد این توافق‌نامه را با دقت مطالعه و سپس از خدمات سایت بهره‌برداری کنید.
          </p>

          <h2 className="text-lg font-semibold text-primary">۱. مسئولیت کاربران</h2>
          <p className='text-justify'>
            کاربران موظف‌اند اطلاعات خود را به‌صورت صحیح وارد کرده و از ایجاد حساب‌های جعلی خودداری کنند. در صورت تخلف،
            اکانت فرد بدون اطلاع قبلی مسدود خواهد شد.
          </p>

          <h2 className="text-lg font-semibold text-primary">۲. حفظ حریم خصوصی</h2>
          <p className='text-justify'>
            ما متعهد به حفظ اطلاعات شخصی کاربران هستیم و از داده‌های شما تنها در چارچوب قوانین حریم خصوصی استفاده خواهد
            شد.
          </p>

          <h2 className="text-lg font-semibold text-primary">۳. تغییرات قوانین</h2>
          <p className='text-justify'>
            این قوانین ممکن است در هر زمان به‌روزرسانی شوند. استفاده مستمر از سرویس، به معنای پذیرش نسخه جدید قوانین
            می‌باشد.
          </p>

          <p className="mt-6 font-bold text-gray-600 text-justify">
            برای هرگونه سوال یا ابهام، لطفاً با پشتیبانی تماس بگیرید.
          </p>
        </section>
      </div>
    </main>
  );
}
