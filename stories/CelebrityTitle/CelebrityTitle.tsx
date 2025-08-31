'use client';

import { IRANSansX, SacramentoLocal } from '@/lib/font';
import React, { useEffect, useState } from 'react';

interface Props {
  title: string;
}

export const CelebrityTitle: React.FC<Props> = ({ title }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={`${mounted ? SacramentoLocal.className : IRANSansX.className} 
              text-4xl bg-gradient-to-r from-primary/80 via-white to-white/90 bg-clip-text text-transparent font-semibold pb-2 leading-snug`}
    >
      {title}
    </div>
  );
};
