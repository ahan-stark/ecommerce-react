import React from "react";
import ProductShimmerCSS from "./ProductsShimmer.module.css";

const ProductsShimmer = () => {
  return (
    <div
      className={`${ProductShimmerCSS.shimmer} h-[100%] w-[100%]`}
    ></div>
  );
};

export default ProductsShimmer;
