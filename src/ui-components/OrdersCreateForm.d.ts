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
export declare type OrdersCreateFormInputValues = {
    customersID?: string;
    date?: string;
    status?: number;
    totalPrice?: number;
};
export declare type OrdersCreateFormValidationValues = {
    customersID?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
    status?: ValidationFunction<number>;
    totalPrice?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OrdersCreateFormOverridesProps = {
    OrdersCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    customersID?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
    totalPrice?: PrimitiveOverrideProps<TextFieldProps>;
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
