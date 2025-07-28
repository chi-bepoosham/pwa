import { BottomNavigation } from '@/stories/BottomNavigation';
import { GlobalUserStatsBar } from '@/stories/GlobalUserStatsBar';
import { ScrollShadow } from '@heroui/react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'چی بپوشم',
    template: `چی بپوشم | %s`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative flex flex-col w-full h-screen overflow-hidden">
      <GlobalUserStatsBar joined={70} total={100} />
      <ScrollShadow hideScrollBar className="flex flex-col w-full h-[calc(100%-96px)] bg-white pt-12">
        {children}
      </ScrollShadow>
      <div className="sticky w-full bottom-0 z-10">
        <BottomNavigation />
      </div>
    </main>
  );
}
