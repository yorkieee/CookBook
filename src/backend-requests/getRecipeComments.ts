import axios from "axios";

export const getRecipeComments = async (recipeId: string) => {
    const options = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      method: "GET",
    };
    const data = await axios.get(
      `http://localhost:5001/getcomments?recipeid=${recipeId}`,
      options
    );
    const comments = data.data;
  
    return comments;
  };