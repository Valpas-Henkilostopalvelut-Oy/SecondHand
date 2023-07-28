/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Opentime } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type OpentimeUpdateFormInputValues = {
    day?: number;
    start?: string;
    end?: string;
    isClosed?: boolean;
};
export declare type OpentimeUpdateFormValidationValues = {
    day?: ValidationFunction<number>;
    start?: ValidationFunction<string>;
    end?: ValidationFunction<string>;
    isClosed?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OpentimeUpdateFormOverridesProps = {
    OpentimeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    day?: PrimitiveOverrideProps<TextFieldProps>;
    start?: PrimitiveOverrideProps<TextFieldProps>;
    end?: PrimitiveOverrideProps<TextFieldProps>;
    isClosed?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type OpentimeUpdateFormProps = React.PropsWithChildren<{
    overrides?: OpentimeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    opentime?: Opentime;
    onSubmit?: (fields: OpentimeUpdateFormInputValues) => OpentimeUpdateFormInputValues;
    onSuccess?: (fields: OpentimeUpdateFormInputValues) => void;
    onError?: (fields: OpentimeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: OpentimeUpdateFormInputValues) => OpentimeUpdateFormInputValues;
    onValidate?: OpentimeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function OpentimeUpdateForm(props: OpentimeUpdateFormProps): React.ReactElement;
