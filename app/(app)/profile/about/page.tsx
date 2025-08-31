'use client';

import { ArrowRightIcon, StarIcon } from '@/stories/Icons';
import { Button } from '@heroui/react';
import { useRouter } from 'next/navigation';
import Header from '../../components/Header';
import { Logo } from '@/stories/Logo';
import { Social } from '@/stories/Social';

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
          لورم ایپسوم متن ساختگی با تولید سـادگی نـــامفهوم از صنعت چاپ و با استفاده از طراحان
          گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و ســــطرآنچنان که لازم است و
          بـــرای شرایط فعلی تکنولوژی مورد نـــیاز و کاربردهای متنوع بـا هدف بهبود ابزارهای کاربردی
          می باشد.
        </div>
        <div className="flex flex-col justify-center items-center gap-8">
          <div className="grid grid-cols-3 gap-4 items-center">
            <div className="flex items-center text-zinc-400/30">
              <div className="bg-gradient-to-r to-white from-zinc-400/30 h-0.5 w-full"></div>
              <StarIcon size={12} />
            </div>
            <h3 className="font-semibold text-nowrap ">راه‌هــای ارتباطــی</h3>
            <div className="flex items-center text-zinc-400/30">
              <StarIcon size={12} />
              <div className="bg-gradient-to-r from-white to-zinc-400/30 h-0.5 w-full"></div>
            </div>
          </div>
          <Social />
        </div>
      </div>
    </div>
  );
}
