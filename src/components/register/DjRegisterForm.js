import React from "react";
import { Box } from "@mui/system";
import { TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

function DjRegisterForm(props) {
  const { onTextFieldChange, formValues, setFormErrors, formErrors } = props;
  const { t } = useTranslation();

  const onDjNameBlur = () => {
    if (formValues.djName === '') {
      setFormErrors({
        ...formErrors,
        djNameError: true,
      });
    } else {
      setFormErrors({
        ...formErrors,
        djNameError: false,
      });
    }
  }

  return (
    <Box mb={1}>
      <TextField
        id="djName"
        label={t("REGISTER.DJREGISTERFORM.djLabel")}
        sx={{ width: "100%" }}
        value={formValues.djName}
        onChange={onTextFieldChange}
        onBlur={onDjNameBlur}
        helperText={
          formErrors.djNameError ? t("REGISTER.DJREGISTERFORM.djError"): ""
        }
        error={formErrors.djNameError}
      />
    </Box>
  );
}

export default DjRegisterForm;
