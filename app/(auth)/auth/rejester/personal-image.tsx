import TextBackground from '@/components/common/text-background';
import { MinorButton } from '@/stories/MinorButton';
import { Uploader } from '@/stories/Uploader';
import { VoiceAssistant } from '@/stories/VoiceAssistant';
import { Button } from '@heroui/react';

const PersonalImage = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-10 w-full px-7">
        <Uploader size="x-large" title="تصویر نمایه" />
        <div className="text-center flex gap-2 flex-col text-xs relative">
          <p>علی عزیز یا کاربر عزیز</p>
          <TextBackground bgColor="#4141F9">
            عکس تمام قد خودت رو با نور مناسب اینجا اضافه کن!
          </TextBackground>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 w-full">
        <MinorButton
          size="md"
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
