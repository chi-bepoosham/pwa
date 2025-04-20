//* Import components
import { IconTypes } from '@/types/data-types';
import { Icon as Iconify } from '@iconify-icon/react';

const Icon = ({ name, size = 'sm', isCustomVariant, className }: IconTypes) => {
  // Data
  const sizes = {
    '2xs': 14,
    xs: 18,
    sm: 22,
    md: 28,
    lg: 40,
  };

  return (
    <Iconify
      icon={isCustomVariant ? name : `solar:${name}-broken`}
      width={sizes[size]}
      className={className}
      style={{
        height: sizes[size],
      }}
    />
  );
};

export default Icon;
