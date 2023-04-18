import React, { useEffect, useState } from "react";
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

type OpenTimes = {
  id: string;
  day: string;
  open: Date;
  close: Date;
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

const Addopentimes = (props: any) => {
  const { values, setValues } = props;
  const [open, setOpen] = useState(false);
  const [times, setTimes] = useState<OpenTimes[]>([]);
  const [time, setTime] = useState<OpenTimes>({
    id: String(Date.now()),
    day: "",
    open: new Date(),
    close: new Date(),
  });

  useEffect(() => {
    setValues({ ...values, opentimes: times });
  }, [times]);

  return (
    <>
      {times.map((item: OpenTimes) => (
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
    </>
  );
};

const Timeitem = (props: any) => {
  const { item, times, setTimes } = props;
  const open = new Date(item.open).toLocaleTimeString("fi-FI");
  const close = new Date(item.close).toLocaleTimeString("fi-FI");
  const handleRemove = () => {
    const newTimes = times.filter((time: OpenTimes) => time.id !== item.id);
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

const Createform = (props: any) => {
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
              value={time.open}
              onChange={(newValue: Date | null) =>
                setTime({ ...time, open: newValue?.setSeconds(0) })
              }
            />
          </LocalizationProvider>
        </Grid>

        <Grid item sm={3} xs={12}>
          <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={fi}>
            <TimeField
              label="Sulkeutumisaika"
              value={time.close}
              onChange={(newValue: Date | null) =>
                setTime({ ...time, close: newValue?.setSeconds(0) })
              }
            />
          </LocalizationProvider>
        </Grid>

        <Grid item sm={1} xs={12}>
          <IconButton
            disabled={!time.day || !time.open || !time.close}
            onClick={() => {
              setTimes([...times, time]);
              setTime({
                id: String(Date.now()),
                day: "",
                open: new Date(),
                close: new Date(),
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

export default Addopentimes;
