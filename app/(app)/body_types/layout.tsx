import { ScrollShadow } from "@heroui/react";
import { Metadata } from "next";



export const metadata: Metadata = {
  title: "انواع فرم بدن",
};

export default function Layout({ children }: {children: React.ReactNode}) {
  return (
    <main className="relative flex flex-col w-full h-screen overflow-hidden">
      <ScrollShadow
        hideScrollBar
        className="flex flex-col w-full h-[calc(100%-0px)] bg-white"
      >
        {children}
      </ScrollShadow>
    </main>
  );
}
