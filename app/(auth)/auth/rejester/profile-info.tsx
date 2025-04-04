import { GenderSelection } from '@/stories/GenderSelection';
import { MinorButton } from '@/stories/MinorButton';
import { MinoreInput } from '@/stories/MinoreInput';
import { Uploader } from '@/stories/Uploader';
import { VoiceAssistant } from '@/stories/VoiceAssistant';
import { Button } from '@heroui/react';

const ProfileInfo = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-10 w-full px-7">
        <Uploader size="medium" title="تصویر نمایه" />
        <div className="flex flex-col gap-2 w-full">
          <h2 className="text-secondary font-semibold">مشخصات شما</h2>
          <MinoreInput type="fullName" />
        </div>
        <GenderSelection />
      </div>

      <div className="flex flex-col items-center gap-4 w-full">
        <MinorButton
          size="md"
          variant="flat"
          buttonTitle="مـــرحلۀ بــــعدی"
          radius="md"
          isLoading={false}
          color="primary"
        />
        <Button color="default" variant="light">
          بعــدا تکـــمیل میکنـــم!
        </Button>
      </div>

      <div className="w-full">
        <VoiceAssistant />
      </div>
    </>
  );
};
export default ProfileInfo;
