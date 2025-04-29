import { IRANSansX } from '@/lib/font';
import './globals.css';
import clsx from 'clsx';
import PageTransition from '@/components/PageTransition';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body dir="rtl" className={clsx('w-screen h-screen overflow-hidden bg-primary-100', IRANSansX.className)}>
        <main className="max-w-screen-sm mx-auto !min-h-screen bg-white">
          <PageTransition>{children}</PageTransition>
        </main>
      </body>
    </html>
  );
}
