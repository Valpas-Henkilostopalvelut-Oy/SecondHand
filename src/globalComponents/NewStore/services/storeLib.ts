import { Store, Categories, Opentime, Notes } from "../../../models";
import { DataStore, Auth } from "aws-amplify";
import type StoreFormProps from "../types";

export const createNote = async (note: string) => {
  const user = await Auth.currentAuthenticatedUser();
  const newNote = await DataStore.save(
    new Notes({
      notes: note,
      username: user.username,
    })
  );
  return newNote;
};

export const deleteNote = async (id: string) => {
  const note = await DataStore.query(Notes, id);
  if (!note) throw new Error("Note not found");
  return await DataStore.delete(note);
};

const createStore = async (store: StoreFormProps) => {
  const user = await Auth.currentAuthenticatedUser();
  await DataStore.save(
    new Store({
      username: user.username,
      type: store.type,
      name: store.name,
      contact: store.contact,
      location: store.location,
      settings: store.settings,
    })
  );
};
