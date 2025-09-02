'use client';

import { useGetClothes } from '@/api/clothe';
import { useGetUser } from '@/api/user';
import { Category } from '@/stories/Category';
import ClosetList from '@/stories/ClosetList/ClosetList';
import ClosetEmptyState from '@/stories/EmptyCloset/EmptyCloset';
import { PlusIcon } from '@/stories/Icons';
import { MyClothesType } from '@/types/MyClothesResponse.type';
import { Button, ScrollShadow, useDisclosure } from '@heroui/react';
import { useState } from 'react';
import Header from '../components/Header';
import { AddClothesDrawer } from './components/AddClothesDrawer';
import Error from './error';
import Loading from './loading';

export default function Page() {
  const { userInfo } = useGetUser();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const addClothesDrawer = useDisclosure({ defaultOpen: false });
  const [page, setPage] = useState(1);

  const categoryItems = [
    { key: 'all', title: 'همه لباس‌ها' },
    { key: 'upper', title: 'بالا تنه' },
    { key: 'lower', title: 'پایین تنه' },
  ];

  if (userInfo?.gender === 2) categoryItems.push({ key: 'whole', title: 'تمام تنه' });

  const {
    clothes,
    clothesTotal,
    clothesPerPage,
    clothesLoading,
    clothesError,
    clothesEmpty,
    currentCategory,
    fetchClothes,
    deleteClothes,
  } = useGetClothes(page, selectedCategory);

  return (
    <div className="flex flex-col w-full h-full">
      <Header
        variant="side"
        title="کـمد لبـاس مـن!"
        endContent={
          !clothesLoading &&
          !clothesEmpty &&
          !clothesError && (
            <Button
              variant="flat"
              color="secondary"
              size="md"
              startContent={
                <span className='text-success'>
                  <PlusIcon size={36} />
                </span>
              }
              className="h-14 rounded-3xl shrink-0 bg-success-50 border border-success text-black"
              onPress={addClothesDrawer.onOpen}
            >
              افزودن لباس
            </Button>
          )
        }
      />

      {/* Category*/}
      {!clothesLoading && !clothesEmpty && !clothesError && (
        <Category
          variant="primary"
          items={categoryItems}
          value={selectedCategory}
          onChange={setSelectedCategory}
          className="flex justify-center items-center py-2 z-30 bg-white/40"
        />
      )}

      {/* Clothes List*/}
      <ScrollShadow hideScrollBar className="flex-1 overflow-y-auto px-5 pb-36 bg-white">
        {!clothesLoading && !clothesEmpty && !clothesError && (
          <ClosetList
            items={clothes.map((item: MyClothesType) => ({
              ...item,
              title: item.process_status === 1 ? 'در حال بررسی...' : item.title,
              disabled: item.process_status === 1,
            }))}
            onDelete={deleteClothes}
            total={clothesTotal}
            perPage={clothesPerPage}
            page={page}
            onPageChange={setPage}
            userName={userInfo?.first_name}
          />
        )}

        {/* Empty State */}
        {!clothesLoading && !clothesEmpty && clothesTotal === 0 && !clothesError && (
          <ClosetEmptyState
            type="emptyCategory"
            userName={userInfo?.first_name}
            categoryTitle={categoryItems.find((v) => v.key === currentCategory)?.title}
            onShowAll={() => setSelectedCategory('all')}
            onAddClothes={addClothesDrawer.onOpen}
          />
        )}

        {!clothesLoading && clothesEmpty && !clothesError && (
          <ClosetEmptyState
            type="emptyAll"
            userName={userInfo?.first_name}
            onShowAll={() => setSelectedCategory('all')}
            onAddClothes={addClothesDrawer.onOpen}
          />
        )}

        {clothesLoading && <Loading />}
        {!clothesLoading && !!clothesError && <Error message={clothesError?.message} />}
      </ScrollShadow>

      <AddClothesDrawer
        isOpen={addClothesDrawer.isOpen}
        onOpen={addClothesDrawer.onOpen}
        onClose={addClothesDrawer.onClose}
        onSuccess={fetchClothes}
      />
    </div>
  );
}
