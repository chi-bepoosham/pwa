import React from 'react';
import MainHeader from '../components/header/main-header';
// import {ProductCard} from '@/stories/ProductCard';
import ShopProductList from '../components/shop-product-list';
import { BottomNavigation } from '@/stories/BottomNavigation';
const objectt = [
  {
    price: '859.000',
    description: 'XL. 2X. 3X',
    title: 'کلاه پشم‌گاو',
    imageUrl: 'img.svg',
    variant: 'solid',
    colors: ['##8E9880', '#47A3FF', '#DB9155', '#F5A623'],
    withArrow: false,
  },
  {
    price: '859.000',
    description: 'XL. 2X. 3X',
    title: 'کلاه پشم‌گاو',
    imageUrl: 'img.svg',
    variant: 'bordered',
    colors: ['##8E9880', '#47A3FF', '#DB9155', '#F5A623'],
    withArrow: false,
  },
  {
    price: '859.000',
    description: 'XL. 2X. 3X',
    title: 'کلاه پشم‌گاو',
    imageUrl: 'img.svg',
    variant: 'bordered',
    colors: ['##8E9880', '#47A3FF', '#DB9155', '#F5A623'],
    withArrow: false,
  },
  {
    price: '859.000',
    description: 'XL. 2X. 3X',
    title: 'کلاه پشم‌گاو',
    imageUrl: 'img.svg',
    variant: 'solid',
    colors: ['##8E9880', '#47A3FF', '#DB9155', '#F5A623'],
    withArrow: false,
  },
];
export default function Page() {
  // Type assertion to specify variant is specifically "bordered" | "solid"
  const typedObjectt = objectt.map(item => ({
    ...item,
    variant: item.variant as "bordered" | "solid"
  }));

  return (
    <main className="flex flex-col w-full h-screen overflow-y-auto overflow-x-hidden">
      <div className="sticky top-0 z-10 bg-blue-500 pb-5">
      <MainHeader />
      </div>
      
      <div className="px-8 py-6 bg-green-500">
        
        <ShopProductList 
          secondTitle='مـناسب هـوای بـرفی...' 
          title='Winter' 
          listItems={typedObjectt} 
        />
      </div>
      <div className="sticky z-10 bottom-0 w-full py-2.5 bg-red-500">
        <BottomNavigation />
      </div>
    </main>
  );
}
