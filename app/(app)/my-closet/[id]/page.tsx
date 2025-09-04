'use client';

import { useGetClothes } from '@/api/clothe';
import { useGetUser } from '@/api/user';
import { Category } from '@/stories/Category';
import { ClosetSlider } from '@/stories/ClosetSlider';
import ClosetEmptyState from '@/stories/EmptyCloset/EmptyCloset';
import { MagicStarsIcon, PlusIcon } from '@/stories/Icons';
import { ItemSetsSwiper } from '@/stories/ItemSetsSwiper';
import { SuggestedSet } from '@/stories/SuggestedSet';
import { Title } from '@/stories/Title';
import { MyClothesType, SetType } from '@/types/MyClothesResponse.type';
import { Button, ScrollShadow, useDisclosure } from '@heroui/react';
import { use, useState } from 'react';
import Header from '../../components/Header';
import { AddClothesDrawer } from '../components/AddClothesDrawer';
import Error from '../error';
import Loading from '../loading';

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const initialId = Number(id);

  const { userInfo } = useGetUser();

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeSetClothes, setActiveSetClothes] = useState<MyClothesType[]>([]);
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
    clothesLoading,
    clothesError,
    clothesEmpty,
    currentCategory,
    fetchClothes,
    deleteClothes,
  } = useGetClothes(1, selectedCategory);

  const addClothesDrawer = useDisclosure({ defaultOpen: false });
  const Sets: SetType[] = activeSetClothes.flatMap((c) => c.sets || []);

  const allSets: SetType[] = clothes.flatMap((c: MyClothesType) => c.sets || []);

  const bestSet =
    allSets.length > 0
      ? allSets.reduce(
          (prev, current) =>
            (current?.clothes?.[0]?.match_percentage || 0) >
            (prev?.clothes?.[0]?.match_percentage || 0)
              ? current
              : prev,
          allSets[0]
        )
      : null;

  if (clothesLoading) return <Loading />;
  if (!clothesLoading && clothesError) return <Error message={clothesError?.message} />;

  return (
    <div className="flex flex-col w-full h-full">
      <Header
        variant="side"
        title="کـمد لبـاس مـن!"
        endContent={
          <Button
            variant="flat"
            color="primary"
            size="md"
            startContent={
              <span className="text-success">
                <PlusIcon size={36} />
              </span>
            }
            className="h-14 rounded-3xl shrink-0 bg-success-50 border border-success text-black"
            onPress={addClothesDrawer.onOpen}
          >
            افزودن لباس
          </Button>
        }
      />
      {/* Category*/}
      {!clothesLoading && !clothesEmpty && !clothesError && (
        <ScrollShadow
          hideScrollBar
          className="flex-1 overflow-y-auto  max-w-screen-sm overflow-x-hidden px-5 pb-36 bg-white"
        >
          <Category
            variant="primary"
            items={categoryItems}
            value={selectedCategory}
            onChange={setSelectedCategory}
            className="flex justify-center items-center py-2 z-30 bg-white/40"
          />
          <div className="flex flex-col w-full items-center gap-12">
            <div className="flex flex-col w-full items-center gap-6">
              <div className="p-4 flex justify-center w-full">
                <div className="p-4">
                  <ClosetSlider
                    category={
                      categoryItems.find((v) => v.key === selectedCategory)?.enTitle ||
                      'All clothes'
                    }
                    items={clothes}
                    userName={userInfo?.first_name}
                    onDelete={deleteClothes}
                    initialId={initialId}
                    onActiveChange={(item) => setActiveSetClothes([item])}
                  />
                </div>
              </div>
              {Sets.length > 0 && (
                <div className="w-full flex justify-center">
                  <ItemSetsSwiper sets={Sets} />
                </div>
              )}
            </div>

            <div className="w-full flex flex-col gap-10 justify-center items-center">
              <div className="flex flex-row justify-center items-center gap-2">
                <i className="text-primary">
                  <MagicStarsIcon size={20} />
                </i>
                <Title
                  withStar={false}
                  text="Recommended sets"
                  description="ســـت‌هایی پـــیشنهـــادی"
                />
                <i className="text-primary">
                  <MagicStarsIcon size={20} />
                </i>
              </div>
              {bestSet && (
                <SuggestedSet
                  mainImage={bestSet.clothes?.[0]?.image}
                  subImages={bestSet.clothes?.slice(1).map((c) => c.image) || []}
                  matchPercent={bestSet.clothes?.[1]?.match_percentage || 0}
                />
              )}
            </div>
          </div>
        </ScrollShadow>
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
      <AddClothesDrawer
        isOpen={addClothesDrawer.isOpen}
        onOpen={addClothesDrawer.onOpen}
        onClose={addClothesDrawer.onClose}
        onSuccess={fetchClothes}
      />
    </div>
  );
}
