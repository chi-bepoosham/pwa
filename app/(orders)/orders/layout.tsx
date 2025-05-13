import { Metadata } from "next";

export const metadata: Metadata = {
  title: "سفارشات",
};

export default function OrdersLayout({ children }: {children: React.ReactNode}) {
  return <>{children}</>;
}
