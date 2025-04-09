import React from "react";
import { Products } from "../../Utils/Types/Products/Products";
import { useGetTrendyProducts } from "../../Hooks/Products/useGetTrendyProducts";
import ProductsShimmer from "../../Utils/Shimmer/ProductsShimmer";
import ProductCard from "../Products/ProductCard";
import useGetCarousel from "../../Hooks/Carousel/useGetCarousel";
const arr: number[] = [];
for (let i = 0; i < 8; i++) {
  arr.push(i);
}
const Homepage = () => {
  const carouselData : Products[] | null = useGetCarousel();
  const trendyProducts: Products[] | null = useGetTrendyProducts();

  return (
    <div className="flex-1 min-h-screen p-6 overflow-x-hidden">
    {!trendyProducts ? (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {arr.map((_, index) => (
          <div className="w-full aspect-[4/5]" key={index}>
            <ProductsShimmer />
          </div>
        ))}
      </div>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-auto">
        {trendyProducts.map((product: Products, index : number) => (
          <div className="w-full" key={index}>
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    )}
  </div>
  );
};

export default Homepage;
