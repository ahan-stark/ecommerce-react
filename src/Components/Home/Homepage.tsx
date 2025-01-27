import React from "react";
import { Products } from "../../Utils/Types/Products/Products";
import { useGetTrendyProducts } from "../../Hooks/Products/useGetTrendyProducts";
import ProductsShimmer from "../../Utils/Shimmer/ProductsShimmer";
import ProductCard from "../Products/ProductCard";
const arr: number[] = [];
for (let i = 0; i < 8; i++) {
  arr.push(i);
}
const Homepage = () => {
  const trendyProducts: Products[] | null = useGetTrendyProducts();

  return (
    <div className="flex-1 flex overflow-x-hidden">
      {!trendyProducts ? (
        <div className="flex flex-wrap p-4 w-full">
          {arr.map((_, index) => {
            return (
              <div className="w-[21%] h-[48%] ml-[2.5%]" key={index}>
                <ProductsShimmer />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-row flex-wrap gap-1 p-4 w-full ml-[2%] ">
          {trendyProducts.map((product: Products, index: number) => (
            <div className="h-[50%] w-[48%]" key={index}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Homepage;
