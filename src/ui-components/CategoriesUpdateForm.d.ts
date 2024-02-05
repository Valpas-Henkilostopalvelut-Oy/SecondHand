/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Categories } from "../models";
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
export declare type CategoriesUpdateFormInputValues = {
    name?: string;
    description?: string;
    image?: string;
};
export declare type CategoriesUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CategoriesUpdateFormOverridesProps = {
    CategoriesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CategoriesUpdateFormProps = React.PropsWithChildren<{
    overrides?: CategoriesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    categories?: Categories;
    onSubmit?: (fields: CategoriesUpdateFormInputValues) => CategoriesUpdateFormInputValues;
    onSuccess?: (fields: CategoriesUpdateFormInputValues) => void;
    onError?: (fields: CategoriesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CategoriesUpdateFormInputValues) => CategoriesUpdateFormInputValues;
    onValidate?: CategoriesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CategoriesUpdateForm(props: CategoriesUpdateFormProps): React.ReactElement;
