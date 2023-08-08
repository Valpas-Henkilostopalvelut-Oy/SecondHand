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

export default getCurrentDay;
