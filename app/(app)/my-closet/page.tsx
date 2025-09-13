'use client';

import { useGetClothes } from '@/api/clothe';
import { useGetUser } from '@/api/user';
import { SacramentoLocal } from '@/lib/font';
import { Category } from '@/stories/Category';
import ClosetList from '@/stories/ClosetList/ClosetList';
import ClosetEmptyState from '@/stories/EmptyCloset/EmptyCloset';
import { PlusIcon } from '@/stories/Icons';
import { Search } from '@/stories/Search';
import { MyClothesType } from '@/types/MyClothesResponse.type';
import { Button, ScrollShadow, useDisclosure } from '@heroui/react';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import { AddClothesDrawer } from './components/AddClothesDrawer';
import Error from './error';
import Loading from './loading';

export default function Page() {
  const { userInfo } = useGetUser();

  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchText, setSearchText] = useState<string | undefined>(undefined);
  const [statusFilter, setStatusFilter] = useState<number | undefined>(undefined);

  const addClothesDrawer = useDisclosure({ defaultOpen: false });

  const categoryItems = [
    { key: 'all', title: 'همه لباس‌ها', enTitle: 'All Clothes' },
    { key: 'upper', title: 'بالا تنه', enTitle: 'Upper body clothing' },
    { key: 'lower', title: 'پایین تنه', enTitle: 'Lower body clothing' },
  ];

  if (userInfo?.gender === 2)
    categoryItems.push({ key: 'whole', title: 'تمام تنه', enTitle: 'Full-body clothing' });

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
  } = useGetClothes(page, selectedCategory, searchText, statusFilter);

  useEffect(() => {
    setSearchText(undefined);
    setPage(1);
  }, [selectedCategory]);

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
                <span className="text-success">
                  <PlusIcon size={36} />
                </span>
              }
              className="h-14 rounded-2xl shrink-0 bg-success-50 border border-success text-black"
              onPress={addClothesDrawer.onOpen}
            >
              افزودن لباس
            </Button>
          )
        }
      />
      <ScrollShadow
        visibility={'bottom'}
        hideScrollBar
        className="overflow-y-auto px-4 pb-36 bg-white pt-1"
      >
        {/* Category*/}
        {!clothesLoading && !clothesEmpty && !clothesError && (
          <>
            <div className="w-full">
              <Search
                withFilter={true}
                title="جستجوی لباس"
                onSearch={(val) => {
                  setPage(1);
                  setSearchText(val);
                }}
                searchText={searchText}
                statusFilter={statusFilter}
                onStatusChange={(status) => {
                  setPage(1);
                  setStatusFilter(status);
                }}
              />
            </div>
            <Category
              variant="primary"
              items={categoryItems}
              value={selectedCategory}
              onChange={setSelectedCategory}
              className="flex justify-center items-center py-2 z-30 bg-white/40 px-0"
            />
            <div
              className={`text-2xl text-secondary-100 px-4 py-2 ${SacramentoLocal.className}`}
            >
              {categoryItems.find((v) => v.key === selectedCategory)?.enTitle}
            </div>
          </>
        )}

        {/* Clothes List*/}

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
