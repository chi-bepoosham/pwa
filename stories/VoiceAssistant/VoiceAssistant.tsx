import React from 'react';
import { ShieldVector } from '@/stories/Vectors';
import { MicIcon } from '@/stories/Icons';

export const VoiceAssistant = () => {
  return (
    <div className='relative w-full'>
      <div className='w-full flex justify-center absolute -top-10 z-10'>
      <div className="bg-white rounded-full w-auto">
        <i className="text-primary cursor-pointer">
          <MicIcon size={80} />
        </i>
      </div>
      </div>
      <div className="relative w-full h-36 bg-secondary rounded-t-3xl flex justify-center items-center overflow-hidden">
        <div className="absolute -top-40 translate-y-0 translate-x-0">
          <ShieldVector />
        </div>
        <p className="text-white text-lg font-medium select-none">
          سلام! من اینجا بهت کمک می‌کنم تا بتونی ...
        </p>
      </div>
    </div>
  );
};
