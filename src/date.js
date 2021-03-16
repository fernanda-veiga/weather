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
      day = "Sun";
      break;
    case 1:
      day = "Mon";
      break;
    case 2:
      day = "Tue";
      break;
    case 3:
      day = "Wed";
      break;
    case 4:
      day = "Thu";
      break;
    case 5:
      day = "Fri";
      break;
    case 6:
      day = "Sat";
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
