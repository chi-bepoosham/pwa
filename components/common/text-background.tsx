import clsx from 'clsx';
import React, { useMemo } from 'react';
interface TextBackgroundProps {
  bgColor: string;
  children: React.ReactNode;
  className?: string;
}
const TextBackground = ({ bgColor, children, className }: TextBackgroundProps) => {
  let bg = useMemo(() => `after:bg-[${bgColor}]`, [bgColor]);
  return (
    <>
      {bg ? (
        <p
          className={clsx(
            'z-0 relative after:absolute after:inset-0 after:right-2 after:w-[94%] after:-z-10 after:rounded-sm after:opacity-10',
            `after:bg-[--bg-text-color]`,
            className
          )}
          style={{ '--bg-text-color': bgColor } as React.CSSProperties}
        >
          {children}
        </p>
      ) : (
        ''
      )}
    </>
  );
};
export default TextBackground;
