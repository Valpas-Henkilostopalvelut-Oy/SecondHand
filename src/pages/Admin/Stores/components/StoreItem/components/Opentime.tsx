import React from "react";
import {
  Typography,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import type { LazyOpentime, LazyStore } from "../../../../../../models";

const OpenTimes = (props?: LazyOpentime[] | null) => {
  if (!props) return null;

  return (
    <TableContainer>
      <Table>
        <TableBody>
          {props.map((opentime) => {
            if (!opentime) return null;
            return <OneTimes key={opentime.id} {...opentime} />;
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const OneTimes = (props: LazyOpentime) => {
  const { day, start, end, isClosed } = props;
  if ((!start || !end) && !isClosed) return null;

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
    </TableRow>
  );
};

export default OpenTimes;
