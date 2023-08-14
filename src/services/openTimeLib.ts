import { createAsyncThunk } from "@reduxjs/toolkit";
import type { OpenTimesProps } from "../types/store";
import { Opentime, Store } from "../models";
import { DataStore } from "aws-amplify";
import type { LazyStore } from "../models";
import { OpentimesType } from "../models";
import { Auth } from "aws-amplify";

export const opentimesToStore = async (store: Store) => {
  return await DataStore.query(Opentime, (o) => o.storeID.eq(store.id));
};

export const createOpenTimeAsync = createAsyncThunk(
  "openTimes/createOpenTime",
  async ({
    openTime,
    store,
    type = OpentimesType.DEFAULT,
  }: {
    openTime: OpenTimesProps;
    store: LazyStore;
    type?: OpentimesType;
  }) => {
    if (!openTime.start || !openTime.end)
      throw new Error("Please fill in all fields");
    const user = await Auth.currentAuthenticatedUser();
    const start = new Date(openTime.start).toISOString();
    const end = new Date(openTime.end).toISOString();
    const newOpenTime = await DataStore.save(
      new Opentime({
        day: openTime.day,
        start: start,
        end: end,
        isClosed: openTime.isClosed,
        storeID: store.id,
        type: type,
        createdBy: user.username,
      })
    );
    return newOpenTime;
  }
);

export const fetchOpenTimesAsync = createAsyncThunk(
  "openTimes/fetchOpenTimes",
  async (storeId: string) => {
    if (!storeId) throw new Error("Please provide a store ID");
    const store = await DataStore.query(Store, storeId);
    if (!store) throw new Error("Store not found");
    const opentimes = await DataStore.query(Opentime, (o) =>
      o.storeID.eq(store.id)
    );
    return opentimes;
  }
);

export const deleteOpenTimeAsync = createAsyncThunk(
  "openTimes/deleteOpenTime",
  async (openTimeId: string) => {
    if (!openTimeId) throw new Error("Please provide an open time ID");
    const openTime = await DataStore.query(Opentime, openTimeId);
    if (!openTime) throw new Error("Open time not found");
    await DataStore.delete(openTime);
    return openTime;
  }
);
