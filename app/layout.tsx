import { IRANSansX } from '@/lib/font';
import './globals.css';
import type {Metadata, Viewport} from "next";
import clsx from 'clsx';
import PageTransition from '@/components/PageTransition';


export const metadata: Metadata = {
  title: {
      default: "چی بپوشم",
      template: `فروشگاه آنلاین پوشاک | %s`,
  },
  description: "فروشگاه آنلاین پوشاک - خرید آنلاین انواع لباس، کفش و اکسسوری",
  keywords: ["فروشگاه آنلاین", "خرید لباس", "پوشاک", "مد و فشن", "خرید آنلاین لباس", "فروشگاه اینترنتی پوشاک"],
  icons: {
      icon: "/favicon.ico",
  },
  manifest: "/manifest.json",
}







export const viewport: Viewport = {
  themeColor: [
      {media: "(prefers-color-scheme: light)", color: "#4141F9"},
      {media: "(prefers-color-scheme: dark)", color: "#0C0D11"},
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body dir="rtl" className={clsx('w-screen h-screen overflow-hidden bg-primary-200', IRANSansX.className)}>
        <main className="max-w-screen-sm mx-auto !min-h-screen bg-white">
          <PageTransition>{children}</PageTransition>
        </main>
      </body>
    </html>
  );
}
