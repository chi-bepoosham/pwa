import { Brand } from '@/stories/Brand';
import { ProductCard } from '@/stories/ProductCard';
import { ShopProductItemType } from '@/types/Shop.type';

interface ShopProductList {
  title?: string;
  secondTitle: string;
  listItems: ShopProductItemType[];
  link?: string;
}

const ShopProductList = ({ title, secondTitle, listItems, link }: ShopProductList) => {
  return (
    <section className='w-full'>
      <Brand titleEn={title || ""} titleFa={secondTitle} />
      <div className='grid grid-cols-2 gap-4 mt-5'>
        {listItems.map((item, index) => (
          <ProductCard
            key={`${item.title}-${index}`}
            price={item.price}
            description={item.description}
            title={item.title}
            imageUrl={item.imageUrl}
            variant={item.variant}
            colors={item.colors}
            withArrow={item.withArrow}
            link={link}
          />
        ))}
      </div>
    </section>
  );
};
export default ShopProductList;
