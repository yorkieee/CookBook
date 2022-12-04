import { useContext, useState } from "react";
import { postRecipeComment } from "../backend-requests/postRecipeComment";
import { AuthContext } from "../context/AuthContext";

export const CommentsAdd = ({ recipe }: any) => {
  const [state, setState] = useState("");
  const { user } = useContext(AuthContext);

  if (!user) return null;

  const uid = user.user.uid;

  const onSubmit = (e: any) => {
    e.preventDefault();
    const inputValue = e.target[0].value;
    postRecipeComment(inputValue, recipe.uid, uid);

    // clears the input
    setState("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        value={state}
        onChange={(e) => setState(e.target.value)}
        type={"text"}
      />
      <button type="submit">{"submit"}</button>
    </form>
  );
};
