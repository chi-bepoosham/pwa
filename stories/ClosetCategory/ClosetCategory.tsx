import { Category } from "../Category";

export function ClosetCategory({
  categoryItems,
  selectedCategory,
  onChange,
}: {
  categoryItems: { key: string; title: string }[];
  selectedCategory: string;
  onChange: (v: string) => void;
}) {
  return (
    <Category
      variant="primary"
      items={categoryItems}
      value={selectedCategory}
      onChange={onChange}
      className="flex justify-center items-center sticky top-[112px] py-2 z-30 bg-white w-full"
    />
  );
}