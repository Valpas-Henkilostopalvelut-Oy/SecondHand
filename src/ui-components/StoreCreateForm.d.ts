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
export declare type StoreCreateFormInputValues = {
    type?: string;
    userID?: string;
    isConfirmed?: boolean;
    name?: string;
    description?: string;
    services?: number[];
    clicked?: string;
    embedmap?: string;
};
export declare type StoreCreateFormValidationValues = {
    type?: ValidationFunction<string>;
    userID?: ValidationFunction<string>;
    isConfirmed?: ValidationFunction<boolean>;
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    services?: ValidationFunction<number>;
    clicked?: ValidationFunction<string>;
    embedmap?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StoreCreateFormOverridesProps = {
    StoreCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
    isConfirmed?: PrimitiveOverrideProps<SwitchFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    services?: PrimitiveOverrideProps<TextFieldProps>;
    clicked?: PrimitiveOverrideProps<TextFieldProps>;
    embedmap?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type StoreCreateFormProps = React.PropsWithChildren<{
    overrides?: StoreCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: StoreCreateFormInputValues) => StoreCreateFormInputValues;
    onSuccess?: (fields: StoreCreateFormInputValues) => void;
    onError?: (fields: StoreCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: StoreCreateFormInputValues) => StoreCreateFormInputValues;
    onValidate?: StoreCreateFormValidationValues;
} & React.CSSProperties>;
export default function StoreCreateForm(props: StoreCreateFormProps): React.ReactElement;
