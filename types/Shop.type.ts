export interface ShopProductItemType {
  price: string;
  description: string;
  title: string;
  imageUrl: string;
  variant: "bordered" | "solid";
  colors: string[];
  withArrow: boolean;
}
