import { DataStore } from "aws-amplify";
import { Store } from "../models";

export const fetchStore = async (id: string) => {
  if (!id) return;
  const store = await DataStore.query(Store, id);
  return store;
};
