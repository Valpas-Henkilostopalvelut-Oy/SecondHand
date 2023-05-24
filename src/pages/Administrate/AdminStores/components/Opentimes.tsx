import React, { useState } from "react";
import {
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
  Checkbox,
  FormControlLabel,
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

interface TimeFieldProps {
  value: Date | null;
  onChange: (date: Date | null) => void;
}

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
  const { day, isClosed } = props;
  const dispatch = useAppDispatch();
  const start = new Date(props.start || "");
  const end = new Date(props.end || "");

  const handleRemove = () => {
    dispatch(removeOpenTime(props));
  };

  return (
    <TableRow>
      <TableCell>{day}</TableCell>
      {!isClosed && (
        <TableCell>
          {start.toLocaleTimeString("fi-FI", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </TableCell>
      )}
      {!isClosed && (
        <TableCell>
          {end.toLocaleTimeString("fi-FI", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </TableCell>
      )}
      {isClosed && <TableCell colSpan={2}>Suljettu</TableCell>}
      <TableCell align="right">
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
        isClosed: time.isClosed,
      })
    );
    setTime(emptyOpenTime);
  };

  const handleChangeStart = (newValue: any) => {
    setTime((prev) => ({ ...prev, start: newValue }));
  };
  const handleChangeEnd = (newValue: any) => {
    setTime((prev) => ({ ...prev, end: newValue }));
  };
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setTime((prev) => ({ ...prev, day: value }));
  };
  const handleCheckbox = (e: any) => {
    const { checked } = e.target;
    setTime((prev) => ({ ...prev, isClosed: checked }));
  };

  return (
    <Grid container spacing={2} sx={{ mb: 2, mt: 2 }} alignItems="center">
      <Grid item sm={5} xs={12}>
        <FormControl fullWidth>
          <InputLabel id="day">Päivä</InputLabel>
          <Select
            labelId="day"
            id="day"
            value={time.day}
            label="Päivä"
            name="day"
            onChange={handleChange}
          >
            {days.map((day) => (
              <MenuItem key={day} value={day}>
                {day}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item sm={2} xs={12}>
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={fi}>
          <TimeField
            label="Aukioloaika"
            value={time.start}
            name="start"
            onChange={handleChangeStart}
            fullWidth
            disabled={time.isClosed}
            maxTime={time.end}
          />
        </LocalizationProvider>
      </Grid>

      <Grid item sm={2} xs={12}>
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={fi}>
          <TimeField
            label="Sulkeutumisaika"
            value={time.end}
            name="end"
            onChange={handleChangeEnd}
            fullWidth
            disabled={time.isClosed}
            minTime={time.start}
          />
        </LocalizationProvider>
      </Grid>
      <Grid item sm={2} xs={12}>
        <FormControlLabel
          control={
            <Checkbox
              checked={time.isClosed}
              onChange={handleCheckbox}
              name="isClosed"
            />
          }
          label="Suljettu"
        />
      </Grid>

      <Grid item sm={1} xs={12}>
        <IconButton
          disabled={(!time.day || !time.start || !time.end) && !time.isClosed}
          onClick={handleAdd}
        >
          <AddIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default Opentimes;
