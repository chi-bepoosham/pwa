import { IRANSansX } from '@/lib/font';
import './globals.css';
import type { Metadata, Viewport } from 'next';
import clsx from 'clsx';
import PageTransition from '@/components/PageTransition';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: {
    default: 'چی بپوشم',
    template: `چی بپوشم | %s`,
  },
  description: 'هر روز شیک تر از دیروز',
  keywords: [
    'چی بپوشم',
    'خرید آنلاین',
    'پوشاک',
    'مد و فشن',
    'خرید آنلاین لباس',
    'فروشگاه اینترنتی پوشاک',
  ],
  icons: {
    icon: '/favicon.ico',
    apple: '/icons/icon-512x512.png',
  },
  manifest: '/manifest.webmanifest',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#4141F9' },
    { media: '(prefers-color-scheme: dark)', color: '#0C0D11' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={clsx('w-screen h-screen overflow-hidden bg-primary-200', IRANSansX.className)}
      >
        <main className="max-w-screen-sm mx-auto !min-h-screen bg-white">
          <Providers>
            {/* <PageTransition> */}
              {children}
          {/* </PageTransition> */}
          </Providers>
        </main>
        {/* <ToastContainer toastClassName="font-[revert]"/> */}
      </body>
    </html>
  );
}
