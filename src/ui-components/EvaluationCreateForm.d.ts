/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EvaluationCreateFormInputValues = {
    name?: string;
    email?: string;
    phone?: string;
    description?: string;
    category?: string;
    type?: string;
    images?: string[];
    isConfirmed?: boolean;
};
export declare type EvaluationCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    category?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    images?: ValidationFunction<string>;
    isConfirmed?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EvaluationCreateFormOverridesProps = {
    EvaluationCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    category?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    images?: PrimitiveOverrideProps<TextFieldProps>;
    isConfirmed?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type EvaluationCreateFormProps = React.PropsWithChildren<{
    overrides?: EvaluationCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EvaluationCreateFormInputValues) => EvaluationCreateFormInputValues;
    onSuccess?: (fields: EvaluationCreateFormInputValues) => void;
    onError?: (fields: EvaluationCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EvaluationCreateFormInputValues) => EvaluationCreateFormInputValues;
    onValidate?: EvaluationCreateFormValidationValues;
} & React.CSSProperties>;
export default function EvaluationCreateForm(props: EvaluationCreateFormProps): React.ReactElement;
