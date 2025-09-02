import { MyClothesType } from "@/types/MyClothesResponse.type";
import InfiniteScroll from "react-infinite-scroll-component";
import { ClosetCard } from "../ClosetCard";

export default function ClosetListInfinite({
  userName,
  items,
  hasMore,
  loadMore,
  onDelete,
}: {
  userName: string;
  items: MyClothesType[];
  hasMore: boolean;
  loadMore: () => void;
  onDelete: (id: number) => void;
}) {
  return (
    <InfiniteScroll
      dataLength={items.length}
      next={loadMore}
      hasMore={hasMore}
      loader={<p className="text-center py-4">در حال بارگذاری...</p>}
      endMessage={<p className="text-center py-4">همه لباس‌ها لود شد ✅</p>}
      scrollThreshold={0.9}
      style={{ overflow: "visible" }} // اجازه میده scroll روی parent باشه
    >
      <div className="columns-2 gap-4">
        {items.map((item) => (
          <div key={item.id} className="mb-4 break-inside-avoid">
            <ClosetCard
              userName={userName}
              link={item.id ? `/my-closet/${item.id}` : "/my-closet"}
              variant="primary"
              imageUrl={item.image}
              matchPercentage={item.match_percentage}
              title={item.title}
              onDelete={() => onDelete(item.id)}
              isPending={item.process_status === 1}
            />
          </div>
        ))}
      </div>
    </InfiniteScroll>
  );
}
