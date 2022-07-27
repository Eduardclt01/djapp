import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { Link, Switch, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import DjRegisterForm from "./DjRegisterForm";
import UserRegisterForm from "./UserRegisterForm";
import { useTranslation } from "react-i18next";
import { validateEmail } from "../../helpers/inputHelpers";
import { useRecoilState } from "recoil";
import { notificationAtom } from "../../appState/NotificationState";

function Register() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [notification, setNotification] = useRecoilState(notificationAtom);

  const [formValues, setFormValue] = useState({
    email: "",
    password: "",
    repeatPassword: "",
    djName: "",
  });

  const [formErrors, setFormErrors] = useState({
    emailError: false,
    passwordError: false,
    repeatPasswordError: false,
    djNameError: false,
  });

  const [isDj, setIsDj] = useState(false);

  function emailError() {
    return !validateEmail(formValues.email) || formValues.email.length === 0;
  }

  function repeatPasswordError() {
    return formValues.password !== formValues.repeatPassword;
  }

  function passwordError() {
    return formValues.password.length < 8;
  }

  function updateEmailError() {
    setFormErrors({
      ...formErrors,
      emailError: emailError(),
    });
  }

  function updatePasswordError() {
    setFormErrors({
      ...formErrors,
      passwordError: passwordError(),
    });
  }

  function updateRepeatPasswordError() {
    setFormErrors({
      ...formErrors,
      repeatPasswordError: repeatPasswordError(),
    });
  }

  const onTextFieldChange = (event) => {
    const key = event.target.id;
    setFormValue({
      ...formValues,
      [key]: event.target.value,
    });
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleUserTypeChange = () => {
    setIsDj((prevState) => !prevState);
  };

  function userCantRegsiter() {
    setNotification({
      open: true,
      message: t("REGISTER.REGISTER.formHasErrors"),
      severity: "error",
    });
  }

  function checkFormErrors() {
    return emailError() || passwordError() || repeatPasswordError();
  }

  function updateAllFormErrors() {
    setFormErrors({
      emailError: emailError(),
      passwordError: passwordError(),
      repeatPasswordError: repeatPasswordError(),
    });
  }

  function registerUser() {
    updateAllFormErrors();
    if (checkFormErrors()) {
      userCantRegsiter();
      return;
    }

    navigate("/");
  }

  const handleRegisterClick = () => {
    registerUser();
  };

  return (
    <Box display="flex" height="100vh" alignItems="stretch" bgcolor="#f1f1f1">
      {/* left - image*/}
      <Box width="35%" textAlign="center" borderTop>
        <Box p={10}>
          <Typography variant="h5" text="Welcome" gutterBottom>
            Welcome
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            {t("REGISTER.REGISTER.warningMessage")}
          </Typography>
        </Box>
      </Box>

      {/* right - form */}
      <Box
        width="65%"
        bgcolor="white"
        sx={{ boxShadow: "-5px 0px 17px 1px rgba(0,0,0,0.28);" }}
      >
        <Box p={10}>
          <Box display="flex" alignItems="center" justifyContent="end">
            <Typography variant="subtitle2" gutterBottom>
              {t("REGISTER.REGISTER.djLabel")}
            </Typography>
            <Switch
              checked={isDj}
              onChange={handleUserTypeChange}
              inputProps={{ "aria-label": "controlled" }}
            />
          </Box>
          <Box display="flex" flexDirection="column">
            <Typography variant="h5" text="Welcome" gutterBottom>
              {t("REGISTER.REGISTER.signupTitle")}
            </Typography>

            <UserRegisterForm
              formValues={formValues}
              setFormValue={setFormValue}
              setFormErrors={setFormErrors}
              formErrors={formErrors}
              onTextFieldChange={onTextFieldChange}
              updateEmailError={updateEmailError}
              updatePasswordError={updatePasswordError}
              updateRepeatPasswordError={updateRepeatPasswordError}
            />

            {isDj && (
              <DjRegisterForm
                onTextFieldChange={onTextFieldChange}
                formValues={formValues}
                setFormErrors={setFormErrors}
                formErrors={formErrors}
              />
            )}

            <Button variant="contained" onClick={handleRegisterClick}>
              {t("REGISTER.REGISTER.registerButton")}
            </Button>

            <Box textAlign="center" pt={3}>
              <Link onClick={handleLoginClick}>
                {t("REGISTER.REGISTER.alreadyAccount")}
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Register;
