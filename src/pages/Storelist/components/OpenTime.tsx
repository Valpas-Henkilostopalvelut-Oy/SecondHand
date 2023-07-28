import React from "react";
import { Box, Typography } from "@mui/material";
import type { OpentimesReducer } from "../types";
import type { LazyOpentime } from "../../../models";

const OpenTime = (props: any) => {
  const d = [
    {
      day: "Maanantai",
      s: "Ma",
    },
    {
      day: "Tiistai",
      s: "Ti",
    },
    {
      day: "Keskiviikko",
      s: "Ke",
    },

    {
      day: "Torstai",
      s: "To",
    },

    {
      day: "Perjantai",

      s: "Pe",
    },
    {
      day: "Lauantai",
      s: "La",
    },
    {
      day: "Sunnuntai",
      s: "Su",
    },
  ];

  const { times } = props;

  if (!times) return null;
  return null;

  return [].map((item: OpentimesReducer, index: number) => {
    const { start, end, isClosed } = item;
    if ((!start || !end) && !isClosed) return null;
    const s = start
      ? new Date(item.start || "").toLocaleTimeString("fi-FI", {
          hour: "2-digit",
          minute: "2-digit",
        })
      : null;
    const e = end
      ? new Date(item?.end || "").toLocaleTimeString("fi-FI", {
          hour: "2-digit",
          minute: "2-digit",
        })
      : null;

    const { day_first, day_last } = item;
    const dl = d.find((item) => item.day === day_last);
    const df = d.find((item) => item.day === day_first);

    const w = dl === df ? dl?.s : `${df?.s} - ${dl?.s}`;
    if (isClosed)
      return (
        <Box key={index}>
          <Typography>{w}: Suljettu</Typography>
        </Box>
      );

    return (
      <Box key={index}>
        <Typography>
          {w}: {s} - {e}
        </Typography>
      </Box>
    );
  });
};

export default OpenTime;
