import React from 'react';
import { CorrectIcon, FalseIcon, TruckIcon } from '@/stories/Icons';

type StatusType = 'delivered' | 'canceled' | 'continued';

export interface ProgressNavProps {
  status: StatusType;
  percent?: number;
  deliveryDate?: string;
  deliveryTime?: string;
}

const StatusContent: Record<StatusType, JSX.Element> = {
  delivered: (
    <span className="flex items-center gap-1">
      <i className="text-secondary">
        <CorrectIcon size={36} />
      </i>
      تحویل داده شده به مشتری
    </span>
  ),
  canceled: (
    <span className="flex items-center gap-1">
      <i className="text-[#E93B55]">
        <FalseIcon size={36} />
      </i>
      لغو شده
    </span>
  ),
  continued: (
    <span className="flex items-center gap-1">
      <i className="text-secondary">
        <CorrectIcon size={36} />
      </i>
      وضعیت: جاری (درحال ارسال)
    </span>
  ),
};

const StatusColor: Record<StatusType, string> = {
  delivered: 'bg-[#07A537]',
  canceled: 'bg-secondary',
  continued: 'bg-primary',
};

export const ProgressNav = ({
                              status,
                              percent = 60,
                              deliveryDate = '1403/08/25',
                              deliveryTime = '12:25',
                            }: ProgressNavProps) => {
  const isOngoing = status === 'continued';
  const isCanceled = status === 'canceled';

  return (
    <div className="w-full p-4 rounded-xl flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <div className={`text-sm font-medium flex gap-1 ${isOngoing ? 'text-secondary' : 'text-gray-700'}`}>
          {StatusContent[status]}
        </div>
        <div className="flex items-center gap-2 text-sm font-medium text-black">
          <TruckIcon size={36} />
          <span>ارسال عادی</span>
        </div>
      </div>

      <div className="w-full h-3 rounded-full bg-gray-200 overflow-hidden">
        <div
          className={`h-full transition-all duration-300 ${StatusColor[status]}`}
          style={{ width: isOngoing ? `${percent}%` : '100%' }}
        />
      </div>

      {!isCanceled && (
        <div className="text-sm text-gray-500">
          تحویل: {deliveryDate} - {deliveryTime}
        </div>
      )}
    </div>
  );
};
