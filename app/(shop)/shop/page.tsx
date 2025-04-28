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
    <main className="h-full">
      <MainHeader />
      <div className="px-8 bg-green-800 h-screen">
        <ShopProductList 
          secondTitle='مـناسب هـوای بـرفی...' 
          title='Winter' 
          listItems={typedObjectt} 
        />
      </div>
      {/* <BottomNavigation/> */}
    </main>
  );
}
