import { BFormVector, BorderVector } from '@/stories/Vectors';
import React from 'react';

export const BodyForm = () => {
  return (
    <div className="relative w-96 flex flex-col items-center justify-center">
      <BorderVector />
      <div className="absolute w-56">
        <BFormVector />
      </div>
    </div>
  );
};
