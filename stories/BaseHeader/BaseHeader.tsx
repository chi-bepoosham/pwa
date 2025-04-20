import React from 'react';


export interface BaseHeaderProps {
  children: React.ReactNode;
}


export const BaseHeader = (props: BaseHeaderProps) => {
  const { children } = props;
  return (
    <div className="w-full flex flex-row bg-red-700 h-28">
      {children}
    </div>
  );
};