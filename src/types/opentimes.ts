import type { LazyOpentime } from "../models";

export interface initialStateProps {
  opentimes: LazyOpentime[] | null;
  isLoading: boolean;
  isError: boolean;
  error: string | null | undefined;
}
export interface OpenTimesProps {
  id?: string;
  type?: string;
  day: number;
  start: string | null;
  end: string | null;
  isClosed: boolean;
}
export interface SortedTimes {
  ids: string[];
  day_first: number;
  day_last: number;
  start?: string | null;
  end?: string | null;
  isClosed?: boolean | null;
}

export interface OpenTimeReducer {
  type: string; //default or custom
  days: SortedTimes[];
}

export interface OpenTimeReducerProps {
  acc: OpenTimeReducer[];
  typeEntryIndex: number;
  index: number;
  times: LazyOpentime[];
  item: LazyOpentime;
}
