import { Metadata } from "next";

export const metadata: Metadata = {
  title: "درباره ما",
};

export default function Page({ children }: {children: React.ReactNode}) {
  return <>{children}</>;
}
