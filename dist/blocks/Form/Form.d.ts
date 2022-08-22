import { UblockProps } from '@components/Ublock/Ublock';
import { FC } from 'react';
import { FormikValues } from 'formik';
import { FieldType } from './components/FormField';
export interface FormProps {
    fields: FieldType[];
    block?: UblockProps;
    onSubmit: (value: FormikValues) => void;
    validationSchema?: FormikValues;
    enableReinitialize?: boolean;
}
declare const Form: FC<FormProps>;
export default Form;
