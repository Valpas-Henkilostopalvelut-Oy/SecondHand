/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Areas } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AreasUpdateFormInputValues = {
    name?: string;
};
export declare type AreasUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AreasUpdateFormOverridesProps = {
    AreasUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AreasUpdateFormProps = React.PropsWithChildren<{
    overrides?: AreasUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    areas?: Areas;
    onSubmit?: (fields: AreasUpdateFormInputValues) => AreasUpdateFormInputValues;
    onSuccess?: (fields: AreasUpdateFormInputValues) => void;
    onError?: (fields: AreasUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AreasUpdateFormInputValues) => AreasUpdateFormInputValues;
    onValidate?: AreasUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AreasUpdateForm(props: AreasUpdateFormProps): React.ReactElement;
