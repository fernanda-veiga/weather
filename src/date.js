import { fromUnixTime, addSeconds } from "date-fns";

function convertDateToTime(unixTime, timezoneShift) {
  const date = convertUTCToTimezone(unixTime, timezoneShift);
  const hour = date.getHours();
  const minute = date.getMinutes();
  if (minute < 10) {
    return `${hour}h0${minute}`;
  }
  return `${hour}h${minute}`;
}

function convertUTCToTimezone(unixTime, timezoneShift) {
  const utcDate = convertUnixToUTC(unixTime);
  const timezoneTime = addSeconds(utcDate, timezoneShift);
  return timezoneTime;
}

function convertUnixToUTC(unixTime) {
  const systemDate = fromUnixTime(unixTime);
  const utcDate = new Date(
    systemDate.getUTCFullYear(),
    systemDate.getUTCMonth(),
    systemDate.getUTCDate(),
    systemDate.getUTCHours(),
    systemDate.getUTCMinutes(),
    systemDate.getUTCSeconds()
  );
  return utcDate;
}

export { convertDateToTime };
