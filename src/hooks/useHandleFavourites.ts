import { useEffect, useState } from "react";
import { getFavourites } from "../backend-requests/getFavourites";
import { useUserId } from "./useUserId";

interface Recipe {
  title: string;
  ingredients: string;
  description: string;
  instructions: string;
  image: string;
}

export const useHandleFavourites = () => {
  const [favourites, setFavourites] = useState<Recipe[]>([]);
  const [isFetched, setIsFetched] = useState(false);
  const uid = useUserId();

  useEffect(() => {
    const fetch = async () => {
      const fetchedRecipes = await getFavourites(uid);
      setFavourites(fetchedRecipes);
      setIsFetched(true);
    };

    if (isFetched === false) {
      fetch();
    }
  }, [isFetched]);

  console.log({ isFetched });

  return { favourites, setIsFetched, isFetched };
};
