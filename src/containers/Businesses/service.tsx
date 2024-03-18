import { Autocomplete, TextField, TextFieldProps } from "@mui/material";

export interface AutocompleteOption {
  name: string;
  [key: string]: any; // Extend this interface based on the actual structure of your options
}

interface CustomAutocompleteProps {
  id: string;
  label: string;
  options: AutocompleteOption[];
  value: AutocompleteOption | null;
  onChange: (
    event: React.SyntheticEvent<Element, Event>,
    value: AutocompleteOption | null
  ) => void;
  disabled?: boolean;
}

export const CustomAutocomplete: React.FC<CustomAutocompleteProps> = ({
  id,
  label,
  options,
  value,
  onChange,
  disabled = false,
}) => (
  <Autocomplete
    disablePortal
    id={id}
    options={options}
    fullWidth
    value={value}
    getOptionLabel={(option) => option.name}
    onChange={onChange}
    disabled={disabled}
    renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps) => (
      <TextField {...params} label={label} variant="standard" />
    )}
  />
);
