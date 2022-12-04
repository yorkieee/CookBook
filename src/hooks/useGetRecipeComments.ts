import { useEffect, useState } from "react";
import { getRecipeComments } from "../backend-requests/getRecipeComments";

export const useGetRecipeComments = (recipeId: string) => {
    const [comments, setComments] = useState<Promise<any>>(
      [] as unknown as Promise<any>
    );
  
    useEffect(() => {
      const fetchComments = async () => {
        setComments(await getRecipeComments(recipeId));
      };
  
      fetchComments();
    }, []);
  
    if (!recipeId) return [];
    
    return comments;
  };