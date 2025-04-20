'use client';
import {MinorButton} from '@/stories/MinorButton';
import { useRouter } from 'next/navigation';
import { ArrowRightIcon } from '@/stories/Icons';

export default function Home() {
  const router = useRouter();

  return (
    <main className="max-w-3xl mx-auto p-6 text-right">
      <div className="flex justify-start mb-10">
        <MinorButton
          onClick={() => router.back()}
          className="px-1 py-4"
          variant="bordered"
          radius="lg"
          isLoading={false}
          icon={<i className="text-secondary"><ArrowRightIcon size={28} /></i>}
          color="secondary"
        />
      </div>

      <h1 className="text-3xl font-bold mb-4 text-primary">قوانین و مقررات</h1>
      <section className="space-y-4 text-sm leading-7 text-gray-800">
        <p>
          استفاده از سرویس «چی بپوشم» به معنای پذیرش کامل قوانین و شرایط زیر می‌باشد. لطفاً این موارد را با دقت مطالعه
          فرمایید.
        </p>

        <h2 className="text-lg font-semibold text-primary">۱. مسئولیت کاربران</h2>
        <p>
          کاربران موظف‌اند اطلاعات خود را به‌صورت صحیح وارد کرده و از ایجاد حساب‌های جعلی خودداری کنند. در صورت تخلف،
          اکانت فرد بدون اطلاع قبلی مسدود خواهد شد.
        </p>

        <h2 className="text-lg font-semibold text-primary">۲. حفظ حریم خصوصی</h2>
        <p>
          ما متعهد به حفظ اطلاعات شخصی کاربران هستیم و از داده‌های شما تنها در چارچوب قوانین حریم خصوصی استفاده خواهد
          شد.
        </p>

        <h2 className="text-lg font-semibold text-primary">۳. تغییرات قوانین</h2>
        <p>
          این قوانین ممکن است در هر زمان به‌روزرسانی شوند. استفاده مستمر از سرویس، به معنای پذیرش نسخه جدید قوانین
          می‌باشد.
        </p>

        <p className="mt-6 font-medium text-gray-600">
          برای هرگونه سوال یا ابهام، لطفاً با پشتیبانی تماس بگیرید.
        </p>
      </section>
    </main>
  );
}
