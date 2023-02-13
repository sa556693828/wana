import { styled } from "@mui/material/styles";
import {
  Box,
  Button,
  IconButton,
  Avatar,
  DialogContentText,
} from "@mui/material";
import variables from "../../Style/variables";

/* ============================Footer============================ */

const CopyrightBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  paddingTop: "5%",
  backgroundColor:"#666084"
});
const TextBox = styled(Box)({
  fontSize: 5,
  lineHeight: 2,
  color: "text.secondary",
  textTransform: "uppercase",
  letterSpacing: "0.08333em",
  fontWeight: "400",
});

/* ============================index============================ */

const Root = styled("div")({
  flexGrow: 1,
  height: "100%",
});
const Transition = styled(Box)`
  ${({ theme }) => `
    transition: ${theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    })};`}
`;
/* ============================ReconnectDialog============================ */

const ConnectButton = styled(Button)({
  width: "100%",
  height: "150px",
  maxWidth: "150px",
  "&:hover": {
    backgroundColor: "transparent",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "none",
    borderColor: "none",
  },
  "&:focus": {
    backgroundColor: "none",
    boxShadow: "none",
  },
});
const CloseButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  right: theme.spacing(1),
  top: theme.spacing(1),
  color: theme.palette.grey[600],
}));
const StatusBox = styled(Box)({
  display: "flex",
  justifyContent: "space-around",
  height: "50px",
  fontWeight: "bold",
  marginTop: "-4%",
});

/* ============================Navbar============================ */

const UnitButton = styled(Button)({
  textTransform: "none",
  width: "60px",
  height: "25px",
  borderColor: variables.White,
  color: "white",
  fontSize: "12px",
  "&:hover": {
    borderColor: "white",
  },
});
const PageBox = styled(Box)({
  flexGrow: 1,
  fontSize: "18px",
  fontWeight: "bold",
});
const Grow = styled("div")({
  flexGrow: 1,
});
const Desktop = styled("div")(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));
const Mobile = styled("div")(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));
const InnerAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(2.7),
  height: theme.spacing(2.7),
  fontSize: "0.8rem",
  backgroundColor: variables.Black,
  color: variables.White,
  fontWeight: "bold",
}));

/* ==========================InstallGuide========================== */

const CloseButton2 = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  right: theme.spacing(2),
  top: theme.spacing(2),
  color: theme.palette.grey[600],
}));
const StyleDialogContent = styled(DialogContentText)({
  marginLeft: "3%",
  marginTop: "2%",
  fontSize: "20px",
});
export {
  CopyrightBox,
  TextBox,
  Transition,
  Root,
  ConnectButton,
  CloseButton,
  StatusBox,
  UnitButton,
  PageBox,
  Grow,
  Desktop,
  Mobile,
  InnerAvatar,
  CloseButton2,
  StyleDialogContent,
};
