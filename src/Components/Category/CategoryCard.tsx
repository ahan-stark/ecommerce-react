import React from "react";
import { CategoryData } from "../../Utils/Types/Category/Category";
interface CategoryProps {
  categoryData: CategoryData;
}
const CategoryCard: React.FC<CategoryProps> = ({ categoryData }) => {
  return (
    <div className="w-full h-[100%] bg-white border shadow-sm hover:shadow-slate-500 flex flex-col rounded">
      <a href="#" className="w-full h-full block aspect-[4/5] overflow-hidden rounded-t-lg">
        <img
          className="h-[70%] w-full my-[20%] px-4"
          src={categoryData.categoryImage}
          alt="product image"
        />
      </a>
      <div className="p-4 flex-1">
        <h5 className="text-xl font-semibold  text-center text-blue-600">
          {categoryData.categoryName}
        </h5>
      </div>
    </div>
  );
};

export default CategoryCard;
