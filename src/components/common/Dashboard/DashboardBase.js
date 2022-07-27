import { Box, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import * as React from "react";
import MenuAppBar from "./MenuAppBar";

export default function DashboardBase(props) {
  const { children, title } = props;

  return (
    <Box bgcolor="#f7f5f5" minHeight="100vh">
      <MenuAppBar />
      <Box mt={5}>
        <Container maxWidth="lg" p={10}>
          <Paper elevation={1}>
            <Box pl={3} pt={3}>
              <Typography variant="h5" gutterBottom>
                {title}
              </Typography>
            </Box>
            <Box p={3}>{children}</Box>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
}
