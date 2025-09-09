import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'سلبریتی‌ها',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <main className="relative flex flex-col w-full h-screen overflow-hidden">{children}</main>;
}
