import React from "react";
import { Box } from "@mui/system";
import { TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

function UserRegisterForm(props) {
  const {
    onTextFieldChange,
    formValues,
    formErrors,
    updateEmailError,
    updatePasswordError,
    updateRepeatPasswordError,
  } = props;
  const { t } = useTranslation();

  const onEmailBlur = () => {
    updateEmailError();
  };

  const onPasswordBlur = () => {
    updatePasswordError();
  };

  const onRepeatPasswordBlur = () => {
    updateRepeatPasswordError();
  };

  return (
    <>
      <Box mb={1}>
        <TextField
          id="email"
          label={t("REGISTER.USERREGISTERFORM.email")}
          value={formValues.email}
          sx={{ width: "100%" }}
          onChange={onTextFieldChange}
          error={formErrors.emailError}
          onBlur={onEmailBlur}
          helperText={
            formErrors.emailError
              ? t("REGISTER.USERREGISTERFORM.emailError")
              : ""
          }
        />
      </Box>
      <Box mb={1}>
        <TextField
          id="password"
          label={t("REGISTER.USERREGISTERFORM.password")}
          type="password"
          sx={{ width: "100%" }}
          value={formValues.password}
          onChange={onTextFieldChange}
          onBlur={onPasswordBlur}
          error={formErrors.passwordError}
          helperText={
            formErrors.passwordError
              ? t("REGISTER.USERREGISTERFORM.passwordError")
              : ""
          }
        />
      </Box>
      <Box mb={1}>
        <TextField
          id="repeatPassword"
          label={t("REGISTER.USERREGISTERFORM.repeatPassword")}
          type="password"
          sx={{ width: "100%" }}
          value={formValues.repeatPassword}
          onChange={onTextFieldChange}
          onBlur={onRepeatPasswordBlur}
          error={formErrors.repeatPasswordError}
          helperText={
            formErrors.repeatPasswordError
              ? t("REGISTER.USERREGISTERFORM.repeatPasswordError")
              : ""
          }
        />
      </Box>
    </>
  );
}

export default UserRegisterForm;
