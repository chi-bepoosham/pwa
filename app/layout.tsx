import { IRANSansX } from '@/lib/font';
import './globals.css';
import clsx from 'clsx';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body dir="rtl" className={clsx('w-screen h-screen bg-primary-100', IRANSansX.className)}>
        <main className="max-w-screen-md mx-auto bg-primary h-full">{children}</main>
      </body>
    </html>
  );
}
