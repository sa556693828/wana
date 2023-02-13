import React from "react";
import { Grid, Box } from "@mui/material";

export default function TitleGrid(props) {
  const title = props.title
  return (
    <Grid item xs={12}>
      <Box display="flex" justifyContent="center">
        <h1>{title}</h1>
      </Box>
    </Grid>

  );
}
