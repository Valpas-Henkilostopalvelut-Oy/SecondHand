export interface StoreType {
  id: string;
  name: string;
}
export const storeTypes: StoreType[] = [
  { id: "fleamarket", name: "Kirpputorit" },
  { id: "shops", name: "Kaupat" },
  { id: "galleries", name: "Galleriat" },
  { id: "auctions", name: "Huutokaupat" },
  { id: "events", name: "Tapahtumat" },
];
export const getStoreType = (id: string) =>
  storeTypes.find((type) => type.id === id);
