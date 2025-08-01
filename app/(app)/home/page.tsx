'use client'

import { BodyForm } from "@/stories/BodyForm"
// import { Celebrities } from "@/stories/Celebrities"
// import { SuggestionSlider } from "@/stories/SuggestionSlider"
import { endpoints } from "@/api/endpoints"
import useSWR from 'swr';
import { fetcher } from '@/lib/axios';
import Header from "../components/Header"
import { BodyTypeType } from "@/types/BodyType.type"
import Link from "next/link"
import { Button, Spinner } from "@heroui/react"
import { InfoIcon, UserIcon } from "@/stories/Icons"



export default function Home() {

  // const { userInfo , userInfoError } = useGetUser(30000);

  // useEffect(() => {
  //   if(!userInfoError){
  //     console.log(userInfo);
  //     setCookie('userInfo', userInfo ? JSON.stringify(userInfo) : '');
  //   }
  // }, [userInfo]);





  // const celebritiesData = [
  //   {fullName: "صالح", avatar: "https://i.pravatar.cc", id: 1},
  //   {fullName: "ایلیا", avatar: "https://i.pravatar.cc", id: 2},
  //   {fullName: "dsvcs", avatar: "https://i.pravatar.cc", id: 3},
  //   {fullName: "csdcs", avatar: "https://i.pravatar.cc", id: 4},
  // ]

  // const suggestionSliderData = [
  //   {imageUrl: "/124.jpeg", name: "tie"},
  //   {imageUrl: "/124.jpeg", name: "tie"},
  //   {imageUrl: "/124.jpeg", name: "tie"},
  //   {imageUrl: "/124.jpeg", name: "tie"},
  // ]

  const URL = endpoints.user.bodyTypeDetails
  const { data, isLoading, error } = useSWR<unknown>(URL, fetcher)
  const bd = data as {object: {body_type: BodyTypeType}}

  return (
    <div className="flex flex-col w-full">
      <Header
        variant="centered"
        title="فــــرم بـــــدن شـــــما"
        subtitle={(
          <div className='text-primary'>
            {isLoading && !error && (<Spinner size="sm" color="primary" />)}
            {!isLoading && !error && bd?.object.body_type.title}
            {!!error && <p className='text-red-500 truncate'>{error?.message || "خطا در دریافت"}</p>}
          </div>
        )}
        startContent={(
          <Button
            variant='solid'
            color='default'
            size='lg'
            isIconOnly
            className='h-14 w-14 rounded-2xl shrink-0'
            as={Link}
            href="/body_types"
          >
            <InfoIcon size={36} />
          </Button>
        )}
        endContent={(
          <Button
            variant='solid'
            color='primary'
            size='lg'
            isIconOnly
            className='h-14 w-14 rounded-2xl shrink-0'
            as={Link}
            href="/profile"
          >
            <UserIcon size={36} />
          </Button>
        )}
      />
      <div className="w-full flex flex-col gap-4 pb-16">
        <div className="w-full flex justify-center items-center">
          <BodyForm />
        </div>
        {/* <div className="w-full flex justify-center items-center px-8">
          <Celebrities
            description="سلبریتی دیگر"
            number={4}
            celebrities={celebritiesData}
          />
        </div>
        <div className="w-full flex justify-center items-center px-8 pb-10">
          <SuggestionSlider
            slides={suggestionSliderData}
          />
        </div> */}
      </div>
    </div>
  )
}
