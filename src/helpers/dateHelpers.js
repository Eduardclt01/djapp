import moment from "moment";

export function convertTimeStampToDate(timeStamp) {
  return moment.unix(timeStamp).format("DD/MM/YYYY HH:mm:ss");
}
