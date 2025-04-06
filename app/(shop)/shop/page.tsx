import React from 'react';
import MainHeader from './components/header/main-header';
import { ProductCard } from '@/stories/ProductCard';

export default function Page() {
  return (
    <>
      <MainHeader />
      <div className="px-8 grid grid-cols-2 gap-4">
        {Array.from(Array(10).keys()).map((item) => {
          return (
            <ProductCard
              {...{
                price: '859.000',
                description: 'XL. 2X. 3X',
                title: 'کلاه پشم‌گاو',
                imageUrl: 'img.png',
                variant: 'bordered',
                colors: ['#FF5733', '#33FF57', '#3357FF', '#F5A623'],
                withArrow: false,
              }}
            />
          );
        })}
      </div>
    </>
  );
}
