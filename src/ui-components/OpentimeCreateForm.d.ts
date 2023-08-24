/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type OpentimeCreateFormInputValues = {
    day?: number;
    start?: string;
    end?: string;
    isClosed?: boolean;
    type?: string;
    createdBy?: string;
    storeID?: string;
};
export declare type OpentimeCreateFormValidationValues = {
    day?: ValidationFunction<number>;
    start?: ValidationFunction<string>;
    end?: ValidationFunction<string>;
    isClosed?: ValidationFunction<boolean>;
    type?: ValidationFunction<string>;
    createdBy?: ValidationFunction<string>;
    storeID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OpentimeCreateFormOverridesProps = {
    OpentimeCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    day?: PrimitiveOverrideProps<TextFieldProps>;
    start?: PrimitiveOverrideProps<TextFieldProps>;
    end?: PrimitiveOverrideProps<TextFieldProps>;
    isClosed?: PrimitiveOverrideProps<SwitchFieldProps>;
    type?: PrimitiveOverrideProps<SelectFieldProps>;
    createdBy?: PrimitiveOverrideProps<TextFieldProps>;
    storeID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type OpentimeCreateFormProps = React.PropsWithChildren<{
    overrides?: OpentimeCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: OpentimeCreateFormInputValues) => OpentimeCreateFormInputValues;
    onSuccess?: (fields: OpentimeCreateFormInputValues) => void;
    onError?: (fields: OpentimeCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: OpentimeCreateFormInputValues) => OpentimeCreateFormInputValues;
    onValidate?: OpentimeCreateFormValidationValues;
} & React.CSSProperties>;
export default function OpentimeCreateForm(props: OpentimeCreateFormProps): React.ReactElement;
