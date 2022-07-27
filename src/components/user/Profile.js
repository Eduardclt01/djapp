import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { useRecoilState, useRecoilValue } from "recoil";
import { notificationAtom } from "../../appState/NotificationState";
import { userSelector } from "../../appState/UserState";
import DashboardBase from "../common/Dashboard/DashboardBase";

function Profile() {
  const { t } = useTranslation();
  const user = useRecoilValue(userSelector);
  const [notification, setNotification] = useRecoilState(notificationAtom);

  const onUpdateDetailsClick = () => {
    setNotification({
      open: true,
      message: t("USER.PROFILE.detailsSuccess"),
      severity: "success",
    });
  };

  const onUpdatePasswordClick = () => {
    setNotification({
      open: true,
      message: t("USER.PROFILE.passwordSuccess"),
      severity: "success",
    });
  };

  return (
    <DashboardBase title={t("USER.PROFILE.myProfile")}>
      <Box mb={2}>
        <TextField
          id="djCode"
          label={t("USER.PROFILE.djCode")}
          sx={{ width: "100%" }}
          onChange={() => {}}
          disabled
          value={user.djCode}
        />
      </Box>
      <Box mb={2}>
        <TextField
          id="email"
          label={t("USER.PROFILE.email")}
          sx={{ width: "100%" }}
          value={user.email}
          onChange={() => {}}
        />
      </Box>
      <Box mb={2}>
        <TextField
          id="username"
          label={t("USER.PROFILE.username")}
          sx={{ width: "100%" }}
          onChange={() => {}}
          value={user.userName}
        />
      </Box>
      <Button onClick={onUpdateDetailsClick} variant="contained">
        {t("USER.PROFILE.updateDetail")}
      </Button>
      <Box mt={4}>
        <Divider />
      </Box>
      <Box mt={3} mb={2}>
        <Typography variant="h6">
          {t("USER.PROFILE.cahngePasswordTitle")}
        </Typography>
      </Box>
      <Box mb={2}>
        <TextField
          id="email"
          label={t("USER.PROFILE.password")}
          sx={{ width: "100%" }}
          onChange={() => {}}
        />
      </Box>
      <Box mb={2}>
        <TextField
          id="email"
          label={t("USER.PROFILE.repeatPassword")}
          sx={{ width: "100%" }}
          onChange={() => {}}
        />
      </Box>
      <Button onClick={onUpdatePasswordClick} variant="contained">
        {t("USER.PROFILE.changePasswordBtn")}
      </Button>
    </DashboardBase>
  );
}

export default Profile;
