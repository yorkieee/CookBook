import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const backendUrl = "http://localhost:5001";

export const UsersRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  const { user } = useContext(AuthContext);
  const uid = user.user.uid;

  const getRecipes = async () => {
    try {
      const options = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
        method: "GET",
      };
      const data = await axios.get(
        `${backendUrl}/usersrecipe?id=${uid}`,
        options
      );
      if (data.data) {
        console.log("recipes", data.data);
        setRecipes(data.data);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div>
      {recipes.map((recipe, id) => {
        console.log(recipe);
        return <h1 key={id}>{recipe.title}</h1>;
      })}
    </div>
  );
};
