"use client";


import Header from "../../components/Header"
import { Button } from "@heroui/react";
import { ArrowRightIcon, LogoutIcon, ShoppingBagIcon } from "@/stories/Icons"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Logo } from "@/stories/Logo";
import { link } from "fs";
import { Uploader } from "@/stories/Uploader";
import { MinorInput } from "@/stories/MinorInput";
import { GenderSelection } from "@/stories/GenderSelection";
import { MyBodyTypeCard } from "@/stories/MyBodyTypeCard";




export default function Home() {

    const router = useRouter()

    return(
        <div className="flex flex-col w-full">
            <Header
            variant="centered"
            title="اطلاعات حساب کاربری"
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
            variant='bordered'
            color='secondary'
            size='lg'
            isIconOnly
            className='h-14 w-14 rounded-2xl shrink-0'
            onPress={() => router.back()}
            >
                <LogoutIcon size={36} />
            </Button>
              )}
        />
        <div className="flex flex-col justify-center gap-10">
            <Uploader
            size="medium"
            title=""
            />
            <div className="w-full max-w-[550px] mx-auto flex flex-col gap-10">
                <MinorInput
                label="مشخصات شما"
                size="lg"
                isMultieline={false}
                />
                <MinorInput
                isMultieline
                size="lg"
                type="email"
                />
            </div>
            <GenderSelection/>
            <div className="w-full max-w-[550px] mx-auto">
            <MyBodyTypeCard/>
            </div>
        </div>
        </div>
    )
}