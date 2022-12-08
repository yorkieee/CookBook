import { TextField } from "@mui/material";

export const SearchBar = () => {
  return (
    <TextField
      fullWidth
      sx={{ margin: "24px 0" }}
      id="outlined-basic"
      label="🔎 Search"
      variant="outlined"
    />
  );
};
