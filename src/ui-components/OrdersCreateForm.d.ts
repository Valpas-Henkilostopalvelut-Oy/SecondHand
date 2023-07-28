/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type OrdersCreateFormInputValues = {
    username?: string;
    type?: string;
    status?: string;
    from?: string;
    to?: string;
    price?: number;
    message?: string;
};
export declare type OrdersCreateFormValidationValues = {
    username?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    from?: ValidationFunction<string>;
    to?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    message?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OrdersCreateFormOverridesProps = {
    OrdersCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<SelectFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
    from?: PrimitiveOverrideProps<TextFieldProps>;
    to?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    message?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type OrdersCreateFormProps = React.PropsWithChildren<{
    overrides?: OrdersCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: OrdersCreateFormInputValues) => OrdersCreateFormInputValues;
    onSuccess?: (fields: OrdersCreateFormInputValues) => void;
    onError?: (fields: OrdersCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: OrdersCreateFormInputValues) => OrdersCreateFormInputValues;
    onValidate?: OrdersCreateFormValidationValues;
} & React.CSSProperties>;
export default function OrdersCreateForm(props: OrdersCreateFormProps): React.ReactElement;
