export interface Opentime {
  day: number;
  start: string | null;
  end: string | null;
  isClosed: boolean;
}

interface initialStateProps {
  opentimes: Opentime[] | null;
  isLoading: boolean;
  isError: boolean;
  error: string | null | undefined;
}

export default initialStateProps;
