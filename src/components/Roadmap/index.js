import React from "react";
import { Grid, Box } from "@mui/material";
import { Root } from "./StyleComponent";
import Phase from "./components/Phase";
import TitleGrid from "../../container/TitleGrid";

const phaseList = [
  { icon: "", title: "Phase1", content: "" },
  { icon: "", title: "Phase2", content: "" },
  { icon: "", title: "Phase3", content: "" },
]

export default function Roadmap() {
  const title = "Roadmap"
  return (
    <Root>
      <Grid container spacing={2} alignItems="center">
        <TitleGrid title={title} />

        <Grid item xs={12}>
          <Box display="flex" justifyContent="center">
            {phaseList.map((row, index) => {
              return (
                <Phase row={row} key={index} />
              )
            })}
          </Box>
        </Grid>

      </Grid>
    </Root >
  );
}
