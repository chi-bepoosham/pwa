import { StarVector } from '@/stories/Vectors';
import { cn } from '@heroui/react';
import React from 'react';

export interface BannerProps {
  withStar?: boolean;
  textColor?: string;
  starColor?: string;
}

export const Banner = (props: BannerProps) => {
  const { withStar, textColor = 'text-white', starColor = 'text-white' } = props;

  return (
    <div className="flex flex-col gap-3 justify-center items-center w-full">
      <span className={cn(textColor, 'tracking-tight')}>
        هـــــــــــــــروز شـــــــــــــــیکـ تـــــــــــــــر از دیـــــــــــــــروز
      </span>
      {withStar && (
        <span className={cn(starColor)}>
          <StarVector />
        </span>
      )}
    </div>
  );
};
