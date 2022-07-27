import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { useRecoilState, useRecoilValue } from "recoil";
import { notificationAtom } from "../../../appState/NotificationState";
import DashboardBase from "../../common/Dashboard/DashboardBase";

function RequestSong() {
  const { t } = useTranslation();
  const [notification, setNotification] = useRecoilState(notificationAtom);



  return (
    <DashboardBase title={t("USER.REQUESTSONG.title")}>
    
    </DashboardBase>
  );
}

export default RequestSong;
