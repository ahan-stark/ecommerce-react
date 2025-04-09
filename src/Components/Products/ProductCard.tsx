import React from "react";
import { Products } from "../../Utils/Types/Products/Products";

const ProductCard: React.FC<Products> = ({ ...products }) => {
  return (
    <div className="h-full max-w-sm bg-yellow-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 cursor-pointer mt-[15px] flex flex-col">
    <div className="flex justify-center mb-4">
        <img 
            src={products.productImage} 
            className="w-full max-w-[220px] h-64 object-contain rounded-md"
            alt={products.productName}
        />
    </div>
    <div className="flex flex-col flex-grow">
        <h2 className="text-xl font-semibold text-gray-800 text-center mb-3 line-clamp-2">
            {products.productName}
        </h2>
        <div className="mt-auto">
            <p className="font-bold text-center line-through text-red-500">
                {products.productPrice + 999}
            </p>
            <p className="text-gray-600 font-bold text-center text-lg">
                {products.productPrice}
            </p>
        </div>
    </div>
</div>

  );
};

export default ProductCard;
