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
export declare type TypesCreateFormInputValues = {
    name?: string;
    image?: string;
};
export declare type TypesCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TypesCreateFormOverridesProps = {
    TypesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TypesCreateFormProps = React.PropsWithChildren<{
    overrides?: TypesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TypesCreateFormInputValues) => TypesCreateFormInputValues;
    onSuccess?: (fields: TypesCreateFormInputValues) => void;
    onError?: (fields: TypesCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TypesCreateFormInputValues) => TypesCreateFormInputValues;
    onValidate?: TypesCreateFormValidationValues;
} & React.CSSProperties>;
export default function TypesCreateForm(props: TypesCreateFormProps): React.ReactElement;
