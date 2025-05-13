import { Metadata } from "next";

export const metadata: Metadata = {
  title: "احراز هویت",
};

export default function AuthLayout({ children }: {children: React.ReactNode}) {
  return <>{children}</>;
}
