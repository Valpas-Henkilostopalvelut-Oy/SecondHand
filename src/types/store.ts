import type { FormikErrors, FormikTouched } from "formik";
import type {
  LazyCategories,
  Location,
  Contact,
  Social,
  StoreSettings,
  Notes,
  LazyStore,
} from "../models";
import type { OpenTimesProps } from "./opentimes";

export interface ComponentProps {
  values: StoreFormProps;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  setFieldValue?: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => void;
  errors: FormikErrors<StoreFormProps>;
  touched: FormikTouched<StoreFormProps>;
  isValid: boolean;
  isSubmitting: boolean;
}

export interface StoreFormProps {
  type: string;
  name: string;
  description?: string | null;
  categories?: LazyCategories[];
  contact: Contact;
  location: Location;
  imgs?: File[] | null;
  social?: Social | null;
  settings: StoreSettings;
  logo?: File | null;
  opentimes?: OpenTimesProps[] | null;
  notes?: Notes[] | null;
}

export interface filterProps {
  title: string;
  type: string | null | undefined;
  category: string[] | null | undefined;
  area: string | null;
  city: string | null;
  isConfirmed: boolean;
}

export interface initialStateProps {
  isLoading: boolean;
  isError: boolean;
  error: string | null | undefined;
  data: LazyStore[] | null;
}
