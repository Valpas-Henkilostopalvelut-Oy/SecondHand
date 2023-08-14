import React from "react";
import { Box, Typography } from "@mui/material";
import type { LazyOpentime } from "../../../models";
import { getCurrentDay, getDays } from "../../../services/days";

const OpenTime = ({ times }: { times: LazyOpentime[] | null }) => {
  if (!times) return null;

  // Sort the array by day and type
  times.sort((a, b) => {
    if (a.day !== b.day) {
      return a.day - b.day;
    }
    return a.type.localeCompare(b.type);
  });

  // Group the sorted array by day and type
  const groupedOpentimes: Record<string, LazyOpentime[]> = {};

  times.forEach((opentime) => {
    const key = `${opentime.day}-${opentime.type}`;
    if (!groupedOpentimes[key]) {
      groupedOpentimes[key] = [];
    }
    groupedOpentimes[key].push(opentime);
  });

  // Format the grouped data
  const formattedOpentimes: string[] = [];

  for (const key in groupedOpentimes) {
    const opentimesGroup = groupedOpentimes[key];
    const days = opentimesGroup[0].day === 0 ? "sat-sun" : "mo-fri";
    const type =
      opentimesGroup[0].type.charAt(0).toUpperCase() +
      opentimesGroup[0].type.slice(1);

    let timings = "";
    for (const opentime of opentimesGroup) {
      const timeRange = `${opentime.start?.slice(11, 16)}-${opentime.end?.slice(
        11,
        16
      )}`;
      if (timings === "") {
        timings = timeRange;
      } else {
        timings += `, ${timeRange}`;
      }
    }

    const formattedGroup = `${days}: ${type}: ${timings}`;
    formattedOpentimes.push(formattedGroup);
  }

  console.log(formattedOpentimes);

  if (!times) return null;
  return null;
};

export default OpenTime;
