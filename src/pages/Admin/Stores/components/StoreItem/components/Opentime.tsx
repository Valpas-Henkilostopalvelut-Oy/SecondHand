import React from "react";
import {
  Typography,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
} from "@mui/material";
import type { LazyOpentime } from "../../../../../../models";
import { getCurrentDay } from "../../../../../../services/days";

const OpenTimes = ({ opentimes }: { opentimes: LazyOpentime[] | null }) => {
  if (!opentimes) return null;

  const defaultdays = opentimes
    .filter((opentime) => opentime.type === "default")
    .sort((a, b) => a.day - b.day);
  const customdays = opentimes
    .filter((opentime) => opentime.type !== "default")
    .sort((a, b) => a.day - b.day);

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell colSpan={4}>
              <Typography variant="h6">Default days</Typography>
            </TableCell>
          </TableRow>
          {defaultdays.map((opentime) => (
            <OneTimes key={opentime.id} {...opentime} />
          ))}
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell colSpan={4}>
              <Typography variant="h6">Custom days</Typography>
            </TableCell>
          </TableRow>
          {customdays.map((opentime) => (
            <OneTimes key={opentime.id} {...opentime} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const OneTimes = (props: LazyOpentime) => {
  const { start, end, isClosed, type } = props;
  if ((!start || !end) && !isClosed) return null;
  const day = getCurrentDay("fi", props.day, true);

  const o = new Date(start || "");
  const c = new Date(end || "");
  const opentime =
    o.getHours() + ":" + o.getMinutes().toString().padStart(2, "0");
  const closetime =
    c.getHours() + ":" + c.getMinutes().toString().padStart(2, "0");

  if (isClosed)
    return (
      <TableRow>
        <TableCell>{day}</TableCell>
        <TableCell colSpan={2}>
          <Typography sx={{ color: isClosed ? "red" : "inherit" }}>
            Suljettu
          </Typography>
        </TableCell>
      </TableRow>
    );

  return (
    <TableRow>
      <TableCell>{day}</TableCell>
      <TableCell>
        <Typography sx={{ color: isClosed ? "red" : "inherit" }}>
          {opentime}
        </Typography>
      </TableCell>
      <TableCell>
        <Typography sx={{ color: isClosed ? "red" : "inherit" }}>
          {closetime}
        </Typography>
      </TableCell>
      <TableCell>{type}</TableCell>
    </TableRow>
  );
};

export default OpenTimes;
