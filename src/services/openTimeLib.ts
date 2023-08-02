import { createAsyncThunk } from "@reduxjs/toolkit";
import type { OpenTimesProps } from "../types/store";
import { Opentime } from "../models";
import { DataStore } from "aws-amplify";
import type { Store } from "../models";

export const createOpenTimeAsync = createAsyncThunk(
  "openTimes/createOpenTime",
  async ({ openTime, store }: { openTime: OpenTimesProps; store: Store }) => {
    if (!openTime.start || !openTime.end) {
      throw new Error("Please fill in all fields");
    }
    const start = new Date(openTime.start).toISOString();
    const end = new Date(openTime.end).toISOString();
    const newOpenTime = await DataStore.save(
      new Opentime({
        day: openTime.day,
        start: start,
        end: end,
        isClosed: openTime.isClosed,
        storeOpentimesId: store.id,
      })
    );
    return newOpenTime;
  }
);

export const fetchOpenTimesAsync = createAsyncThunk(
  "openTimes/fetchOpenTimes",
  async (store: Store) => {
    const opentimes = await DataStore.query(Opentime, (c) =>
      c.storeOpentimesId.eq(store.id)
    );
    return opentimes;
  }
);
