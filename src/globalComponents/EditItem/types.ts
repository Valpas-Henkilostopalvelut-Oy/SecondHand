import type { LazyStore } from "../../models";
import type { SetStateAction, Dispatch, ChangeEvent } from "react";

export interface EditItemProps {
  dataId: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export interface EditItemState extends LazyStore {
  isAdmin?: boolean;
  setStore: React.Dispatch<React.SetStateAction<LazyStore | null | undefined>>;
}
