'use client';

import { useGetClothe } from '@/api/clothe';
import { useGetUser } from '@/api/user';
import { ClosetCard } from '@/stories/ClosetCard';
import { ArrowRightIcon, PlusIcon } from '@/stories/Icons';
import { ItemSetsSwiper } from '@/stories/ItemSetsSwiper';
import { Title } from '@/stories/Title';
import { SetType } from '@/types/MyClothesResponse.type';
import { Button, ScrollShadow, useDisclosure } from '@heroui/react';
import { useRouter } from 'next/navigation';
import { use } from 'react';
import Header from '../../components/Header';
import { AddClothesDrawer } from '../components/AddClothesDrawer';
import Error from '../error';
import Loading from '../loading';

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  const router = useRouter();

  const { userInfo } = useGetUser();

  const { clothe, clotheLoading, clotheError, fetchClothe, deleteClothes } = useGetClothe(id);

  const addClothesDrawer = useDisclosure({ defaultOpen: false });
  const Sets: SetType[] = clothe?.sets || [];

  // const allSets: SetType[] = clothes.flatMap((c: MyClothesType) => c.sets || []);

  // const bestSet =
  //   allSets.length > 0
  //     ? allSets.reduce(
  //         (prev, current) =>
  //           (current?.clothes?.[0]?.match_percentage || 0) >
  //           (prev?.clothes?.[0]?.match_percentage || 0)
  //             ? current
  //             : prev,
  //         allSets[0]
  //       )
  //     : null;

  if (clotheLoading) return <Loading />;
  if (!clotheLoading && clotheError) return <Error message={clotheError?.message} />;

  return (
    <div className="flex flex-col w-full h-full">
      <Header
        variant="centered"
        title="کـمد لبـاس مـن!"
        startContent={
          <Button
            variant="bordered"
            color="secondary"
            size="lg"
            isIconOnly
            className="h-14 w-14 rounded-2xl shrink-0"
            onPress={() => router.push('/my-closet')}
          >
            <ArrowRightIcon size={36} />
          </Button>
        }
        endContent={
          <Button
            variant="flat"
            color="success"
            size="md"
            startContent={
              <span className="text-success">
                <PlusIcon size={36} />
              </span>
            }
            isIconOnly
            className="h-14 w-14 rounded-2xl shrink-0"
            onPress={addClothesDrawer.onOpen}
          ></Button>
        }
      />
      {!clotheLoading && !clotheError && (
        <ScrollShadow
          visibility={'bottom'}
          hideScrollBar
          className="flex-1 overflow-y-auto  max-w-screen-sm overflow-x-hidden px-4 pb-36 bg-white"
        >
          <div className="flex flex-col w-full items-center gap-12">
            <div className="flex flex-col w-full items-center gap-6">
              <Title
                withStar={false}
                text="Your clothe"
                description={clothe?.title || 'لباس شما'}
              />
              <div className="flex justify-center w-full">
                <div className="w-full px-4">
                  <ClosetCard
                    userName={userInfo.first_name}
                    variant="primary"
                    isSliderActive
                    imageUrl={clothe.image}
                    matchPercentage={clothe.match_percentage}
                    onDelete={() => deleteClothes()}
                  />
                </div>
              </div>
              {Sets.length > 0 && (
                <div className="w-full flex justify-center">
                  <ItemSetsSwiper sets={Sets} />
                </div>
              )}
            </div>

            {/* <div className="w-full flex flex-col gap-10 justify-center items-center">
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
            </div> */}
          </div>
        </ScrollShadow>
      )}

      <AddClothesDrawer
        isOpen={addClothesDrawer.isOpen}
        onOpen={addClothesDrawer.onOpen}
        onClose={addClothesDrawer.onClose}
        onSuccess={fetchClothe}
      />
    </div>
  );
}
