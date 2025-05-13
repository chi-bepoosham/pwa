import { Metadata } from "next";

export const metadata: Metadata = {
  title: "سبد خرید",
};

export default function CartLayout({ children }: {children: React.ReactNode}) {
  return <>{children}</>;
}
