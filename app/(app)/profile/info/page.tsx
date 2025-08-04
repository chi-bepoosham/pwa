"use client";


import Header from "../../components/Header"
import { Button } from "@heroui/react";
import { ArrowRightIcon, LogoutIcon, ShoppingBagIcon } from "@/stories/Icons"
import { useRouter } from "next/navigation"
import { Uploader } from "@/stories/Uploader";
import { MinorInput } from "@/stories/MinorInput";
import { GenderSelection } from "@/stories/GenderSelection";
import { MyBodyTypeCard } from "@/stories/MyBodyTypeCard";



// const userSchema = z.object({
//     name: z
//       .string()
//       .min(3, "نام و فامیل باید حداقل ۳ کاراکتر باشد")
//       .trim()
//       .regex(/^[آ-ی\s]+$/, "نام و فامیل باید فقط شامل حروف فارسی و فاصله باشد"),
//   });




//   type UserFormData = z.infer<typeof userSchema>;



//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<UserFormData>({
//     resolver: zodResolver(userSchema),
//     defaultValues: {
//       name: "",
//     },
//   });



//    // تابع برای مدیریت ارسال فرم
//    const onSubmit = (data: UserFormData) => {
//     console.log("داده معتبر:", data);
//     // اینجا می‌تونید داده رو به سرور بفرستید یا کار دیگه‌ای انجام بدید
//     // مثلاً: router.push("/next-page");
//   };


export default function Home() {

    const router = useRouter()


    

    return(
        <div className="flex flex-col w-full overflow-x-hidden scrollbar-hide relative min-h-screen">
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
            onPress={logout}
            >
                <LogoutIcon size={36} />
            </Button>
              )}
        />
        <div className="w-full flex flex-col gap-10 relative z-10">
            <Uploader
            size="medium"
            title=""
            />
            <div className="w-full max-w-[550px] mx-auto flex flex-col gap-10">
                <MinorInput
                label="مشخصات شما"
                isMultieline={false}
                placeholder="نام و نام‌خانوادگی"
                size="lg"
                type="email"
                />
                <MinorInput
                isMultieline={false}
                placeholder="ایمیل خود را وارد کنید"
                size="lg"
                type="email"
                />
            </div>
            <GenderSelection/>
            <MyBodyTypeCard/>
        </div>
    </div>
    )
}










import { deleteCookie } from 'cookies-next'

export const logout = () => {
  deleteCookie('token') 
  deleteCookie('userInfo')

  window.location.href = '/'
}
