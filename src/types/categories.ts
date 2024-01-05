import BaseType from "./basetype";

export interface Categories extends BaseType {
  name: string;
  description: string | null | undefined;
  image: string | null | undefined;
}
