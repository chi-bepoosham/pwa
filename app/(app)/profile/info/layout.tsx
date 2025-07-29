import { Metadata } from "next";

export const metadata: Metadata = {
  title: "حساب کاربری",
};

export default function Page({ children }: {children: React.ReactNode}) {
  return <>{children}</>;
}
