'use client';

import { IRANSansX } from '@/lib/font';
import { Button } from '@heroui/react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

export interface MinorButtonProps {
  className?: string;
  variant?: 'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow' | 'ghost';
  buttonTitle?: string | React.ReactNode;
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  isIconOnly?: boolean;
  icon?: React.ReactNode;
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'default';
  type?: 'reset' | 'button' | 'submit';
  onClick?: () => void;
  isDisable?: boolean;
}

const getCustomColorClass = (color?: string) => {
  switch (color) {
    case 'primary':
      return '';
    case 'secondary':
      return '';
    case 'success':
      return '';
    case 'warning':
      return '';
    case 'danger':
      return '';
    default:
      return 'bg-white';
  }
};

export const MinorButton = (props: MinorButtonProps) => {
  const {
    className = '',
    buttonTitle,
    variant,
    radius,
    size,
    isLoading,
    icon,
    color = 'primary',
    onClick,
    isIconOnly = false,
    isDisable = false,
    type,
  } = props;

  const [, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    if (onClick) {
      onClick();
    }
  };
  return (
    <Button
      type={type}
      className={clsx(`!min-w-0 ${getCustomColorClass(color)}  ${IRANSansX.className}`, className)}
      variant={variant}
      radius={radius}
      color={color}
      size={size}
      onPress={handleClick}
      startContent={icon}
      isIconOnly={isIconOnly}
      isDisabled={isDisable}
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
