import React, { useEffect, useState } from "react";
import DashboardBase from "../../common/Dashboard/DashboardBase";
import { Checkbox, Link, Typography } from "@mui/material";
import TableGenerator from "../../common/Table/TableGenerator";
import getSongRequests from "../../../api/admin";
import { convertTimeStampToDate } from "../../../helpers/dateHelpers";
import { useTranslation } from "react-i18next";
import { notificationAtom } from "../../../appState/NotificationState";
import { useRecoilState } from "recoil";

function DjDashboard() {
  const { t } = useTranslation();
  const [songRequests, setSongRequests] = useState([]);
  const [notification, setNotification] = useRecoilState(notificationAtom);

  const columns = [
    {
      id: "songName",
      label: t("ADMIN.DASHBOARD.DjDashboard.name"),
      minWidth: 170,
      displayer: (row) => {
        return row.songName;
      },
    },
    {
      id: "spotifyLink",
      label: t("ADMIN.DASHBOARD.DjDashboard.link"),
      minWidth: 170,
      displayer: (row) => {
        return (
          <Link target="_blank" href={row.spotifyLink}>
            {t("ADMIN.DASHBOARD.DjDashboard.openSpotify")}
          </Link>
        );
      },
    },
    {
      id: "played",
      label: t("ADMIN.DASHBOARD.DjDashboard.played"),
      minWidth: 170,
      displayer: (row) => {
        return <Checkbox onClick={handlePlayedClick} checked={row.played} />;
      },
    },

    {
      id: "dateRequested",
      label: t("ADMIN.DASHBOARD.DjDashboard.date"),
      minWidth: 170,
      displayer: (row) => {
        return (
          <Typography variant="body1">
            {convertTimeStampToDate(row.dateRequested)}
          </Typography>
        );
      },
    },
  ];

  function updateSongStatus() {
    // TODO API call
    setNotification({
      open: true,
      message: t("ADMIN.DASHBOARD.DjDashboard.updateSuccess"),
      severity: "success",
    });
  }

  const handlePlayedClick = (id) => {
    updateSongStatus(id);
  };

  useEffect(() => {
    setSongRequests(getSongRequests);
  }, []);

  return (
    <DashboardBase title="Song requests">
      <TableGenerator rows={songRequests} columns={columns} />
    </DashboardBase>
  );
}

export default DjDashboard;
