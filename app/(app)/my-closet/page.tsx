"use client";



import { Category } from "@/stories/Category";
import { useState } from "react";
import { PlusIcon } from "@/stories/Icons";
import { addToast, Button, Pagination, Spinner, useDisclosure } from "@heroui/react";
import Header from "../components/Header";
import { TryOnClothVector } from "@/stories/Vectors";
import { sacramento } from "@/lib/font";
import { useGetUser } from "@/api/user";
import { AddClothesDrawer } from "./components/AddClothesDrawer";
import useSWR from "swr";
import { axiosCoreWithAuth, fetcher } from "@/lib/axios";
import { endpoints } from "@/api/endpoints";
import { MyClothesResponseType } from "@/types/MyClothesResponse.type";
import { ClosetCard } from "@/stories/ClosetCard";


export default function Page() {

  const { userInfo } = useGetUser(30000);

  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const handleCategoryChange = (v: string) => {
    setSelectedCategory(v)
  }

  const addClothesDrawer = useDisclosure({defaultOpen: false});

  const categoryItems = [
    { key: 'all', title: 'همه' },
    { key: 'upper', title: 'بالا تنه' },
    { key: 'lower', title: 'پایین تنه' },
  ];
  if ((userInfo as unknown as {gender: number}).gender == 2) {
    categoryItems.push({key: 'whole', title: 'تمام تنه'})
  }

  

  const [page, setPage] = useState(1)
  let URL = `${endpoints.user.clothes}?paginate=1&page=${page}&per_page=10`;


  const { data: dmEmp } = useSWR<unknown>(URL, fetcher)

  if (selectedCategory === 'upper')  URL += '&clothes_type=1'
  if (selectedCategory === 'lower')  URL += '&clothes_type=2'
  if (selectedCategory === 'whole')  URL += '&clothes_type=3'
  const { data, isLoading, error, mutate } = useSWR<unknown>(URL, fetcher)


  const response = data as unknown as MyClothesResponseType
  const items = response?.object?.data || []
  const isEmpty = (dmEmp as MyClothesResponseType)?.object?.total === 0;

  const isCurrentEmpty = (data as MyClothesResponseType)?.object?.total === 0;
  
  const axios = axiosCoreWithAuth()
  const onDelete = async (id: number) => {
    try {
      await axios.delete(`/user/clothes/${id}`)
      mutate()
      addToast({
        title: 'لباس با موفقیت حذف شد',
        color: 'success',
      })
    } catch (error) {
      console.log(error)
      addToast({
        title: 'خطا در حذف لباس',
        color: 'danger',
      })
    }
    
  }


  return (
    <div className="flex flex-col w-full h-full">
      <Header
        variant="side"
        title="کـمد لبـاس مـن!"
        endContent={!isLoading && !isEmpty && !error && (
          <Button
            variant='flat'
            color='primary'
            size='md'
            startContent={(
              <PlusIcon size={36} />
            )}
            className='h-14 rounded-2xl shrink-0'
            onPress={() => addClothesDrawer.onOpen()}
          >
            افزودن لباس
          </Button>
        )}
      />
      {!isLoading && !isEmpty && !error && (
        <div className="flex flex-col gap-5 px-5 relative">
          <Category
            variant="primary"
            items={categoryItems}
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="flex justify-center items-center sticky top-[112px] py-2 z-30 bg-white"
          />
          <div className='grid grid-cols-2 gap-4'>
            {items.map((item) => (
              <ClosetCard
                key={item.id}
                variant="primary"
                imageUrl={process.env.NEXT_PUBLIC_STORAGE_BASE_URL + item.image}
                matchPercentage={item.match_percentage}
                // link={`/my-closet/${item.id}`}
                onDelete={() => onDelete(item.id)}
              />
            ))}
          </div>
          <div className="flex justify-center items-center">
            <Pagination
              total={Math.ceil(response?.object?.total / response?.object?.per_page)}
              page={page}
              onChange={(page) => setPage(page)}
            />
          </div>
        </div>
      )}
      {!isLoading && !isEmpty && isCurrentEmpty && !error && (
        <div className="flex flex-col justify-center gap-10 h-full w-full px-5 relative">
          <div className="flex justify-center items-center">
            <TryOnClothVector />
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <span className={`${sacramento.className} text-3xl font-bold text-secondary-200`}>Your closet is empty</span>
            <span className="text-lg text-secondary font-semibold">{(userInfo as unknown as {first_name: string})?.first_name || "کاربر"} عزیز!</span>
            <span className="text-lg text-secondary font-semibold">
              تا حالا لباس
              {" "}
              {categoryItems.find((v) => (v.key === selectedCategory))?.title}
              {" "}
              اضافه نکردی!
            </span>
            <Button
              variant='flat'
              color='primary'
              size='md'
              className='h-12 rounded-2xl shrink-0'
              onPress={() => setSelectedCategory("all")}
            >
              مشاهده همه لباس ها
            </Button>
          </div>
        </div>
      )}
      {!isLoading && isEmpty && !error && (
        <div className="flex flex-col justify-center gap-10 h-full w-full px-5 relative">
          <div className="flex justify-center items-center">
            <TryOnClothVector />
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <span className={`${sacramento.className} text-3xl font-bold text-secondary-200`}>Your closet is empty</span>
            <span className="text-lg text-secondary font-semibold">{(userInfo as unknown as {first_name: string})?.first_name || "کاربر"} عزیز!</span>
            <span className="text-lg text-secondary font-semibold">کمد لباس شما خالی هست!</span>
            <Button
              variant='flat'
              color='primary'
              size='md'
              startContent={(
                <PlusIcon size={36} />
              )}
              className='h-14 rounded-2xl shrink-0'
              onPress={() => addClothesDrawer.onOpen()}
            >
              افزودن لباس
            </Button>
          </div>
        </div>
      )}
      {isLoading && !error && (
        <div className="flex justify-center items-center h-full w-full">
          <Spinner size="lg" color="primary" />
        </div>
      )}
      {!isLoading && !!error && (
        <div className="flex flex-col justify-center items-center h-full w-full text-red-500 ">
          <span className="font-bold">خطا در دریافت کمد من</span>
          <span>{error?.message}</span>
        </div>
      )}
      <AddClothesDrawer
        isOpen={addClothesDrawer.isOpen}
        onOpen={addClothesDrawer.onOpen}
        onClose={addClothesDrawer.onClose}
      />
    </div>
  )

}
