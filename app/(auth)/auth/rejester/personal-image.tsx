import TextBackground from '@/components/common/text-background';
import { MinorButton } from '@/stories/MinorButton';
import { Uploader } from '@/stories/Uploader';
import { VoiceAssistant } from '@/stories/VoiceAssistant';
import { Button } from '@heroui/react';
import { AccountName } from '@/stories/AccountName';
import { HintSlider } from '@/stories/HintSlider';

const PersonalImage = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-4 w-full px-7">
        <Uploader size="x-large" title="تصویر نمایه" />
        <div className="text-center flex gap-2 flex-col text-sm text-nowrap relative">
          <div>
            <AccountName />
          </div>
          <TextBackground bgColor="#4141F9">
            عکس تمام قد خودت رو با نور مناسب اینجا اضافه کن!
          </TextBackground>
        </div>
      </div>

      <div className="w-full p-4">
        <HintSlider slides={[
          { picture: '/banner.png', matchRate: 85, isCorrect: true },
          { picture: '/img_5.png', matchRate: 70, isCorrect: false },
          { picture: '/banner.png', matchRate: 90, isCorrect: true },
          { picture: '/img_5.png', matchRate: 35, isCorrect: false },
          { picture: '/banner.png', matchRate: 60, isCorrect: true },
          { picture: '/img_5.png', matchRate: 90, isCorrect: false },
        ]}
        />
      </div>

      <div className="flex flex-col items-center gap-4 w-full">
        <MinorButton
          variant="flat"
          buttonTitle="ورود بـه صفحۀ اصلـی"
          radius="md"
          isLoading={false}
          color="primary"
        />
        <Button color="default" variant="light">
          مرحله قبل{' '}
        </Button>
      </div>

      <div className="w-full">
        <VoiceAssistant />
      </div>
    </>
  );
};
export default PersonalImage;
