import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { Link, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

function Login() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [formValues, setFormValue] = useState({
    email: "",
    password: "",
  });

  const onTextFieldChange = (event) => {
    const key = event.target.id;
    setFormValue({
      ...formValues,
      [key]: event.target.value,
    });
  };

  const handleLogInClick = () => {
    navigate("/");
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <Box bgcolor="white" display="flex" justifyContent="center">
      <Box p={10} width="50%">
        <Box display="flex" flexDirection="column">
          <Typography variant="h5" text="Welcome" gutterBottom>
            {t("LOGIN.LOGIN.loginLabel")}
          </Typography>

          <Box mb={1}>
            <TextField
              id="email"
              label={t("LOGIN.LOGIN.email")}
              value={formValues.email}
              sx={{ width: "100%" }}
              onChange={onTextFieldChange}
            />
          </Box>
          <Box mb={1}>
            <TextField
              id="password"
              label={t("LOGIN.LOGIN.password")}
              type="password"
              sx={{ width: "100%" }}
              value={formValues.password}
              onChange={onTextFieldChange}
            />
          </Box>
          <Button variant="contained" onClick={handleLogInClick}>
            {t("LOGIN.LOGIN.loginBtn")}
          </Button>
          <Box textAlign="center" pt={3}>
            <Link onClick={handleRegisterClick}>
              {t("LOGIN.LOGIN.dontHaveAcc")}
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
