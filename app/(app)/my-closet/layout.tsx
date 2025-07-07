import { Metadata } from "next";

export const metadata: Metadata = {
  title: "کمد من",
};

export default function MyClosetLayout({ children }: {children: React.ReactNode}) {
  return <>{children}</>;
}
