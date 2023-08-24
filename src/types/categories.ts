import type { LazyCategories } from "../models";

export interface initialStateProps {
  isLoading: boolean;
  isError: boolean;
  error: string | null | undefined;
  data: LazyCategories[] | null;
}
