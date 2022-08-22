import React, { FC } from 'react';
import { InputAttributesTypes } from './FormField';
export interface FormFieldWrapperProps {
    id?: string;
    label?: string;
    description?: string;
    type?: InputAttributesTypes;
    required?: boolean;
    children?: React.ReactNode;
}
declare const FormFieldWrapper: FC<FormFieldWrapperProps>;
export default FormFieldWrapper;
