import { ProductSlider } from "@/stories/ProductSlider";
import ShopIdHeader from "../../components/shop-id-header/shop-id-header";


export default async function Page({
                                     params,
                                   }: {
  params: Promise<{ id: string }>
}) {
  const {  } = await params;

  const images = [
    "/images/product1.jpg",
    "/images/product2.jpg", 
    "/images/product3.jpg",
    "/images/product4.jpg"
  ];

  return (
    <main className="flex flex-col w-full h-screen overflow-y-auto overflow-x-hidden">
      <div className="sticky top-0 z-10 bg-white pb-5">
        <ShopIdHeader />
      </div>

      <div className="w-full px-5">
        <ProductSlider images={images} />
      </div>
</main>
  );
}