import React from 'react';
import MainHeader from './components/header/main-header';
import { ProductCard } from '@/stories/ProductCard';
import ShopProductList from './components/shop-product-list';
const objectt = [
  {
    price: '859.000',
    description: 'XL. 2X. 3X',
    title: 'کلاه پشم‌گاو',
    imageUrl: 'img.png',
    variant: 'bordered',
    colors: ['#FF5733', '#33FF57', '#3357FF', '#F5A623'],
    withArrow: false,
  },
  {
    price: '859.000',
    description: 'XL. 2X. 3X',
    title: 'کلاه پشم‌گاو',
    imageUrl: 'img.png',
    variant: 'bordered',
    colors: ['#FF5733', '#33FF57', '#3357FF', '#F5A623'],
    withArrow: false,
  },
  {
    price: '859.000',
    description: 'XL. 2X. 3X',
    title: 'کلاه پشم‌گاو',
    imageUrl: 'img.png',
    variant: 'bordered',
    colors: ['#FF5733', '#33FF57', '#3357FF', '#F5A623'],
    withArrow: false,
  },
  {
    price: '859.000',
    description: 'XL. 2X. 3X',
    title: 'کلاه پشم‌گاو',
    imageUrl: 'img.png',
    variant: 'bordered',
    colors: ['#FF5733', '#33FF57', '#3357FF', '#F5A623'],
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
    <>
      <MainHeader />
      <div className="px-8">
        <ShopProductList 
          secondTitle='مـناسب هـوای بـرفی...' 
          title='Winter' 
          listItems={typedObjectt} 
        />
      </div>
    </>
  );
}
