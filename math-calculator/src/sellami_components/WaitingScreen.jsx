import React from "react";
import "../Styles/WaitingScreen.css";
import { CircularProgress } from "@mui/material";

const WaitingScreen = ({ show = true }) => {
  return (
    <div className={"PopupBackground " + (show ? "show" : "")}>
      <CircularProgress size={100} />
      <span>This may take some time, please be patient</span>
    </div>
  );
};

export default WaitingScreen;
