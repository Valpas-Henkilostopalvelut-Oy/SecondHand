import type { LazyOpentime } from "../models";

export interface initialStateProps {
  opentimes: LazyOpentime[] | null;
  isLoading: boolean;
  isError: boolean;
  error: string | null | undefined;
}
