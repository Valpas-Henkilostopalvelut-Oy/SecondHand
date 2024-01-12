/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Orders } from "../models";
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
export declare type OrdersUpdateFormInputValues = {
    customersID?: string;
    date?: string;
    status?: number;
    totalPrice?: number;
};
export declare type OrdersUpdateFormValidationValues = {
    customersID?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
    status?: ValidationFunction<number>;
    totalPrice?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OrdersUpdateFormOverridesProps = {
    OrdersUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    customersID?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
    totalPrice?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type OrdersUpdateFormProps = React.PropsWithChildren<{
    overrides?: OrdersUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    orders?: Orders;
    onSubmit?: (fields: OrdersUpdateFormInputValues) => OrdersUpdateFormInputValues;
    onSuccess?: (fields: OrdersUpdateFormInputValues) => void;
    onError?: (fields: OrdersUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: OrdersUpdateFormInputValues) => OrdersUpdateFormInputValues;
    onValidate?: OrdersUpdateFormValidationValues;
} & React.CSSProperties>;
export default function OrdersUpdateForm(props: OrdersUpdateFormProps): React.ReactElement;
