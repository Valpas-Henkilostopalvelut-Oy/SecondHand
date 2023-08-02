import React from "react";
import { Box, Typography } from "@mui/material";
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
};

export default OpenTime;
