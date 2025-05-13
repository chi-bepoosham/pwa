import { Metadata } from "next";

export const metadata: Metadata = {
  title: "صفحه اصلی",
};

export default function HomeLayout({ children }: {children: React.ReactNode}) {
  return <>{children}</>;
}
