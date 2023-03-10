/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Categories } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CategoriesUpdateFormInputValues = {
    createdBy?: string;
};
export declare type CategoriesUpdateFormValidationValues = {
    createdBy?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CategoriesUpdateFormOverridesProps = {
    CategoriesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    createdBy?: PrimitiveOverrideProps<TextFieldProps>;
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
