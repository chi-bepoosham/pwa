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
      <Masonry breakpointCols={2} className="flex gap-2" columnClassName="flex flex-col gap-2">
        {items.map((item) => (
          <ClosetCard
            key={item.id}
            userName={userName}
            link={item.id ? `/my-closet/${item.id}` : '/my-closet'}
            variant={item.process_status === 3 ? 'error' : 'primary'}
            imageUrl={item.image}
            errorMessage={
              item.process_status === 3 ? item.error_clothes || 'خطایی رخ داد' : undefined
            }
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
