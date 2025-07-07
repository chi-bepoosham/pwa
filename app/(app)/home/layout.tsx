import { Metadata } from "next";

export const metadata: Metadata = {
  title: "صفحه اصلی",
};

export default function MyClosetLayout({ children }: {children: React.ReactNode}) {
  return <>{children}</>;
}
