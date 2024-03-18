import React from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  FormControl,
  Select,
  MenuItem,
  Autocomplete,
  styled,
  InputLabel,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { search, reset } from "../../redux/reducer/searchSlice";
import SearchIcon from "@mui/icons-material/Search";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

const orderBy = [
  "Uusimmat",
  "Vanhemat",
  "Auki ensin",
  "Suljetut ensin",
  "A-Ö",
  "Ö-A",
];

const OpenOnButton = styled(Button)(({ theme }) => ({
  // width 50% - 2px
  width: "calc(50% - 2px)",
  textTransform: "none",
  marginBottom: "2px",
}));

const FilterTabMobile = ({
  handleClose,
}: {
  handleClose: () => void;
}): JSX.Element => {
  const dispatch = useAppDispatch();
  const { cities, locations } = useAppSelector((state) => state.locationSlice);
  const {
    search: { searchQuery },
  } = useAppSelector((state) => state.business);
  const { businessTypes } = useAppSelector((state) => state.typeSlice);
  const { categories } = useAppSelector((state) => state.categoriesSlice);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      search({ ...searchQuery, [event.target.name]: event.target.value })
    );
  };

  const setFieldValue = (name: string, value?: any) => {
    dispatch(search({ ...searchQuery, [name]: value }));
  };

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <Box
      display={"flex"}
      gap={"25px"}
      padding={"20px 10px"}
      flexDirection={"column"}
    >
      <TextField
        name="search"
        type="text"
        label="Hae"
        onChange={handleChange}
        value={searchQuery.search}
        fullWidth
        variant="standard"
      />
      <Typography variant="caption">Aukioloajat</Typography>
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"space-between"}
        paddingTop={"10px"}
      >
        <OpenOnButton variant="contained">Joka päivä</OpenOnButton>
        <OpenOnButton variant="outlined">Auki nyt</OpenOnButton>
        <OpenOnButton variant="outlined" disabled>
          Valitse päivä
        </OpenOnButton>
        <OpenOnButton variant="outlined">Tämä vikkonloppu</OpenOnButton>
      </Box>
      <Autocomplete
        disablePortal
        id="Type-Autocomplete"
        options={businessTypes ?? []}
        fullWidth
        value={searchQuery.type}
        getOptionLabel={(option) => option.name}
        onChange={(event, value) =>
          dispatch(search({ ...searchQuery, type: value }))
        }
        renderInput={(params) => (
          <TextField {...params} label="Typpi" variant="standard" />
        )}
      />
      <Autocomplete
        disablePortal
        disabled={!searchQuery.type}
        id="Categories-Autocomplete"
        options={categories ?? []}
        fullWidth
        getOptionLabel={(option) => option.name}
        value={searchQuery.category}
        onChange={(event, value) =>
          dispatch(search({ ...searchQuery, category: value }))
        }
        renderInput={(params) => (
          <TextField {...params} label="Kategoria" variant="standard" />
        )}
      />
      <Autocomplete
        disablePortal
        id="Area-Autocomplete"
        options={locations ?? []}
        value={searchQuery.adminName}
        getOptionLabel={(option) => option.adminName}
        onChange={(event, value) =>
          dispatch(search({ ...searchQuery, adminName: value }))
        }
        renderInput={(params) => (
          <TextField {...params} label="Alue" variant="standard" />
        )}
      />
      <Autocomplete
        disablePortal
        disabled={!searchQuery.adminName}
        id="City-Autocomplete"
        options={cities ?? []}
        value={searchQuery.city}
        getOptionLabel={(option) => option.name}
        onChange={(event, value) =>
          dispatch(search({ ...searchQuery, city: value }))
        }
        renderInput={(params) => (
          <TextField {...params} label="Kaupunki" variant="standard" />
        )}
      />
      <FormControl variant="standard">
        <InputLabel id="OrderBy-select-label">Järjestä</InputLabel>
        <Select
          labelId="OrderBy-select-label"
          id="OrderBy-select"
          value={searchQuery.orderBy ?? 0}
          onChange={(event) =>
            setFieldValue("orderBy", Number(event.target.value))
          }
        >
          {orderBy.map((option, index) => (
            <MenuItem value={index} key={index}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Button
        variant="contained"
        fullWidth
        startIcon={<SearchIcon />}
        onClick={handleClose}
      >
        Etsi
      </Button>
      <Button
        type="reset"
        variant="outlined"
        fullWidth
        startIcon={<RestartAltIcon />}
        onClick={handleReset}
      >
        Reset
      </Button>
    </Box>
  );
};

export default FilterTabMobile;
