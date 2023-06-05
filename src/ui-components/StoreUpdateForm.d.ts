/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Store } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type StoreUpdateFormInputValues = {
    usernameID?: string;
    type?: string;
    isConfirmed?: boolean;
    name?: string;
    description?: string;
    clicked?: string;
};
export declare type StoreUpdateFormValidationValues = {
    usernameID?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    isConfirmed?: ValidationFunction<boolean>;
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    clicked?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StoreUpdateFormOverridesProps = {
    StoreUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    usernameID?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    isConfirmed?: PrimitiveOverrideProps<SwitchFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    clicked?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type StoreUpdateFormProps = React.PropsWithChildren<{
    overrides?: StoreUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    store?: Store;
    onSubmit?: (fields: StoreUpdateFormInputValues) => StoreUpdateFormInputValues;
    onSuccess?: (fields: StoreUpdateFormInputValues) => void;
    onError?: (fields: StoreUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: StoreUpdateFormInputValues) => StoreUpdateFormInputValues;
    onValidate?: StoreUpdateFormValidationValues;
} & React.CSSProperties>;
export default function StoreUpdateForm(props: StoreUpdateFormProps): React.ReactElement;
