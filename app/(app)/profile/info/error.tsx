'use client';

export default function Error({ message }: { message: string }) {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full text-red-500 ">
      <p className="text-red-500">خطا در دریافت اطلاعات کاربری. لطفاً دوباره تلاش کنید.</p>
      <span>{message}</span>
    </div>
  );
}
