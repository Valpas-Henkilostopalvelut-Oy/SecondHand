/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type LocationsCreateFormInputValues = {
    adminName?: string;
    country?: string;
    image?: string;
};
export declare type LocationsCreateFormValidationValues = {
    adminName?: ValidationFunction<string>;
    country?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LocationsCreateFormOverridesProps = {
    LocationsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    adminName?: PrimitiveOverrideProps<TextFieldProps>;
    country?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LocationsCreateFormProps = React.PropsWithChildren<{
    overrides?: LocationsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: LocationsCreateFormInputValues) => LocationsCreateFormInputValues;
    onSuccess?: (fields: LocationsCreateFormInputValues) => void;
    onError?: (fields: LocationsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LocationsCreateFormInputValues) => LocationsCreateFormInputValues;
    onValidate?: LocationsCreateFormValidationValues;
} & React.CSSProperties>;
export default function LocationsCreateForm(props: LocationsCreateFormProps): React.ReactElement;
