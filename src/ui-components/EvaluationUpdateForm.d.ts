/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Evaluation } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EvaluationUpdateFormInputValues = {
    evaluationNum?: number;
    name?: string;
    email?: string;
    phone?: string;
    description?: string;
    category?: string;
    type?: string;
    images?: string[];
    isConfirmed?: boolean;
};
export declare type EvaluationUpdateFormValidationValues = {
    evaluationNum?: ValidationFunction<number>;
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
export declare type EvaluationUpdateFormOverridesProps = {
    EvaluationUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    evaluationNum?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    category?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    images?: PrimitiveOverrideProps<TextFieldProps>;
    isConfirmed?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type EvaluationUpdateFormProps = React.PropsWithChildren<{
    overrides?: EvaluationUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    evaluation?: Evaluation;
    onSubmit?: (fields: EvaluationUpdateFormInputValues) => EvaluationUpdateFormInputValues;
    onSuccess?: (fields: EvaluationUpdateFormInputValues) => void;
    onError?: (fields: EvaluationUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EvaluationUpdateFormInputValues) => EvaluationUpdateFormInputValues;
    onValidate?: EvaluationUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EvaluationUpdateForm(props: EvaluationUpdateFormProps): React.ReactElement;
