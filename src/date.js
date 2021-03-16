import { fromUnixTime, addSeconds } from "date-fns";

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

export { convertUTCToTimezone };
