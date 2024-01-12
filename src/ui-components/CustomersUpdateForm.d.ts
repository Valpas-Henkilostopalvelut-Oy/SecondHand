/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
import { Customers } from "../models";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CustomersUpdateFormInputValues = {};
export declare type CustomersUpdateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CustomersUpdateFormOverridesProps = {
    CustomersUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type CustomersUpdateFormProps = React.PropsWithChildren<{
    overrides?: CustomersUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    customers?: Customers;
    onSubmit?: (fields: CustomersUpdateFormInputValues) => CustomersUpdateFormInputValues;
    onSuccess?: (fields: CustomersUpdateFormInputValues) => void;
    onError?: (fields: CustomersUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CustomersUpdateFormInputValues) => CustomersUpdateFormInputValues;
    onValidate?: CustomersUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CustomersUpdateForm(props: CustomersUpdateFormProps): React.ReactElement;
