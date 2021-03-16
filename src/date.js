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

function getDayOfTheWeek(unixTime, timezoneShift) {
  const date = convertUTCToTimezone(unixTime, timezoneShift);
  let day = "";

  switch (date.getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
  return day;
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

export { convertDateToTime, getDayOfTheWeek };
