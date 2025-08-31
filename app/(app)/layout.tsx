import { BottomNavWrapper } from '@/stories/BottomNavWrapper';
// import { ScrollShadow } from "@heroui/react";
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
      {/* <ScrollShadow
        hideScrollBar
        className="flex flex-col w-full h-[calc(100%-96px)] bg-white"
      > */}
      {children}
      {/* </ScrollShadow> */}
      <BottomNavWrapper />
    </main>
  );
}
