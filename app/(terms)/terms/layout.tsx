import { Metadata } from "next";

export const metadata: Metadata = {
  title: "قوانین و مقررات",
};

export default function TermsLayout({ children }: {children: React.ReactNode}) {
  return <>{children}</>;
}
