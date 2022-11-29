import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AlertComponent = ({ alert, setOpenAlert }) => {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert({ open: false });
  };
  return (
    <Snackbar open={alert.open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={alert.type} sx={{ width: "100%" }}>
        {alert.message}
      </Alert>
    </Snackbar>
  );
};

export default AlertComponent;
