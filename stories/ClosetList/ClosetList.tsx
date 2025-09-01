import { MyClothesResponseType } from '@/types/MyClothesResponse.type';
import { Pagination } from '@heroui/react';
import { ClosetCard } from '../ClosetCard';

export default function ClosetList({
  items,
  onDelete,
  total,
  perPage,
  page,
  onPageChange,
}: {
  items: MyClothesResponseType['object']['data'];
  onDelete: (id: number) => void;
  total: number;
  perPage: number;
  page: number;
  onPageChange: (page: number) => void;
}) {
  return (
    <>
      <div className="columns-2 gap-4">
        {items.map((item) => (
          <div key={item.id} className="mb-4 break-inside-avoid">
            <ClosetCard
              link={item.id ? `/my-closet/${item.id}` : '/my-closet'}
              variant="primary"
              imageUrl={'https://core.chibepoosham.app/' + item.image}
              matchPercentage={item.match_percentage}
              onDelete={() => onDelete(item.id)}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center">
        <Pagination
          total={Math.ceil(total / perPage)}
          page={page}
          onChange={(page) => onPageChange(page)}
        />
      </div>
    </>
  );
}
