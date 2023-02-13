import React, { useState } from "react";
import { Grid, Paper, Box } from "@mui/material";
import { Root } from "./StyleComponent";
import QAPaper from "./components/QAPaper";
import TitleGrid from "../../container/TitleGrid";

const QAList = [
  {
    title: "Q1. 什麼是WANA ?",
    content:
      "WANA是位在Sol鏈上的一顆星球，通過擁有我們的NFT可以進入web3.0新世界的旅程來創新，一種自由與包容的共同創造體驗，和我們一起創造宇宙吧!",
  },
  { title: "Q2. 發佈時間 ?", content: "待定" },
  { title: "Q3. MINT價格是多少?", content: "Mint價格第一波為1 SOL" },
  { title: "Q4. 我可以用我的WANA NFT做什麼?", content: "作為NFT持有者，您可以擁有屬於自己鏈上的NFT，可以選擇持有或販售，在未來入線圖規劃，您將可以替NFT更換您喜愛的造型、依造型算力獲得豐厚獎勵。" },
  { title: "Q5. 什麼是WANA ?", content: "你可以在Solana Art上購買。" },
  { title: "Q6. 最後注意安全，我們關心每一位夥伴。", content: "1、切勿與任何人分享您的私鑰或助記詞。  2、切勿單擊通過 Discord、Twitter 或其他渠道上的直接消息發送給您的鏈接。  3、僅信任在本網站或官方 Discord 服務器上頻道中發布的官方信息。" },
];

export default function QApage() {
  const title = "FAQ"
  return (
    <Root>
      <Grid container spacing={2} alignItems="center">
        <TitleGrid title={title} />

        {QAList.map((row, index) => {
          return (
            <Grid item xs={12} md={6} key={index} >
              <Paper sx={{ borderRadius: "20px" }}>
                <Box display="flex" justifyContent="flex-start" pl={5}>
                  <QAPaper title={row.title} content={row.content} />
                </Box>
              </Paper>
            </Grid>
          );
        })}

      </Grid>
    </Root>
  );
}
