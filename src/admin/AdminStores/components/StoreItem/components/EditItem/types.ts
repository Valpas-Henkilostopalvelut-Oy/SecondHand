import type { LazyStore } from "../../../../../../models";
import type { SetStateAction, Dispatch, ChangeEvent } from "react";

export interface EditItemProps extends LazyStore {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export interface EditItemState extends LazyStore {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
