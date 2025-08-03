import { Metadata } from "next";

export const metadata: Metadata = {
  title: "محصولات نشان شده",
};

export default function Page({ children }: {children: React.ReactNode}) {
  return <>{children}</>;
}
