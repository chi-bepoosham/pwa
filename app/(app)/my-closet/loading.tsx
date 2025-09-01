import { Spinner } from '@heroui/react';

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <Spinner size="lg" color="primary" />
    </div>
  );
}
