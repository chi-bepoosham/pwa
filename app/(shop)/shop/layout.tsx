import { Metadata } from "next";

export const metadata: Metadata = {
  title: "فروشگاه",
};

export default function ShopLayout({ children }: {children: React.ReactNode}) {
  return <>{children}</>;
}
