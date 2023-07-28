import type { FormikErrors, FormikTouched } from "formik";
import type {
  Categories,
  Location,
  Contact,
  Social,
  StoreSettings,
  Opentime,
  Notes,
} from "../../models";

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

interface StoreFormProps {
  type: string;
  name: string;
  description?: string | null;
  categories?: Categories[] | null;
  contact: Contact;
  location: Location;
  imgs?: File[] | null;
  social?: Social | null;
  settings: StoreSettings;
  logo?: File | null;
  opentimes?: Opentime[] | null;
  notes?: Notes[] | null;
  note?: string | null;
}

export default StoreFormProps;
