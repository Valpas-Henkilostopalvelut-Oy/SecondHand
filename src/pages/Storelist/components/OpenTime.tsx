import React from "react";
import { Box, Typography } from "@mui/material";
import type { LazyOpentime } from "../../../models";
import { getCurrentDay, isInCurrentWeek } from "../../../services/days";
import type { BoxProps } from "@mui/material";
import type { SortedTimes } from "../../../types/opentimes";
import {
  getSortedByTypes,
  getSortedByDays,
} from "../../../services/openTimeLib";

const OpentTime = ({
  box,
  item,
  type = "default",
}: {
  box: BoxProps;
  item: SortedTimes;
  type?: string;
}) => {
  const { day_first, day_last, isClosed, start, end } = item;
  const fday = getCurrentDay("fi", day_first, true);
  const lday = getCurrentDay("fi", day_last, true);
  const oDateS = new Date(start || "").toDateString();
  const oDateE = new Date(end || "").toDateString();
  const dStart = new Date(start || "").toLocaleTimeString("fi-FI", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const dEnd = new Date(end || "").toLocaleTimeString("fi-FI", {
    hour: "2-digit",
    minute: "2-digit",
  });

  if (type !== "default") {
    return (
      <Box {...box}>
        <Typography>
          {isClosed
            ? fday === lday
              ? `${fday}: Suljettu`
              : `${fday} - ${lday}: Suljettu`
            : fday === lday && oDateS === oDateE
            ? `${oDateS}: ${dStart} - ${dEnd}`
            : `${oDateS} - ${oDateE}: ${dStart} - ${dEnd}`}
        </Typography>
      </Box>
    );
  }

  return (
    <Box {...box}>
      {isClosed ? (
        <Typography>
          {fday === lday ? `${fday}: Suljettu` : `${fday} - ${lday}: Suljettu`}
        </Typography>
      ) : (
        <Typography>
          {fday === lday
            ? `${fday}: ${dStart} - ${dEnd}`
            : `${fday} - ${lday}: ${dStart} - ${dEnd}`}
        </Typography>
      )}
    </Box>
  );
};

const OpenTime = ({ times }: { times: LazyOpentime[] | null }) => {
  if (!times) return null;

  const sortedTimes = getSortedByTypes({ times, func: getSortedByDays });

  console.log("sortedTimes", sortedTimes);

  return (
    <Box>
      {sortedTimes.map((opentime) => (
        <Box key={opentime.type}>
          <Typography key={opentime.type}>{opentime.type}</Typography>
          {opentime.days.map((item) => (
            <OpentTime
              key={item.day_first}
              box={{ ml: 2 }}
              item={item}
              type={opentime.type}
            />
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default OpenTime;
