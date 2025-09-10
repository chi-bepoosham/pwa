'use client';

import { AddIcon, EditIcon } from '@/stories/Icons';
import { addToast, Button } from '@heroui/react';
import clsx from 'clsx';
import Image from 'next/image';
import React, { useCallback, useState } from 'react';
import { FileRejection, useDropzone } from 'react-dropzone';

type sizeType = 'medium' | 'large' | 'x-large';

export interface UploaderProps {
  title?: string | React.ReactNode;
  onImageUpload?: (file: File) => void;
  size: sizeType;
  initialImage?: string | null;
}

export const Uploader = ({ title, onImageUpload, size, initialImage }: UploaderProps) => {
  const [image, setImage] = useState<string | null>(initialImage ?? null);

  const onDrop = useCallback(
    (acceptedFiles: File[], fileRejections: FileRejection[]) => {
      if (fileRejections.length > 0) {
        const rejection = fileRejections[0];
        rejection.errors.forEach((err) => {
          if (err.code === 'file-too-large') {
            addToast({ title: 'حجم فایل بیش از حد مجاز است (20MB)', color: 'danger' });
          } else if (err.code === 'file-invalid-type') {
            addToast({ title: 'فرمت فایل پشتیبانی نمی‌شود', color: 'danger' });
          } else {
            addToast({ title: err.message, color: 'danger' });
          }
        });
        return;
      }

      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        const reader = new FileReader();
        reader.onloadend = () => {
          setImage(reader.result as string);
          onImageUpload?.(file);
        };
        reader.readAsDataURL(file);
      }
    },
    [onImageUpload]
  );

  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop,
    accept: {
      'image/png': [],
      'image/jpeg': [],
      'image/jpg': [],
      'image/webp': [],
      'image/heic': [],
      'image/heif': [],
    },
    maxSize: 20 * 1024 * 1024,
    multiple: false,
  });

  let sizeClass = '';
  switch (size) {
    case 'medium':
      sizeClass = 'w-[8rem] h-[8rem] text-base';
      break;
    case 'large':
      sizeClass = 'w-[10rem] h-[10rem] text-lg';
      break;
    case 'x-large':
      sizeClass = 'w-[12rem] h-[16rem] text-xl';
      break;
    default:
      sizeClass = 'w-[6.5rem] h-[6.5rem] text-base';
      break;
  }

  const IconComponent = image ? EditIcon : AddIcon;

  return (
    <div
      onClick={open}
      className="relative flex flex-col items-center cursor-pointer select-none active:scale-95 transition-all duration-300 pt-3"
    >
      <Button
        className={clsx(
          'absolute z-20 bg-primary text-white flex items-center justify-center px-2.5',
          size === 'x-large'
            ? image
              ? 'absolute left-3 bottom-3 !px-2.5 !min-w-0 rounded-full'
              : 'absolute bottom-4 w-fit rounded-2xl'
            : '-bottom-4 min-w-0 rounded-full'
        )}
        onPress={open}
      >
        <IconComponent size={20} />
        {size === 'x-large' && !image && <span>افزودن عکس</span>}
      </Button>

      <div {...getRootProps({ className: 'hidden' })}>
        <input {...getInputProps()} />
      </div>
      <div
        className={clsx(
          `relative ${sizeClass} border-2 border-secondary rounded-[28px] flex justify-center items-center z-10 px-2.5 py-10 bg-white`,
          ['medium', 'large'].includes(size)
            ? 'after:bg-primary-100 after:h-4 after:absolute after:rounded-[2px]'
            : '',
          size === 'medium' ? 'after:w-full' : '',
          size === 'large' ? 'after:w-[80%]' : ''
        )}
      >
        {size === 'x-large' ? (
          <div className="w-full h-full bg-primary-50/5 absolute top-0 -z-30 rounded-[28px] -rotate-6"></div>
        ) : (
          <div className="w-full h-full bg-primary-50/10 absolute top-0 -z-30 rounded-[35px] rotate-45"></div>
        )}
        <div className="w-full h-full bg-white absolute top-0 -z-20 rounded-[28px]"></div>
        {image ? (
          <Image
            width="32"
            height="32"
            src={image}
            alt="Profile"
            className="w-full h-full absolute object-cover object-top rounded-[26px]"
          />
        ) : (
          <div className="text-secondary truncate select-none text-nowrap">{title}</div>
        )}
      </div>
      {/* <div
        className={clsx(
          'absolute inset-0 flex items-center justify-center bg-secondary-50 w-full h-full rounded-[35px]',
          size === 'medium' ? 'rotate-45' : '-rotate-[7deg]',
        )}
      >
      </div> */}
    </div>
  );
};
