"use client"
import { ShoppingCart, ShoppingCartProps } from "@/stories/ShoppingCart";
import CartHeader from "./components/cart-header/cart-header";
import { Divider } from "@heroui/react";
import React from "react";
import { MinorButton } from "@/stories/MinorButton";
import { useRouter } from 'next/navigation';

export default function Page() {

const router = useRouter();


const handleGoForward = () => {
  router.push("/cart/personal-info");
}



  const cartItems: ShoppingCartProps[] = [
    {
      material: "پلیور آستین بلند دوخت درشت",
      shop: "جـــین‌وســـت",
      size: "XL",
      colorCode: "black",
      colorName: "black",
      image: "/",
      price: 100000,
    },
    {
      material: "پلیور آستین بلند دوخت درشت",
      shop: "جـــین‌وســـت",
      size: "XL",
      colorCode: "black",
      colorName: "black",
      image: "/",
      price: 100000,
    },
    {
      material: "پلیور آستین بلند دوخت درشت",
      shop: "جـــین‌وســـت",
      size: "XL",
      colorCode: "black",
      colorName: "black",
      image: "/",
      price: 100000,
    },
    {
      material: "پلیور آستین بلند دوخت درشت",
      shop: "جـــین‌وســـت",
      size: "XL",
      colorCode: "black",
      colorName: "black",
      image: "/",
      price: 100000,
    },
    {
      material: "پلیور آستین بلند دوخت درشت",
      shop: "جـــین‌وســـت",
      size: "XL",
      colorCode: "black",
      colorName: "black",
      image: "/",
      price: 100000,
    },
    {
      material: "پلیور آستین بلند دوخت درشت",
      shop: "جـــین‌وســـت",
      size: "XL",
      colorCode: "black",
      colorName: "black",
      image: "/",
      price: 100000,
    },
    {
      material: "پلیور آستین بلند دوخت درشت",
      shop: "جـــین‌وســـت",
      size: "XL",
      colorCode: "black",
      colorName: "black",
      image: "/",
      price: 100000,
    },
  ];

  return (
    <div className="flex flex-col w-full h-screen overflow-y-auto overflow-x-hidden">
      <div className="sticky top-0 z-10 bg-white pb-5">
        <CartHeader />
      </div>
      <div className="flex flex-col gap-5 justify-center items-center w-full max-w-sm mx-auto px-5 mb-20">
        {cartItems.map((item, index) => (
          <React.Fragment key={index}>
            <ShoppingCart {...item} />
            {index < cartItems.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </div>
      <div className="sticky bottom-0 z-10 bg-white p-5">
        <div className="flex flex-row justify-between items-center w-full max-w-md mx-auto gap-1">
          <MinorButton
            variant="solid"
            color="primary"
            buttonTitle="ادامه فرآیند خرید"
            className="px-4 py-5"
            onClick={handleGoForward}
          />
          <div className="flex flex-col justify-center items-center gap-3 text-nowrap">
            <p>جمع سبد خرید</p>
            <p>waiting for total price</p>
          </div>
        </div>
      </div>
     
    </div>
  );
}