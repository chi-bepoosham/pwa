'use client';

export default function Error({ message }: { message: string }) {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full text-red-500 ">
      <span className="font-bold">خطا در دریافت کمد من</span>
      <span>{message}</span>
    </div>
  );
}
