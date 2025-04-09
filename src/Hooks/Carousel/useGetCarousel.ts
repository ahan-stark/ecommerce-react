import { useEffect, useState } from "react";
import { Products } from "../../Utils/Types/Products/Products";
import { useSelector } from "react-redux";
import { LoginState } from "../../Store/Auth/LoginSlice";
import { RootState } from "../../Store/Store";
import { url } from "../../Config/GlobalUrl";

const useGetCarousel = (): Products[] | null => {
  const userDetails: LoginState = useSelector(
    (store: RootState) => store.login
  );
  const [carouselData, setCarouselData] = useState<Products[] | null>(null);
  const fetchCarouselData = async (): Promise<void> => {
    try {
      const data = await fetch(`${url}/get-mobiles`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userDetails.authToken!}`,
        },
      });
      const json = await data.json();
      setCarouselData(json);
    } catch (err: unknown) {
      console.error("Failed to fetch carousel data:", err);
    }
  };
  useEffect(() => {
    if (userDetails.authToken) fetchCarouselData();
  }, [userDetails.authToken]);
  return carouselData;
};
export default useGetCarousel;
