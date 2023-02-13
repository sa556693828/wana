import React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Paper, Box } from "@mui/material";
import { Root } from "./StyleComponent";
import Animate_1 from "../../assets/image/Animate_1.png";
import Animate_2 from "../../assets/image/Animate_2.png";
import Animate_3 from "../../assets/image/Animate_3.png";
import Animate_4 from "../../assets/image/Animate_4.gif";

export default function GifPart() {
  return (
    <Root>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12}>
          <Box display="flex" justifyContent="center">
            <h1>嘿，一起拯救 WANA 星球吧！</h1>
          </Box>
        </Grid>

        <Grid item xs={12}>
          {/* <!-- TODO: 手機版沒有hover，希望拉到可視範圍再跑圖 --> */}
          <Box display="flex" justifyContent="center">
            <Box component="img" src={Animate_3} alt="logo" />
          </Box>
        </Grid>

      </Grid>
    </Root>
  );
}
