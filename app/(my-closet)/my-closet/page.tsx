import MyClosetHeader from '@/app/(my-closet)/components/layout/my-closet-header';
import { Category } from '@/stories/Category';
import { Brand } from '@/stories/Brand';
import { BottomNavigation } from '@/stories/BottomNavigation';
import { ProductCard } from '@/stories/ProductCard/ProductCard';

const MyCloset = () => {
  return (
    <div className="flex flex-col w-full h-screen overflow-y-auto overflow-x-hidden">
      <div className="flex-grow">
        <div className="sticky top-0 z-10 bg-white pb-5">
          <MyClosetHeader />
        </div>

        {/*main part*/}
        <main className="flex flex-col gap-7 p-3">
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
          <div className="grid grid-cols-2 gap-4 w-full">
            <ProductCard
            isCloset={true}
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
      </div>

      <div className="sticky z-10 bottom-0 w-full py-2.5 bg-white">
        <BottomNavigation />
      </div>
    </div>
  );
};

export default MyCloset;


