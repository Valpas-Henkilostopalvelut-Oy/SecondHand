import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Link } from "@mui/material";
import { Search } from "../../globalComponents/Search";
import { DataStore } from "aws-amplify";
import type { LazyStore } from "../../models";
import { Store } from "../../models";
import type { SearchState, StorelistProps } from "./types";
import StoreItem from "./components/StoreItem";
import withLoading from "./components/withLoading";

const Storelist = ({ storelist }: StorelistProps) => {
  const [search, setSearch] = useState<SearchState>({
    search: "",
    area: "",
    city: "",
    category: [],
  });

  return (
    <Box>
      <Typography variant="h4">Kaikki kirpputorit</Typography>
      <Search
        search={search}
        setSearch={setSearch}
        onClick={() => console.log(search)}
      />

      {!!storelist &&
        storelist.map((item: LazyStore) => (
          <StoreItem {...item} key={item.id} />
        ))}
    </Box>
  );
};

const StorelistWithLoading = withLoading(Storelist);

export default StorelistWithLoading;
