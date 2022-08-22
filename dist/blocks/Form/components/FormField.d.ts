import { FC, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { FormikValues } from 'formik';
export declare type InputAttributesTypes = InputHTMLAttributes<HTMLInputElement> & TextareaHTMLAttributes<HTMLTextAreaElement> & {
    as?: string | undefined;
};
export declare type FieldType = {
    heading?: {
        label: string;
        description: string;
    };
    validate?: unknown;
    attributes: InputAttributesTypes;
    options?: {
        text: string;
        value: string;
    }[];
} & FormikValues;
declare const FormField: FC<FieldType>;
export default FormField;
