export const postRecipeComment = async (
  comment: string,
  recipeId: string,
  authorId: string
) => {
  const options = {
    headers: {
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      comment,
      author_uid: authorId,
      recipe_id: recipeId,
    }),
  };

  await fetch("https://pern-pi.vercel.app", options);
};
