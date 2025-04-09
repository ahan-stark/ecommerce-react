import { useEffect, useState, useCallback } from "react";
import { CategoryData } from "../../Utils/Types/Category/Category";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/Store";
import { url } from "../../Config/GlobalUrl";
import { LoginState } from "../../Store/Auth/LoginSlice";

const useGetCategoryData = () => {
  const [categoryData, setCategoryData] = useState<CategoryData[] | null>(null);
  const userDetails: LoginState = useSelector((store: RootState) => store.login);

  const fetchCategoryData = useCallback(async () => {

    try {
      const response = await fetch(`${url}/categories`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${userDetails.authToken!}`,
        },
      });

      const json = await response.json();
      setCategoryData(json);
    } catch (err) {
      console.error("Failed to fetch category data:", err);
    }
  }, [userDetails.authToken]);

  useEffect(() => {
    fetchCategoryData();
  }, [fetchCategoryData]);

  return  categoryData;
};

export default useGetCategoryData;
