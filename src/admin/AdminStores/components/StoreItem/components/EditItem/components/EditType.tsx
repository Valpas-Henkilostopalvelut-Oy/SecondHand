import React, { useState } from "react";
import { Autocomplete, TextField, Grid } from "@mui/material";

interface StoreType {
  id: string;
  name: string;
}
const storeTypes: StoreType[] = [
  { id: "fleamarket", name: "Kirpputorit" },
  { id: "shops", name: "Kaupat" },
  { id: "galleries", name: "Galleriat" },
  { id: "auctions", name: "Huutokaupat" },
  { id: "events", name: "Tapahtumat" },
];

const EditType = (props: any) => {
  const { type, handleChange } = props;
  const [value, setValue] = useState<StoreType | null>(
    storeTypes.find((option) => option.id === type) || null
  );
  const handleTypeChange = (e: any, newValues: any) => {
    setValue(newValues);
    handleChange(newValues.id);
  };
  return (
    <Grid item xs={12}>
      <Autocomplete
        id="store-type-select"
        value={value}
        options={storeTypes}
        onChange={handleTypeChange}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Tyyppi"
            placeholder="Tyyppi"
          />
        )}
      />
    </Grid>
  );
};

export default EditType;
