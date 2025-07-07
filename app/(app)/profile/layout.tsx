import { Metadata } from "next";

export const metadata: Metadata = {
  title: "پروفایل من",
};

export default function Page({ children }: {children: React.ReactNode}) {
  return <>{children}</>;
}
