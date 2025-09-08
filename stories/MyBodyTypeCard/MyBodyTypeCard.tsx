import Image from 'next/image';
// import { Button } from '@heroui/react';
// import { EditIcon } from '../Icons';

export interface MyBodyTypeCardProps {
  value?: string;
  image?: string;
  // onChange?: () => void;
}

export const MyBodyTypeCard = ({ value, image }: MyBodyTypeCardProps) => {
  return (
    <div className="flex justify-between w-full border border-primary/10 rounded-2xl p-2">
      <div className="flex items-center gap-4">
        {/* تصویر بدن */}
        <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden">
          {image && (
            <Image
              src={`https://core.chibepoosham.app/${image}`}
              alt="body"
              width={128}
              height={128}
              className="w-full h-full object-cover object-top"
            />
          )}
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-sm font-semibold text-secondary">عکس فرم بدن شمـــا</span>
          <span className="text-xs text-secondary/50">{value || 'نامشخص'}</span>
        </div>
      </div>
      {/* <div>
        <Button
          variant="light"
          startContent={<EditIcon size={18} />}
          className="text-primary flex items-center gap-1"
          onPress={onChange}
        >
          ویرایش
        </Button>
      </div> */}
    </div>
  );
};
