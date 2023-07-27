import React, { useState } from "react";
import { Autocomplete, TextField, Grid } from "@mui/material";
import type { EditItemState } from "../types";
import { useAppDispatch } from "../../../app/hooks";
import { updateStoreAsync } from "../../../app/reducer/stores";

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

const EditType = (props: EditItemState) => {
  const dispatch = useAppDispatch();
  const { type, setStore, isAdmin } = props;
  const [value, setValue] = useState<StoreType | null>(
    storeTypes.find((option) => option.id === type) || null
  );
  const handleTypeChange = (e: any, newValues: StoreType | null) => {
    setValue(newValues);

    setStore((prevState: any) => {
      if (!prevState) return null;
      return {
        ...prevState,
        type: newValues?.id,
      };
    });

    dispatch(
      updateStoreAsync({
        id: props.id,
        isAdmin,
        name: "type",
        value: newValues?.id,
      })
    );
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
