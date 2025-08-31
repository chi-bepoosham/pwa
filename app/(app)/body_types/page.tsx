'use client';

import { BodyType } from '@/stories/BodyType';
import { CrossIcon } from '@/stories/Icons';
import { Button } from '@heroui/react';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';

export default function Page() {
  const router = useRouter();

  const handleGoBack = () => {
    router.replace('/home');
  };

  return (
    <div className="flex flex-col w-full">
      <Header
        variant="side"
        title="انــواع فــرم بــدن!"
        endContent={
          <Button
            variant="bordered"
            color="secondary"
            size="lg"
            isIconOnly
            className="h-14 w-14 rounded-2xl shrink-0"
            onPress={handleGoBack}
          >
            <CrossIcon size={48} />
          </Button>
        }
      />
      <div className="flex flex-col gap-5 justify-center items-center px-6 pb-6">
        <BodyType
          title="فرم بدن ساعت شنی"
          selectedType="reverseTriangle"
          number={1}
          strength="لورم ایپسوم متن ساختگی با تولید سادگی
نـــامفهوم از صنعت چاپ و بـا استفاده از طراحان!"
          weaknessPoints="لـــــورم ایپسوم مــــتن ساختگی با تـــولید سادگی!"
        />
        <BodyType
          title="فرم بدن ساعت شنی"
          selectedType="rectangle"
          number={2}
          strength="لورم ایپسوم متن ساختگی با تولید سادگی
نـــامفهوم از صنعت چاپ و بـا استفاده از طراحان!"
          weaknessPoints="لـــــورم ایپسوم مــــتن ساختگی با تـــولید سادگی!"
        />
        <BodyType
          title="فرم بدن ساعت شنی"
          selectedType="circle"
          number={3}
          strength="لورم ایپسوم متن ساختگی با تولید سادگی
  نـــامفهوم از صنعت چاپ و بـا استفاده از طراحان!"
          weaknessPoints="لـــــورم ایپسوم مــــتن ساختگی با تـــولید سادگی!"
        />
        <BodyType
          title="فرم بدن ساعت شنی"
          selectedType="triangle"
          number={4}
          strength="لورم ایپسوم متن ساختگی با تولید سادگی
  نـــامفهوم از صنعت چاپ و بـا استفاده از طراحان!"
          weaknessPoints="لـــــورم ایپسوم مــــتن ساختگی با تـــولید سادگی!"
        />
        <BodyType
          title="فرم بدن ساعت شنی"
          selectedType="hourglass"
          number={5}
          strength="لورم ایپسوم متن ساختگی با تولید سادگی
  نـــامفهوم از صنعت چاپ و بـا استفاده از طراحان!"
          weaknessPoints="لـــــورم ایپسوم مــــتن ساختگی با تـــولید سادگی!"
        />
      </div>
    </div>
  );
}
