import type { FormikErrors, FormikHelpers, FormikTouched } from "formik";
import type {
  Store,
  Category,
  Location,
  Contact,
  Image,
  Social,
  StoreSettings,
  Opentime,
} from "../../../models";

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
  categories?: (Category | null)[] | null;
  contact: Contact;
  location: Location;
  imgs?: (Image | null)[] | null;
  social?: Social | null;
  settings?: StoreSettings | null;
  logo?: string | null;
  opentimes?: (Opentime | null)[] | null;
  notes?: string | null;
  adminNotes?: string | null;
}

export default StoreFormProps;
