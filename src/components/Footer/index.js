import React from "react";
import { CopyrightBox, TextBox } from "./StyleComponent";

export default function Footer() {
  return (
    <CopyrightBox>
      <TextBox sx={{ color: "text.secondary" }}>© 2022 WANA</TextBox>
    </CopyrightBox>
  );
}
