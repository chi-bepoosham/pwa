import MyClosetHeader from '@/app/(my-closet)/components/layout/my-closet-header';
import { Category } from '@/stories/Category';
import { Brand } from '@/stories/Brand';
import { BottomNavigation } from '@/stories/BottomNavigation';
import { ProductCard } from '@/stories/ProductCard/ProductCard';

const MyCloset = () => {
  return (
    <>
      <div className="flex flex-col justify-center w-full h-full overflow-x-hidden">
        <MyClosetHeader />


        {/*main part*/}
        <main className="w-full h-full flex flex-col gap-7 p-1.5">
          <div className="w-full">
            <Category theme="light" />
          </div>
          <div className="w-full flex justify-start">
            <Brand
              titleEn="All clothes"
              titleFa="مـناسب هـوای بـرفی..."
            />
          </div>
          {/*Cloth Part*/}
          <div className="grid grid-cols-2 gap-4 w-full h-full">
            <ProductCard
              price="859.000"
              description="XL. 2X. 3X"
              title="کلاه پشم‌گاو"
              imageUrl="img.png"
              variant="bordered"
              colors={[
                '#FF5733',
                '#33FF57',
                '#3357FF',
                '#F5A623'
              ]}
              withArrow={false}
            />
            <ProductCard
              price="859.000"
              description="XL. 2X. 3X"
              title="کلاه پشم‌گاو"
              imageUrl="img.png"
              variant="bordered"
              colors={[
                '#FF5733',
                '#33FF57',
                '#3357FF',
                '#F5A623'
              ]}
              withArrow={false}
            />
          </div>
        </main>

        <div className="w-full py-2.5">
            <BottomNavigation />
        </div>
      </div>


    </>
  );
};
export default MyCloset;