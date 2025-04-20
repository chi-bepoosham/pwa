'use client';
import React, { useState } from 'react';
import { Button } from '@heroui/react';
import { motion } from 'framer-motion';
import clsx from 'clsx';


export interface MinorButtonProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow' | 'ghost';
  buttonTitle?: string | React.ReactNode;
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  isLoading?: boolean;
  icon?: React.ReactNode;
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  className?: string
}


const getCustomColorClass = (color?: string) => {
  switch (color) {
    case 'primary':
      return 'text-white';
    case 'secondary':
      return '';
    case 'success':
      return 'text-secondary';
    case 'warning':
      return 'text-white';
    case 'danger':
      return 'text-white';
    default:
      return 'bg-primary';
  }
};


const getCustomSizeClass = (size?: string) => {
  const maxWidth = 'w-full ';

  switch (size) {
    case 'sm':
      return `!w-10 !h-10  ${maxWidth} text-base`;
    case 'md':
      return `px-3 max-w-64 ${maxWidth} text-base`;
    case 'lg':
      return `px-3 max-w-80 ${maxWidth} text-lg`;
    case 'xl':
      return `px-3 max-w-96 ${maxWidth} text-xl`;
    default:
      return `px-3 ${maxWidth} text-base`;
  }
};


export const MinorButton = (props: MinorButtonProps) => {
  const {
    size = 'sm',
    buttonTitle,
    variant,
    radius,
    isLoading,
    icon,
    color = 'primary',
    className
  } = props;
  const [, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <Button
      className={clsx(`!min-w-0 ${getCustomColorClass(color)} ${getCustomSizeClass(size)}` , className)}
      variant={variant}
      radius={radius}
      color={color}
      onPress={handleClick}
      startContent={icon}
    >
      {isLoading ? (
        <div className="flex justify-center gap-3">
          <motion.div
            className="w-3 h-3 bg-white rounded-full"
            animate={{ opacity: [1, 0.2, 1] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: 'loop',
              delay: 1.4,
            }}
          />
          <motion.div
            className="w-3 h-3 bg-white rounded-full"
            animate={{ opacity: [1, 0.2, 1] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: 'loop',
              delay: 1,
            }}
          />
          <motion.div
            className="w-3 h-3 bg-white rounded-full"
            animate={{ opacity: [1, 0.2, 1] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: 'loop',
              delay: 0.6,
            }}
          />
        </div>
      ) : (
        buttonTitle
      )}
    </Button>
  );
};
