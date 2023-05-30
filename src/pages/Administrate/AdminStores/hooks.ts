import { useAppSelector } from "../../../app/hooks";
export const useStorelist = () => {
  const storelist = useAppSelector((state) => state.stores.data);
  return { storelist };
};
