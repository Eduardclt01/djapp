import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Divider, Drawer, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { notificationAtom } from "../../../appState/NotificationState";
import { useTranslation } from "react-i18next";

export default function MenuAppBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [notification, setNotification] = useRecoilState(notificationAtom);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleNavigation = (path) => {
    navigate(`/${path}`);
  };

  function showLogoutNotification() {
    setNotification({
      open: true,
      message: t("MENU.logoutSuccess"),
      severity: "success",
    });
  }

  const logOutUser = () => {
    // TODO: LogOutUser from system
    showLogoutNotification();
    handleNavigation("login");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon onClick={() => setIsDrawerOpen(true)} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My app
          </Typography>
          <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
            <Box bgcolor="white" pt={5} width={200}>
              <MenuItem
                onClick={() => {
                  handleNavigation("");
                }}
              >
                {t("MENU.songRequests")}
              </MenuItem>
              <Divider />
              <MenuItem
                onClick={() => {
                  handleNavigation("profile");
                }}
              >
                {t("MENU.myProfile")}
              </MenuItem>
              <Divider />
              <MenuItem onClick={logOutUser}>{t("MENU.logout")}</MenuItem>
            </Box>
          </Drawer>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
