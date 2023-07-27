import type { FormikErrors, FormikTouched } from "formik";
import type {
  Categories,
  Location,
  Contact,
  Social,
  StoreSettings,
  Opentime,
} from "../../models";
import type { AsyncCollection } from "@aws-amplify/datastore";

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
  categories?: AsyncCollection<Categories> | null;
  contact: Contact;
  location: Location;
  imgs?: File[] | null;
  social?: Social | null;
  settings?: StoreSettings | null;
  logo?: string | null;
  opentimes?: (Opentime | null)[] | null;
  notes?: string | null;
  adminNotes?: string | null;
}

export default StoreFormProps;
