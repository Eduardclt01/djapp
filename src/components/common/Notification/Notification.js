import React from "react";
import { Alert, Snackbar } from "@mui/material";
import { useRecoilState } from "recoil";
import { notificationAtom } from "../../../appState/NotificationState";

export default function Notification() {
  const [notification, setNotification] = useRecoilState(notificationAtom);
  const { open, severity, message } = notification;

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setNotification({
      open: false,
      message: "",
      severity: "success",
    });
  };

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
}
