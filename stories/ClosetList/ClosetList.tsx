import { MyClothesResponseType } from '@/types/MyClothesResponse.type';
import { Pagination } from '@heroui/react';
import Masonry from 'react-masonry-css';
import { ClosetCard } from '../ClosetCard';

export interface ClosetListProps {
  userName: string;
  total: number;
  perPage: number;
  page: number;
  items: MyClothesResponseType['object']['data'];
  onDelete: (id: number) => void;
  onPageChange: (page: number) => void;
}

export default function ClosetList({
  userName,
  items,
  onDelete,
  total,
  perPage,
  page,
  onPageChange,
}: ClosetListProps) {
  return (
    <>
      <Masonry breakpointCols={2} className="flex gap-4" columnClassName="flex flex-col gap-4">
        {items.map((item) => (
          <ClosetCard
            key={item.id}
            userName={userName}
            link={item.id ? `/my-closet/${item.id}` : '/my-closet'}
            variant="primary"
            imageUrl={item.image}
            matchPercentage={item.match_percentage}
            title={item.title}
            onDelete={() => onDelete(item.id)}
            isPending={item.process_status === 1}
          />
        ))}
      </Masonry>
      {total > 0 && (
        <div className="flex justify-center items-center mt-4 z-10">
          <Pagination
            total={Math.ceil(total / perPage)}
            page={page}
            onChange={(page) => onPageChange(page)}
          />
        </div>
      )}
    </>
  );
}
