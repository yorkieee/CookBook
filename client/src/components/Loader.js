import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Grid } from "@mui/material";

export const Loader = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}>
        <CircularProgress />
      </Grid>
      <Grid item xs={4}></Grid>
    </Grid>
  );
};
