"use client";
import Header from "../../components/Header"
import { Button } from "@heroui/react";
//import { ArrowRightIcon, ShoppingBagIcon } from "@/stories/Icons"
import { useRouter } from "next/navigation"

import { Logo } from "@/stories/Logo";
import { Social } from "@/stories/Social";


export default function Home() {

    const router = useRouter()

    return(
        <div className="flex flex-col w-full">
            <Header
            variant="centered"
            title="دربارۀ تیم مــــا"
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
        />
        <div className="flex flex-col justify-center gap-20 h-full">
        <Logo withLogoType={true}/>
        <div className="w-full max-w-[500px] mx-auto text-medium text-foreground">
        لورم ایپسوم متن ساختگی با تولید سـادگی نـــامفهوم از صنعت
چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه
روزنامه و مجله در ستون و ســــطرآنچنان که لازم است و بـــرای
شرایط فعلی تکنولوژی مورد نـــیاز و کاربردهای متنوع بـا هدف
بهبود ابزارهای کاربردی می باشد.
        </div>
        <div>
            {/* راه های ارتباطی */}
        </div>
        <Social/>
        </div>
        </div>
    )
}
