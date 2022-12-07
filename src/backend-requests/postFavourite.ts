export const postFavourite = async ( recipeId: string, userId: string) => {
    const options = {
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ recipe_id: recipeId, user_id: userId }),
    };

    await fetch(
      'http://localhost:5001/addfavourites',
      options
    );
  };
