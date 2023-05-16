import { useAppSelector } from "../../../app/hooks";
export const useStorelist = () => {
  const storelist = useAppSelector((state) => state.adminStoresSlice.data);
  return { storelist };
};
