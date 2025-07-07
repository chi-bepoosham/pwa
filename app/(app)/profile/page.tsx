'use client'

import Header from "../components/Header"
import Link from "next/link"
import { Button } from "@heroui/react"
import { ArrowRightIcon, ShoppingBagIcon } from "@/stories/Icons"
import { useRouter } from "next/navigation"



export default function Home() {

  const router = useRouter()


  return (
    <div className="flex flex-col w-full">
      <Header
        variant="centered"
        title="تنظیمات"
        startContent={(
          <Button
            variant='bordered'
            color='secondary'
            size='lg'
            isIconOnly
            className='h-14 w-14 rounded-2xl shrink-0'
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
            className='h-14 w-14 rounded-2xl shrink-0'
            as={Link}
            href="/profile"
            isDisabled
          >
            <ShoppingBagIcon size={36} />
          </Button>
        )}
      />
      <div className="w-full flex flex-col gap-4 pb-16">
        
      </div>
    </div>
  )
}
