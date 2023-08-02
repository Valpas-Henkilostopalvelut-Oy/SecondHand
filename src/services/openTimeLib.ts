import type { OpenTimesProps } from "../types/store";
import { Opentime } from "../models";
import { DataStore } from "aws-amplify";
import type { Store } from "../models";

export const createOpenTime = async (openTime: OpenTimesProps, store: Store) => {
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
};
