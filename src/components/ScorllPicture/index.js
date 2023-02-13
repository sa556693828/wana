import React from "react";
import { Grid, Box } from "@mui/material";
import { Root } from "./StyleComponent";
import TitleGrid from "../../container/TitleGrid";
import SwipeableViews from 'react-swipeable-views';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function ScorllPicture() {
  const title = "成為家族中的一員"
  return (
    <Root>
      <Grid container spacing={2} alignItems="center">

        <TitleGrid title={title} />

        <Grid item xs={12}>
          <Box display="flex" justifyContent="center" sx={{ width: "90vw" }}>
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              ...
            </Swiper>          </Box>
        </Grid>

      </Grid>
    </Root >
  );
}
