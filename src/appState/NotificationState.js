import { atom } from "recoil";
import { NOTIFICATION_KEY_RECOIL } from "./constants";

// SELECTORS
export const notificationAtom = atom({
  key: NOTIFICATION_KEY_RECOIL,
  default: {
    open: false,
    message: '',
    severity: 'success',
  },
});