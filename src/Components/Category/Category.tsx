import React from "react";
import useGetCategoryData from "../../Hooks/Category/useGetCategoryData";
import { CategoryData } from "../../Utils/Types/Category/Category";
import ProductsShimmer from "../../Utils/Shimmer/ProductsShimmer";
import CategoryCard from "./CategoryCard";
const arr: number[] = [];
for (let i = 0; i < 8; i++) {
  arr.push(i);
}
const Category = () => {
  const categoryData: CategoryData[] | null = useGetCategoryData();
  return (
    <div className="w-full p-4">
  {!categoryData || categoryData.length === 0 ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {arr.map((_, index) => (
        <div className="w-full aspect-[4/5]" key={index}>
          <ProductsShimmer />
        </div>
      ))}
    </div>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {categoryData.map((categoryData: CategoryData, index: number) => (
        <CategoryCard key={index} categoryData={categoryData} />
      ))}
    </div>
  )}
</div>
  );
};

export default Category;