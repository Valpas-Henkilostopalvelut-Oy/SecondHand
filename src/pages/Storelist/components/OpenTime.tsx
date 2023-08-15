import React from "react";
import { Box, Typography } from "@mui/material";
import type { LazyOpentime } from "../../../models";
import { getCurrentDay } from "../../../services/days";

interface SortedTimes {
  day_first: number;
  day_last: number;
  start?: string | null;
  end?: string | null;
  isClosed?: boolean | null;
}

interface OpenTimeReducer {
  type: string; //default or custom
  days: SortedTimes[];
}

const getSortedTimes = ({ times }: { times: LazyOpentime[] }) =>
  times.reduce((acc: OpenTimeReducer[], item: LazyOpentime, index) => {
    const { day, start, end, isClosed, type } = item;

    // Find or create an entry in the accumulator array for the current type
    const typeEntryIndex = acc.findIndex((entry) => entry.type === type);
    if (typeEntryIndex === -1) {
      acc.push({
        type,
        days: [{ day_first: day, day_last: day, start, end, isClosed }],
      });
    } else {
      const typeEntry = acc[typeEntryIndex];
      const prevOpentime = index > 0 ? times[index - 1] : null;

      if (
        prevOpentime &&
        prevOpentime.type === type &&
        prevOpentime.start === start &&
        prevOpentime.end === end &&
        !isClosed
      ) {
        // Update day_last if start and end times are the same as the previous day
        typeEntry.days[typeEntry.days.length - 1].day_last = day;
      } else if (isClosed) {
        // Group closed days
        if (typeEntry.days[typeEntry.days.length - 1].isClosed) {
          typeEntry.days[typeEntry.days.length - 1].day_last = day;
        } else {
          typeEntry.days.push({ day_first: day, day_last: day, isClosed });
        }
      } else {
        const dayEntryIndex = typeEntry.days.findIndex(
          (entry) => entry.day_first === day
        );
        if (dayEntryIndex === -1) {
          typeEntry.days.push({
            day_first: day,
            day_last: day,
            start,
            end,
            isClosed,
          });
        } else {
          typeEntry.days[dayEntryIndex].start = start;
          typeEntry.days[dayEntryIndex].end = end;
          typeEntry.days[dayEntryIndex].isClosed = isClosed;
        }
      }
    }

    return acc;
  }, []);

const OpenTime = ({ times }: { times: LazyOpentime[] | null }) => {
  if (!times) return null;

  const sortedTimes = getSortedTimes({ times });

  console.log(sortedTimes);

  return (
    <Box>
      <Typography variant="h6">Default days</Typography>
      {times.map((opentime) => (
        <Typography key={opentime.id}>
          {getCurrentDay("fi", opentime.day, true)}:{" "}
          {opentime.isClosed
            ? "Suljettu"
            : `${opentime.start} - ${opentime.end}`}
        </Typography>
      ))}
    </Box>
  );
};

export default OpenTime;
