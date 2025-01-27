import { useEffect, useState } from "react";
import { Products } from "../../Utils/Types/Products/Products";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/Store";
import { LoginState } from "../../Store/Auth/LoginSlice";
import { url } from "../../Config/GlobalUrl";

export const useGetTrendyProducts = (): Products[] | null => {
  const userDetails: LoginState = useSelector(
    (store: RootState) => store.login
  );
  const [products, setProducts] = useState<Products[] | null>(null);
  const fetchTrendyProducts = async () => {
    try {
      const response = await fetch(url + "/trendy-products", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${userDetails.authToken!}`,
        },
      });
      const json = await response.json();
      setProducts(json);
    } catch (err: unknown) {
      console.error("Failed to fetch trendy products:", err);
    }
  };
  useEffect(() => {
    fetchTrendyProducts();
  }, [userDetails.authToken]);
  return products;
};
