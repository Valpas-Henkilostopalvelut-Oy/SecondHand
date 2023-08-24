import { OpentimesType } from "../models";

const daysEng = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const daysEngShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const daysFi = [
  "Maanantai",
  "Tiistai",
  "Keskiviikko",
  "Torstai",
  "Perjantai",
  "Lauantai",
  "Sunnuntai",
];
const daysFiShort = ["Ma", "Ti", "Ke", "To", "Pe", "La", "Su"];

export const getCurrentDay = (lang: string, day: number, short: boolean) => {
  const days = lang === "fi" ? daysFi : daysEng;
  const daysShort = lang === "fi" ? daysFiShort : daysEngShort;
  if (short) {
    return daysShort[day];
  }
  return days[day];
};

export const getDays = (lang: string, short: boolean) => {
  const days = lang === "fi" ? daysFi : daysEng;
  const daysShort = lang === "fi" ? daysFiShort : daysEngShort;
  if (short) {
    return daysShort;
  }
  return days;
};

export const getOpenTimeType = () => {
  //make array from OpentimesType enum
  const enumValues = Object.values(OpentimesType);
  return enumValues.filter((value) => typeof value === "string");
};

export const isInCurrentWeek = (day: Date) => {
  const today = new Date();
  const currentWeekStart = new Date(today);
  currentWeekStart.setDate(today.getDate() - today.getDay()); // Start of the week is Sunday
  const currentWeekEnd = new Date(currentWeekStart);
  currentWeekEnd.setDate(currentWeekStart.getDate() + 6); // End of the week is Saturday

  return day >= currentWeekStart && day <= currentWeekEnd;
};

export default getCurrentDay;
