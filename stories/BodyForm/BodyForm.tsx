import React from 'react';
import { BFormVector, BorderVector } from '@/stories/Vectors';

export interface BodyFormProps {
}

export const BodyForm = (props: BodyFormProps) => {
  const {} = props;
  return (
    <div className="relative w-96 flex flex-col items-center justify-center">
      <BorderVector />
      <div className="absolute w-56">
        <BFormVector />
      </div>
    </div>
  );
};
