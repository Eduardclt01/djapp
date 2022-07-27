import { selector } from "recoil";
import getUser from "../api/user";
import { USER_KEY_RECOIL } from "./constants";

// SELECTORS
export const userSelector = selector({
  key: USER_KEY_RECOIL,
  get: ({get}) => {
    const user = getUser();

    return user;
  },
});