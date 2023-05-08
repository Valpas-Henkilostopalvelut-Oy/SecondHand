import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Link } from "@mui/material";
import { Search } from "../../globalComponents/Search";
import { DataStore } from "aws-amplify";
import type { LazyStore } from "../../models";
import { Store } from "../../models";
import type { SearchState } from "./types";
import StoreItem from "./components/StoreItem";

const Storelist = () => {
  const [search, setSearch] = useState<SearchState>({
    search: "",
    area: "",
    city: "",
    category: [],
  });

  const [stores, setStores] = useState<LazyStore[]>([]);

  useEffect(() => {
    const fetchStores = async () => {
      const stores = await DataStore.query(Store);
      const filterByArea = stores.filter((item) => {
        if (search.area === "" || !search.area) return true;
        return item.location?.admin_name === search.area;
      });

      const filterByCity = filterByArea.filter((item) => {
        if (search.city === "" || !search.city) return true;
        return item.location?.city === search.city;
      });

      const filterByCategory = filterByCity.filter((item) => {
        if (search.category.length === 0 || !search.category) return true;
        return item.categories?.some((cat: any) =>
          search.category.includes(cat?.name)
        );
      });

      const filter = filterByCategory.filter((item) => {
        if (search.search === "") return true;
        return (
          item?.name?.toLowerCase().includes(search.search.toLowerCase()) ||
          item.location?.address
            ?.toLowerCase()
            .includes(search.search.toLowerCase()) ||
          item.location?.city
            ?.toLowerCase()
            .includes(search.search.toLowerCase()) ||
          item.location?.admin_name
            ?.toLowerCase()
            .includes(search.search.toLowerCase()) ||
          item.location?.zip
            ?.toLowerCase()
            .includes(search.search.toLowerCase()) ||
          item.contact?.email
            ?.toLowerCase()
            .includes(search.search.toLowerCase()) ||
          item.contact?.phone
            ?.toLowerCase()
            .includes(search.search.toLowerCase()) ||
          item.contact?.website
            ?.toLowerCase()
            .includes(search.search.toLowerCase())
        );
      });

      setStores(filter);
    };
    fetchStores();
  }, [search]);

  return (
    <Box>
      <Typography variant="h4">Kaikki kirpputorit</Typography>
      <Search
        search={search}
        setSearch={setSearch}
        onClick={() => console.log(search)}
      />

      {stores.map((item: LazyStore) => (
        <StoreItem {...item} key={item.id} />
      ))}
    </Box>
  );
};

export default Storelist;
