import React from "react";
import { Grid, Paper, Box } from "@mui/material";
import { Root } from "./StyleComponent";
import FivePhases from "../../assets/image/FivePhases.png"

export default function Empowerment() {
  return (
    <Root>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12}>
          <Box display="flex" justifyContent="center">
            <h1>成為 WANA Pixel 超能人後，
              你擁有的能力！</h1>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box display="flex" justifyContent="center">
            <h3>獲得家族皮膚，跟你的家族夥伴一同奮戰！</h3>
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Box display="flex" justifyContent="center">
            <Box component="img" src={FivePhases} alt="FivePhases" />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box display="flex" justifyContent="center">
            說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字說明文字
          </Box>
        </Grid>

      </Grid>
    </Root>
  );
}
