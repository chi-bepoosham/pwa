import React from 'react';
import { CorrectIcon, FalseIcon, TruckIcon } from '@/stories/Icons';

type StatusType = 'delivered' | 'canceled' | 'continued';

export interface ProgressNavProps {
  status: StatusType;
  percent?: number;
  deliveryDate?: string;
  deliveryTime?: string;
}

const statusTextMap: Record<StatusType, JSX.Element> = {
  delivered:
    (
      <span className="flex flex-row items-center gap-1">
      <i className="text-secondary">
        <CorrectIcon size={36} />
      </i>
      تحویل داده شده به مشتری
  </span>
    ),
  canceled:
    (
      <span className="flex flex-row items-center gap-1">
      <i className="text-[#E93B55]">
        <FalseIcon size={36} />
      </i>
      لغو شده
  </span>
    ),
  continued:
    <div className="flex flex-row items-center gap-1">
      <i className="text-secondary">
        <CorrectIcon size={36} />
      </i>
      <span>
            وضعیت: جاری(درحال ارسال)
            </span>
    </div>
  ,
};

const statusColorMap: Record<StatusType, string> = {
  delivered: 'bg-[#07A537]',
  canceled: 'bg-secondary',
  continued: 'bg-primary',
};

const statusIconMap: Record<StatusType, JSX.Element> = {
  delivered: <TruckIcon size={36} />,
  canceled: <TruckIcon size={36} />,
  continued: <TruckIcon size={36} />,
};

export const ProgressNav = ({
                              status,
                              percent = 60,
                              deliveryDate = '1403/08/25',
                              deliveryTime = '12:25',
                            }: ProgressNavProps) => {
  return (
    <div className="rounded-xl p-4 w-full flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-700 font-medium flex gap-1">
          <span className={status === 'continued' ? 'text-secondary' : ''}>
            {statusTextMap[status]}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm text-black font-medium">
          {statusIconMap[status]}
          <span>ارسال عادی</span>
        </div>
      </div>

      <div className="w-full h-3 rounded-full bg-gray-200 overflow-hidden">
        <div
          className={`h-full transition-all duration-300 ${statusColorMap[status]}`}
          style={{ width: status === 'continued' ? `${percent}%` : '100%' }}
        />
      </div>


      <div className="flex justify-start text-sm text-gray-500">
        {status !== 'canceled' && (
          <span>
          تحویل: {deliveryDate} - {deliveryTime}
        </span>
        )}
      </div>
    </div>
  );
};
