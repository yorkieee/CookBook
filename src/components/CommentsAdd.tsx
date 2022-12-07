import { Button, TextField } from "@mui/material";
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
      <TextField
        id="comment"
        label="Add your comment"
        variant="outlined"
        color="secondary"
        value={state}
        onChange={(e) => setState(e.target.value)}
        type={"text"}
        fullWidth
        margin="normal"
      />

      <Button
        variant="contained"
        fullWidth
        color="secondary"
        sx={{ mt: 3, mb: 2 }}
        type="submit"
      >
        {"submit"}
      </Button>
    </form>
  );
};
