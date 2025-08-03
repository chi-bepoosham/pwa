'use client'

import Header from "../components/Header"
import Link from "next/link"
import { Button } from "@heroui/react"
import { ArrowRightIcon, ShoppingBagIcon } from "@/stories/Icons"
import { useRouter } from "next/navigation"
import { DashboardItems } from "@/stories/DashboardItems"
import { Fitting } from "@/stories/Fitting"
import { SettingItems } from "@/stories/Setting/SettingItems"
import { Banner } from "@/stories/Banner"



export default function Home() {
  const router = useRouter()

  return (
    <div className="flex flex-col w-full overflow-hidden relative min-h-screen">
      <Header
        variant="centered"
        title="تنظیمات"
        startContent={(
          <Button
            variant='bordered'
            color='secondary'
            size='lg'
            isIconOnly
            className='h-14 w-14 aspect-square rounded-2xl shrink-0'
            onPress={() => router.back()}
          >
            <ArrowRightIcon size={36} />
          </Button>
        )}
        endContent={(
          <Button
            variant='solid'
            color='primary'
            size='lg'
            isIconOnly
            className='h-14 w-14 aspect-square rounded-2xl shrink-0'
            as={Link}
            href="/profile"
            isDisabled
          >
            <ShoppingBagIcon size={36} />
          </Button>
        )}
      />

      <div className="w-full flex flex-col gap-10 relative z-10">
        <DashboardItems/>
        <Fitting/>
        <SettingItems/>
      </div>

      <div className="absolute -bottom-20 w-full z-0">
        <Banner
        textColor="text-primary/50" 
        withStar={true}
        starColor="text-primary"
        />
      </div>
    </div>
  )
}

