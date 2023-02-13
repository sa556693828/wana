import React from "react";
import { Grid, Paper, Box } from "@mui/material";
import { Root } from "../StyleComponent";

export default function Phase() {
  return (
    <Root>
      <div class="col-10">
        <div class="row align-items-center">
          <div class="col offset-1">
            <img src="" height="127" width="134" />
          </div>
          <div class="col">
            <h3 class="text-white banner-text-md d-inline py-5">Phase 1</h3>
          </div>
        </div>
      </div>
      <div class="col-10 offset-1">
        <p class="text-white banner-text-sm py-5">Mint 數量1000，社群會員社群會員享有投票權利，可決定 WANA 配件 2.0 樣式走向。加入社群限制：要擁有一隻人像（ 含皮膚、髮、眼、身體、背景 ）</p>
      </div>
    </Root>
  );
}
