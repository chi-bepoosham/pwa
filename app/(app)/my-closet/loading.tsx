'use client';

import { Spinner } from '@heroui/react';
import Header from '../components/Header';

export default function Loading() {
  return (
    <div className="flex flex-col w-full h-full">
      <Header variant="side" title="کـمد لبـاس مـن!" />
      <div className="flex justify-center items-center h-full w-full flex-1">
        <Spinner size="lg" color="primary" />
      </div>
    </div>
  );
}
