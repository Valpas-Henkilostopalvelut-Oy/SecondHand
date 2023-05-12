import React, { useEffect, useState } from "react";
import type { SetStateAction, Dispatch } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  IconButton,
  Collapse,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimeField } from "@mui/x-date-pickers/TimeField";
import AddIcon from "@mui/icons-material/Add";
import fi from "date-fns/locale/fi";
import ClearIcon from "@mui/icons-material/Clear";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { addOpenTime, removeOpenTime } from "../redux/newstore";
import type { LazyOpentime } from "../../../../models";

const days = [
  "Maanantai",
  "Tiistai",
  "Keskiviikko",
  "Torstai",
  "Perjantai",
  "Lauantai",
  "Sunnuntai",
];

interface EmptyOpenTimeProps {
  id: string;
  day: string;
  start: Date | null;
  end: Date | null;
  isClosed: boolean;
}

const emptyOpenTime: EmptyOpenTimeProps = {
  id: "",
  day: "",
  start: null,
  end: null,
  isClosed: false,
};

const Opentimes = () => {
  const [open, setOpen] = useState(false);
  const values = useAppSelector((state) => state.newstore).openTimes;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6">Aukioloajat</Typography>
      </Grid>

      <Grid item xs={12} hidden={values.length === 0}>
        <TableContainer>
          <Table>
            <TableBody>
              {values.map((time) => (
                <Timeitem key={time.id} {...time} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>

      <Grid item xs={12}>
        <Collapse in={open}>
          <Createform />
        </Collapse>
        <Button
          variant="outlined"
          onClick={() => setOpen(!open)}
          fullWidth
          sx={{ mt: 2 }}
        >
          Lisää aukioloaika
        </Button>
      </Grid>
    </Grid>
  );
};

const Timeitem = (props: LazyOpentime) => {
  const { day, start, end, id, isClosed } = props;
  const dispatch = useAppDispatch();
  const open = new Date(start || "").toLocaleTimeString("fi-FI") || null;
  const close = new Date(end || "").toLocaleTimeString("fi-FI") || null;

  const handleRemove = () => {
    dispatch(removeOpenTime(props));
  };

  return (
    <TableRow>
      <TableCell>{day}</TableCell>
      <TableCell>{open}</TableCell>
      <TableCell>{close}</TableCell>
      <TableCell>
        <IconButton onClick={handleRemove}>
          <ClearIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

const Createform = () => {
  const [time, setTime] = useState<EmptyOpenTimeProps>(emptyOpenTime);
  const dispatch = useAppDispatch();
  const handleAdd = () => {
    dispatch(
      addOpenTime({
        day: time.day,
        start: time?.start?.toISOString(),
        end: time?.end?.toISOString(),
        id: Date.now().toString(),
        isClosed: false,
      })
    );
    setTime(emptyOpenTime);
  };

  return (
    <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
      <Grid item sm={5} xs={12}>
        <FormControl fullWidth>
          <InputLabel id="day">Päivä</InputLabel>
          <Select
            labelId="day"
            id="day"
            value={time.day}
            label="Päivä"
            onChange={(e) => setTime({ ...time, day: e.target.value })}
          >
            {days.map((day) => (
              <MenuItem key={day} value={day}>
                {day}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item sm={3} xs={12}>
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={fi}>
          <TimeField
            label="Aukioloaika"
            value={time.start}
            onChange={(newValue: Date | null) =>
              setTime({ ...time, start: newValue })
            }
          />
        </LocalizationProvider>
      </Grid>

      <Grid item sm={3} xs={12}>
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={fi}>
          <TimeField
            label="Sulkeutumisaika"
            value={time.end}
            onChange={(newValue: Date | null) =>
              setTime({ ...time, end: newValue })
            }
          />
        </LocalizationProvider>
      </Grid>

      <Grid item sm={1} xs={12}>
        <IconButton
          disabled={!time.day || !time.start || !time.end}
          onClick={handleAdd}
        >
          <AddIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default Opentimes;
