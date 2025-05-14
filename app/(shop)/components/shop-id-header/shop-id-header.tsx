"use client";
import { ArrowRightIcon, BookmarkIcon } from "@/stories/Icons";
import { MinorButton } from "@/stories/MinorButton";
import { useRouter } from "next/navigation";

const ShopIdHeader = () => {
  const router = useRouter();
  return (
    <div className="flex flex-row justify-between items-center p-4">
            <MinorButton
            variant="bordered"
            color="secondary"
            icon={<ArrowRightIcon size={28} />}
            className="rounded-2xl px-2 py-4"
            isIconOnly={true}
            onClick={() => router.back()}   
            />
            <MinorButton
            variant="flat"
            color="primary"
            icon={<BookmarkIcon size={28} />}
            className="rounded-2xl px-2 py-4"
            isIconOnly={true}
            />
    </div>
  );
};
export default ShopIdHeader;
