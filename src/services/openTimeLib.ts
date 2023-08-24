import { createAsyncThunk } from "@reduxjs/toolkit";
import type {
  OpenTimesProps,
  OpenTimeReducer,
  OpenTimeReducerProps,
} from "../types/opentimes";
import { Opentime, Store } from "../models";
import { DataStore } from "aws-amplify";
import type { LazyStore, LazyOpentime } from "../models";
import { OpentimesType } from "../models";
import { Auth, SortDirection } from "aws-amplify";

export const getSortedByTypes = ({
  times,
  func,
}: {
  times: LazyOpentime[];
  func: (props: OpenTimeReducerProps) => void;
}) =>
  times.reduce((acc: OpenTimeReducer[], item: LazyOpentime, index) => {
    const { day, start, end, isClosed, type } = item;

    // Find or create an entry in the accumulator array for the current type
    const typeEntryIndex = acc.findIndex((entry) => entry.type === type);
    if (typeEntryIndex === -1) {
      acc.push({
        type,
        days: [
          {
            ids: [item.id],
            day_first: day,
            day_last: day,
            start,
            end,
            isClosed,
          },
        ],
      });
    } else {
      func({ acc, typeEntryIndex, index, times, item });
    }

    return acc;
  }, []);

export const getSorted = ({
  acc,
  typeEntryIndex,
  item,
}: OpenTimeReducerProps) => {
  acc[typeEntryIndex].days.push({
    ids: [item.id],
    day_first: item.day,
    day_last: item.day,
    start: item.start,
    end: item.end,
    isClosed: item.isClosed,
  });
};

export const getSortedByDays = ({
  acc,
  typeEntryIndex,
  index,
  times,
  item,
}: OpenTimeReducerProps) => {
  const typeEntry = acc[typeEntryIndex];
  const prevOpentime = index > 0 ? times[index - 1] : null;
  const { start, end, isClosed, type, day } = item;

  if (
    prevOpentime &&
    prevOpentime.type === type &&
    prevOpentime.start === start &&
    prevOpentime.end === end &&
    !isClosed
  ) {
    // Update day_last if start and end times are the same as the previous day
    typeEntry.days[typeEntry.days.length - 1].day_last = day;
    typeEntry.days[typeEntry.days.length - 1].ids.push(item.id);
  } else if (isClosed) {
    // Group closed days
    if (typeEntry.days[typeEntry.days.length - 1].isClosed) {
      typeEntry.days[typeEntry.days.length - 1].day_last = day;
      typeEntry.days[typeEntry.days.length - 1].ids.push(item.id);
    } else {
      typeEntry.days.push({
        day_first: day,
        day_last: day,
        isClosed,
        ids: [item.id],
      });
    }
  } else {
    const dayEntryIndex = typeEntry.days.findIndex(
      (entry) => entry.day_first === day
    );
    if (dayEntryIndex === -1) {
      typeEntry.days.push({
        day_first: day,
        day_last: day,
        start,
        end,
        isClosed,
        ids: [item.id],
      });
    } else {
      typeEntry.days[dayEntryIndex].start = start;
      typeEntry.days[dayEntryIndex].end = end;
      typeEntry.days[dayEntryIndex].isClosed = isClosed;
      typeEntry.days[dayEntryIndex].ids.push(item.id);
    }
  }
};

export const opentimesToStore = async (store: Store) =>
  await DataStore.query(Opentime, (o) => o.storeID.eq(store.id), {
    sort: (s) => s.day(SortDirection.ASCENDING),
  });

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
    const opentimes = await DataStore.query(
      Opentime,
      (o) => o.storeID.eq(store.id),
      {
        sort: (s) => s.day("ASCENDING"),
      }
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
