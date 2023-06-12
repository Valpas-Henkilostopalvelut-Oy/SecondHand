export interface AdButton {
  text: string;
  link: string;
  color?: string | null;
  background?: string | null;
}

export interface Side {
  image?: string | null;
  title: string;
  button?: AdButton | null;
}

export interface Ad {
  id?: string | null;
  firm: string;
  site?: string | null;
  backgroundColor?: string | null;
  left: Side;
  right?: Side | null;
  isHidden?: boolean | null;
}

export interface AdsState {
  ads: Ad[] | [];
  isLoading: boolean;
  isError: boolean;
  error: string | null | undefined;
}
