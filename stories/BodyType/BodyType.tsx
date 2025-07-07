import React from 'react';
import { Card, CardHeader, CardBody } from '@heroui/card';
import { Types } from '@/stories/BodyType/Types';
import { Number } from '@/stories/Number';
import { Divider } from '@heroui/react';

export interface BodyTypeProps {
  title?: string;
  strength?: string;
  weaknessPoints?: string;
  selectedType: React.ComponentProps<typeof Types>['selectedType'];
  number: React.ComponentProps<typeof Number>['number'];
}

export const BodyType = (props: BodyTypeProps) => {
  const { title, strength, weaknessPoints, selectedType, number } = props;

  return (
    <div className="w-full grid grid-cols-4 border-2 border-secondary overflow-hidden pr-2 rounded-3xl">
      <div className="col-span-1 bg-primary-50 rounded-lg my-2 flex justify-center items-center">
        <Types selectedType={selectedType} />
      </div>
      <Card shadow="none" radius="none" className="col-span-3">
        <CardHeader 
        className="flex flex-row justify-start items-center gap-8 text-primary text-nowrap text-small xs:text-lg sm:text-2xl font-bold"
        >
          <Number number={number} />
          {title}
        </CardHeader>
        <Divider />
        <CardBody className="flex flex-col gap-8 text-right">
          <div>
            <h1 className="text-secondary font-bold text-sm xs:text-base sm:text-lg flex flex-row items-center mb-2">
              نقاط <span className="text-[#07A537]">قوت</span>
            </h1>
            <p className="text-secondary-300 text-xs xs:text-sm sm:text-base">{strength}</p>
          </div>
          <div>
            <h1 className="text-secondary font-bold text-sm xs:text-base sm:text-lg flex flex-row items-center mb-2">
              نقاط <span className="text-[#E93B55]">ضعف</span>
            </h1>
            <p className="text-secondary-300 text-xs xs:text-sm sm:text-base">{weaknessPoints}</p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
