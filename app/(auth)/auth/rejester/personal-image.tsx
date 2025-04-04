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
          <p className="z-0 relative after:content-[''] after:absolute after:inset-0 after:right-2 after:w-[94%] after:bg-[#4141F9] after:-z-10 after:rounded-sm after:opacity-10">
            عکس تمام قد خودت رو با نور مناسب اینجا اضافه کن!
          </p>
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
