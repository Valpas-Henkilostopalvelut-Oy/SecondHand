import type { Store } from "../models";
import { Notes } from "../models";
import { DataStore, Auth } from "aws-amplify";

export const createNote = async (note: string, store: Store) => {
  const user = await Auth.currentAuthenticatedUser();
  const newNote = await DataStore.save(
    new Notes({
      notes: note,
      username: user.username,
      storeID: store.id,
    })
  );
  return newNote;
};
