import React from "react";
import {
  Grid,
  FormControlLabel,
  Checkbox,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Typography,
  TextField,
} from "@mui/material";
import type { LazyStoreSettings } from "../../../models";
import type { EditItemState } from "../types";
import { updateStoreAsync } from "../../../app/reducer/stores";
import { useAppDispatch } from "../../../app/hooks";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import fi from "date-fns/locale/fi";

interface ParametersProps {
  Name: string;
  Value: keyof LazyStoreSettings;
  Type: string;
  Hidden: boolean;
}

interface ParameterProps extends EditItemState {
  parameter: ParametersProps;
}

const parameters: ParametersProps[] = [
  {
    Name: "Maksettu",
    Value: "isPaid",
    Type: "boolean",
    Hidden: false,
  },
  {
    Name: "Piilotettu",
    Value: "isHidden",
    Type: "boolean",
    Hidden: false,
  },
  {
    Name: "Vahvisettu",
    Value: "isConfirmed",
    Type: "boolean",
    Hidden: false,
  },
  {
    Name: "Premium",
    Value: "isPremium",
    Type: "boolean",
    Hidden: false,
  },
  {
    Name: "Promoted",
    Value: "isPromoted",
    Type: "boolean",
    Hidden: false,
  },
];

const Parameter = (props: ParameterProps) => {
  const { parameter, settings, setStore, isAdmin } = props;
  const dispatch = useAppDispatch();
  const { Value } = parameter;

  const handleCheck = (
    event: React.SyntheticEvent<Element, Event>,
    checked: boolean
  ) => {
    const newSettings: LazyStoreSettings = {
      ...settings,
      [Value]: { status: checked },
    };
    setStore((prev) => {
      if (!prev) return;
      return {
        ...prev,
        settings: { ...newSettings },
      };
    });
    dispatch(
      updateStoreAsync({
        id: props.id,
        value: { ...newSettings },
        isAdmin,
        name: "settings",
      })
    );
  };

  const handleUpdate = (value: any) => {
    const newSettings: LazyStoreSettings = {
      ...settings,
      [Value]: { message: value.target.value },
    };
    dispatch(
      updateStoreAsync({
        id: props.id,
        value: { ...newSettings },
        isAdmin,
        name: "settings",
      })
    );
  };

  const handleChange = (event: any) => {
    const newSettings: LazyStoreSettings = {
      ...settings,
      [Value]: { message: event.target.value },
    };
    setStore((prev) => {
      if (!prev) return;
      return {
        ...prev,
        settings: { ...newSettings },
      };
    });
  };

  const handleDateChange = (value: Date | null, side: string) => {
    const newSettings: LazyStoreSettings = {
      ...settings,
      [Value]: {
        ...settings[Value],
        [side]: value?.toISOString(),
      },
    };
    setStore((prev) => {
      if (!prev) return;
      return {
        ...prev,
        settings: { ...newSettings },
      };
    });
    dispatch(
      updateStoreAsync({
        id: props.id,
        value: { ...newSettings },
        isAdmin,
        name: "settings",
      })
    );
  };

  const start = new Date(settings[Value]?.from || "");
  const end = new Date(settings[Value]?.to || "");

  return (
    <Grid container spacing={2}>
      <Grid item xs={6} sm={2}>
        <FormControlLabel
          control={
            <Checkbox
              checked={settings[Value]?.status || false}
              onChange={handleCheck}
              name={Value}
              color="primary"
            />
          }
          labelPlacement="top"
          label={parameter.Name}
        />
      </Grid>
      <Grid item xs={6} sm={3}>
        <TextField
          id="comment-message"
          name="message"
          variant="standard"
          fullWidth
          label="Lisätietoja"
          value={settings[Value]?.message || ""}
          onChange={handleChange}
          onBlur={handleUpdate}
        />
      </Grid>
      <Grid item xs={6} sm={3.5}>
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={fi}>
          <DesktopDatePicker
            label="Alkaa"
            value={start}
            onChange={(date) => handleDateChange(date, "from")}
          />
        </LocalizationProvider>
      </Grid>
      <Grid item xs={6} sm={3.5}>
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={fi}>
          <DesktopDatePicker
            label="Päättyy"
            value={end}
            onChange={(date) => handleDateChange(date, "to")}
          />
        </LocalizationProvider>
      </Grid>
    </Grid>
  );
};

const EditSettings = (props: EditItemState) => (
  <Grid item xs={12} hidden={!props.isAdmin}>
    <Accordion>
      <AccordionSummary>
        <Typography variant="h6">Asetukset</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {parameters.map((parameter) => (
          <Box key={parameter.Value} border="1px solid #ccc" p={1} my={1}>
            <Parameter parameter={parameter} {...props} />
          </Box>
        ))}
      </AccordionDetails>
    </Accordion>
  </Grid>
);

export default EditSettings;
