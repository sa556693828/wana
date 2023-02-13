import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import Background from '../../assets/image/test-image.png'
/* ============================Footer============================ */

const BackgroundBox = styled(Box)({
  flexGrow: 1,
  width: "100%",
  height: "calc(100vh - 70px)",
  overflowY: "auto",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(${Background})`,
  "&::-webkit-scrollbar": {
    width: "0.4em",
  },
  "&::-webkit-scrollbar-track": {
    boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
    webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "rgba(0,0,0,.1)",
  },
});

export {
  BackgroundBox,
};
