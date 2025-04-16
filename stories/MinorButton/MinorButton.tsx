'use client';
import React, { useState } from 'react';
import { Button } from '@heroui/react';
import { motion } from 'framer-motion';


export interface MinorButtonProps {
  className?: string;
  variant?: 'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow' | 'ghost';
  buttonTitle?: string | React.ReactNode;
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  isLoading?: boolean;
  icon?: React.ReactNode;
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  onClick?: () => void;
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
      return 'bg-primary';
  }
};




export const MinorButton = (props: MinorButtonProps) => {
  const {
    className = '',
    buttonTitle,
    variant,
    radius,
    isLoading,
    icon,
    color = 'primary',
    onClick
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
      className={`!min-w-0 ${className} ${getCustomColorClass(color)}`}
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
