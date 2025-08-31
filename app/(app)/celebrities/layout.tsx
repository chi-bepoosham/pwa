import { ScrollShadow } from '@heroui/react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'سلبریتی‌ها',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative flex flex-col w-full h-screen overflow-hidden">
      <ScrollShadow hideScrollBar className="flex flex-col w-full h-[calc(100%-0px)] bg-black">
        {children}
      </ScrollShadow>
    </main>
  );
}
