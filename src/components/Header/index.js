import React from "react";
import { Box, Button } from "@mui/material";
import { BackgroundBox } from "./StyleComponent";
import variables from "../../Style/variables";

export default function Header() {
  return (
    <>
      <BackgroundBox>
        <Box display="flex" justifyContent="center">
          <Button>Join Discord</Button>
        </Box>

      </BackgroundBox >
      <Box display="flex" justifyContent="center" sx={{ position: "relative", zIndex: 20, marginTop: "-2rem" }}>
        <Button sx={{ height: "50px", backgroundColor: variables.Bgbase, padding: "2rem 4rem", boxShadow: "0 0 1rem 0.3rem rgba(255, 255, 255, 0.3)", borderRadius: " 1.2rem" }}>Join Discorssd</Button>
      </Box>
    </>
  );
}
