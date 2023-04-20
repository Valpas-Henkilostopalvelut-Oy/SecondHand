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
  TextField,
} from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimeField } from "@mui/x-date-pickers/TimeField";
import AddIcon from "@mui/icons-material/Add";
import fi from "date-fns/locale/fi";
import ClearIcon from "@mui/icons-material/Clear";
import type { NewStoreProps } from "../types";
import type { LazyOpentime } from "../../../../../models";

type FormProps = {
  open: boolean;
  times: LazyOpentime[];
  setTimes: Dispatch<SetStateAction<LazyOpentime[]>>;
  time: LazyOpentime;
  setTime: Dispatch<SetStateAction<LazyOpentime>>;
};

type itemProps = {
  item: LazyOpentime;
  times: LazyOpentime[];
  setTimes: Dispatch<SetStateAction<LazyOpentime[]>>;
};

const days = [
  "Maanantai",
  "Tiistai",
  "Keskiviikko",
  "Torstai",
  "Perjantai",
  "Lauantai",
  "Sunnuntai",
];

const emptyOpenTime: LazyOpentime = {
  id: String(Date.now()),
  day: "",
  start: null,
  end: null,
};

const Opentimes = (props: NewStoreProps) => {
  const { values, setValues } = props;
  const [open, setOpen] = useState(false);
  const [times, setTimes] = useState<LazyOpentime[]>([]);
  const [time, setTime] = useState<LazyOpentime>(emptyOpenTime);

  useEffect(() => {
    setValues({ ...values, opentimes: times });
  }, [times]);

  return (
    <Grid container spacing={2}>
      {times.map((item: LazyOpentime) => (
        <Grid item xs={12} key={item.day}>
          <Timeitem item={item} times={times} setTimes={setTimes} />
        </Grid>
      ))}

      <Grid item xs={12}>
        <Createform {...{ open, times, setTimes, time, setTime }} />
      </Grid>

      <Grid item xs={12}>
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

const Timeitem = (props: itemProps) => {
  const { item, times, setTimes } = props;
  const open = item.start && new Date(item.start).toLocaleTimeString("fi-FI");
  const close = item.end && new Date(item.end).toLocaleTimeString("fi-FI");
  const handleRemove = () => {
    const newTimes = times.filter((time: LazyOpentime) => time.id !== item.id);
    setTimes(newTimes);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography variant="body1" sx={{ mr: 2 }}>
        {item.day}
      </Typography>

      <Typography variant="body1" sx={{ mr: 2 }}>
        {open}
      </Typography>

      <Typography variant="body1" sx={{ mr: 2 }}>
        {close}
      </Typography>

      <IconButton onClick={handleRemove}>
        <ClearIcon />
      </IconButton>
    </Box>
  );
};

const Createform = (props: FormProps) => {
  const { open, times, setTimes, time, setTime } = props;
  return (
    <Collapse in={open}>
      <Grid container spacing={2}>
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
                setTime({ ...time, start: newValue?.setSeconds(0) })
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
                setTime({ ...time, end: newValue?.setSeconds(0) })
              }
            />
          </LocalizationProvider>
        </Grid>

        <Grid item sm={1} xs={12}>
          <IconButton
            disabled={!time.day || !time.start || !time.end}
            onClick={() => {
              setTimes([...times, time]);
              setTime({
                id: String(Date.now()),
                day: "",
                start: null,
                end: null,
              });
            }}
          >
            <AddIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Collapse>
  );
};

export default Opentimes;
