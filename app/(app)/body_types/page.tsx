'use client';

import { useGetUser } from '@/api/user';
import { BodyType } from '@/stories/BodyType';
import { CrossIcon } from '@/stories/Icons';
import { Button } from '@heroui/react';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import Error from './error';
import Loading from './loading';

const bodyTypes = {
  male: [
    {
      title: 'مستطیل',
      selectedType: 'rectangle',
      number: 1,
      strength:
        'در این تایپ اعضای بدن با هم هماهنگند، عرض شانه‌ها با کمر و عرض لگن نسبت مناسبی دارد و هیچ کدام به نسبت دیگری زیادی پهن یا باریک نیستند.',
      weaknessPoints:
        'به دلیل یکنواختی در عرض شانه‌ها و کمر، ظاهر بدن ممکن است کم‌حجم یا فاقد فرم مشخص به نظر برسد.',
    },
    {
      title: 'مثلث چپه',
      selectedType: 'reverseTriangle',
      number: 2,
      strength:
        'این بادی‌تایپ در نظر بسیاری به عنوان بادی‌تایپ مردانه ایده‌آل محسوب می‌شود. شاخص آن شانه‌های پهن‌تر نسبت به لگن است.',
      weaknessPoints:
        'اگرچه شانه‌ها پهن هستند، اما ممکن است لگن باریک‌تر دیده شود و تناسب پایین‌تنه کمتر به چشم بیاید.',
    },
    {
      title: 'دایره',
      selectedType: 'circle',
      number: 3,
      strength:
        'پهن‌ترین قسمت بدن میانه بدن یا کمر است. از شاخص‌های این بادی‌تایپ دست و پاهای متناسب و زیباست.',
      weaknessPoints:
        'تمرکز وزن در ناحیه میانی می‌تواند باعث دیده شدن شکم یا پهلوها شود و فرم V در بالا تنه کمتر مشخص باشد.',
    },
  ],
  female: [
    {
      title: 'ساعت شنی',
      selectedType: 'hourglass',
      number: 1,
      strength:
        'در نظر بسیاری بادی‌تایپ ایده‌آل زنانه محسوب می‌شود. شاخص آن عرض شانه و لگن تقریبا هم اندازه و کمر باریک است.',
      weaknessPoints:
        'به دلیل فرم برجسته، اگر وزن اضافه شود ممکن است سریع در ناحیه لگن و سینه ظاهر شود و تناسب از بین برود.',
    },
    {
      title: 'مستطیل',
      selectedType: 'rectangle',
      number: 2,
      strength:
        'اعضای بدن با هم هماهنگند، عرض شانه‌ها، کمر و لگن تقریبا هم اندازه است و باریکی کمر مشخص نیست.',
      weaknessPoints:
        'به دلیل نبود باریکی واضح در کمر، فرم بدن ممکن است صاف یا کمتر منحنی به نظر برسد.',
    },
    {
      title: 'مثلث چپه',
      selectedType: 'reverseTriangle',
      number: 3,
      strength:
        'به عنوان بادی‌تایپ افراد ورزشکار شناخته می‌شود. شاخص آن شانه‌های پهن‌تر نسبت به کمر و لگن است.',
      weaknessPoints:
        'در صورت عدم تعادل، پایین‌تنه ممکن است باریک یا کم‌حجم دیده شود و تأکید زیادی روی بالاتنه باشد.',
    },
    {
      title: 'مثلث',
      selectedType: 'triangle',
      number: 4,
      strength:
        'به عنوان یکی از زنانه‌ترین حالات بدن شناخته می‌شود. شاخص آن لگن پهن‌تر نسبت به شانه و کمر و باریکی کمر مشهود است.',
      weaknessPoints:
        'به دلیل پهنی لگن، در صورت انتخاب لباس نامناسب ممکن است پایین‌تنه بزرگ‌تر از حد معمول دیده شود.',
    },
    {
      title: 'دایره',
      selectedType: 'circle',
      number: 5,
      strength:
        'پهن‌ترین قسمت بدن میانه بدن یا کمر است. از شاخص‌های این بادی‌تایپ دست و پاهای متناسب و زیباست.',
      weaknessPoints:
        'تمایل به تجمع چربی در ناحیه شکم وجود دارد و این باعث می‌شود کمر کمتر باریک دیده شود.',
    },
  ],
} as const;

export default function Page() {
  const { userInfo, userInfoLoading, userInfoError } = useGetUser(10000);
  
  const router = useRouter();

  if (userInfoLoading) return <Loading />;
  if (userInfoError || !userInfo) return <Error message={userInfoError.message} />;

  const gender = userInfo.gender ;
  const genderKey = gender === 1 ? 'male' : 'female';

  return (
    <div className="flex flex-col w-full pb-4">
      <Header
        variant="side"
        title="انــواع فــرم بــدن!"
        endContent={
          <Button
            variant="bordered"
            color="secondary"
            size="lg"
            isIconOnly
            className="h-14 w-14 rounded-2xl shrink-0"
            onPress={() => {
              router.replace('/home');
            }}
          >
            <CrossIcon size={48} />
          </Button>
        }
      />

      <div className="flex flex-col gap-5 justify-center items-center px-6 pb-6">
        {bodyTypes[genderKey]?.map((item) => (
          <BodyType key={item.number} {...item} />
        ))}
      </div>
    </div>
  );
}
