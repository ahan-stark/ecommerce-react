import React from "react";
import { Products } from "../../Utils/Types/Products/Products";

const ProductCard: React.FC<Products> = ({ ...products }) => {
  return (
    <div className="h-[100%] w-[100%] flex flex-row rounded-xl cursor-pointer ml-[3%] hover:bg-yellow-50">
      <div className="border-4 border-yellow-200 rounded-lg mt-3 mb-3 p-[2%] h-[80%] w-[40%] flex flex-col items-center">
        <img src={products.productImage} className="w-[80%] h-[95%] rounded-lg" />
      </div>
      <div className="ml-[6%] w-[100%]">
        <div className="h-[50%] w-[80%] ">
          <p className="text-ellipsis whitespace-nowrap overflow-hidden text-blue-700 text-center py-[15%] font-semibold text-lg">
            {products.productName}
          </p>
        </div>
        <div className="h-[30%] w-[95%] px-[35%]">
          <p className="text-red-300 line-through">₹ {products.productPrice + 1000}</p>
          <p className="text-green-400 font-semibold text-2xl ml-[-12%]">₹ {products.productPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
