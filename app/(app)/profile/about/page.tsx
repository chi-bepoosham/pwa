'use client';

import { ArrowRightIcon } from '@/stories/Icons';
import { Logo } from '@/stories/Logo';
import { Social } from '@/stories/Social';
import { CometStarVector } from '@/stories/Vectors';
import { Button } from '@heroui/react';
import { useRouter } from 'next/navigation';
import Header from '../../components/Header';

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col w-full">
      <Header
        variant="centered"
        title="دربارۀ تیم مــــا"
        startContent={
          <Button
            variant="bordered"
            color="secondary"
            size="lg"
            isIconOnly
            className="h-14 w-14 rounded-2xl shrink-0"
            onPress={() => router.back()}
          >
            <ArrowRightIcon size={36} />
          </Button>
        }
        endContent={<div className="w-14 h-1 bg-transparent"></div>}
      />
      <div className="flex flex-col justify-center gap-20 h-full px-8">
        <div className="flex flex-col justify-center items-center w-full gap-4">
          <Logo secondary />
          <h1 className="text-primary tracking-wider font-light text-xl">Chi Bepoosham</h1>
        </div>
        <div className="w-full max-w-[500px] mx-auto text-medium text-foreground text-justify font-light">
          ما در چی بپوشم باور داریم که استایل هر فرد منحصر به فرده. با ترکیب تکنولوژی و مد، فضایی
          ساختیم که بتونید استایل مخصوص خودتون رو کشف کنید، از کمد دیجیتالی استفاده کنید و حتی
          لباس‌ها رو به‌صورت مجازی امتحان کنید. آینده استایل شخصی همینجاست.
        </div>
        <div className="flex flex-col justify-center items-center gap-8">
          <div className="grid grid-cols-3 gap-4 items-center">
            <i className="rotate-180">
              <CometStarVector />
            </i>
            <h3 className="font-semibold text-nowrap ">راه‌هــای ارتباطــی</h3>
            <i>
              <CometStarVector />
            </i>
          </div>
          <Social />
        </div>
      </div>
    </div>
  );
}
