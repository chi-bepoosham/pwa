import React from 'react';
import { CometStarVector } from '@/stories/Vectors';
import { MinorButton } from '@/stories/MinorButton';
import { Uploader } from '@/stories/Uploader';
import { MinoreInput } from '@/stories/MinoreInput';
import { GenderSelection } from '@/stories/GenderSelection';
import { VoiceAssistant } from '@/stories/VoiceAssistant';

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-white overflow-hidden">
      <div className="flex flex-col justify-center items-center gap-10">


        <div className="flex flex-col justify-center items-center p-4">
          <div className="flex flex-row justify-center items-center gap-4">
            <i className="text-secondary-300">
              <CometStarVector />
            </i>
            <h2 className="text-secondary font-semibold">
              ثــــبت‌نــــام
            </h2>
            <i className="text-secondary-300 rotate-180">
              <CometStarVector />
            </i>
          </div>
          <h3 className="text-secondary-300">
            مـرحـلۀ اول
          </h3>
        </div>


        <div>
          <Uploader
            size="medium"
            title="تصویر نمایه"
          />
        </div>
      </div>


      <div className="flex flex-col justify-center items-center gap-4 w-full h-full">
        <div className=" flex flex-col gap-2">
          <h2 className="text-secondary font-semibold">
            مشخصات شما
          </h2>
          <MinoreInput
            type="fullName"
          />
        </div>

        <div className="">
          <GenderSelection
          />
        </div>

      </div>


      <div className="flex flex-col justify-center items-center gap-4 w-full h-full">
        <MinorButton
          size="md"
          variant="flat"
          buttonTitle="مـــرحلۀ بــــعدی"
          radius="sm"
          isLoading={false}
          color="primary"
        />
        <h4 className="text-secondary">
          بعــدا تکـــمیل میکنـــم!
        </h4>
      </div>

      <div className="w-full">
        <VoiceAssistant />
      </div>


    </div>
  );
}