// @see https://developer.mozilla.org/en-US/docs/Learn/Forms/Basic_native_form_controls
// @see https://developer.mozilla.org/en-US/docs/Learn/Forms/HTML5_input_types#date_and_time_pickers
// @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLButtonElement

import React, { FC, InputHTMLAttributes, TextareaHTMLAttributes } from 'react'
import { FormikValues, Field } from 'formik'
import FormFieldWrapper, { FormFieldWrapperProps } from './FormFieldWrapper'
import FormSelect from './FormSelect'
import FormRadio from './FormRadio'

export type InputAttributesTypes = InputHTMLAttributes<HTMLInputElement> &
    TextareaHTMLAttributes<HTMLTextAreaElement> & {
        as?: string | undefined
    }

export type FieldType = {
    heading?: {
        label: string
        description: string
    }
    attributes: InputAttributesTypes
    options?: {
        text: string
        value: string
    }[]
} & FormikValues

const FormField: FC<FieldType> = (props): JSX.Element => {
    const { attributes, heading, options } = props
    const fieldTypes: FormikValues = {
        submit: 'button',
        empty: null,
    }
    const fieldWrapperProps: FormFieldWrapperProps = {
        id: attributes.id,
        type: fieldTypes[attributes.type || 'empty'] || attributes.type,
        label: heading?.label,
        description: heading?.description,
    }

    const formFieldTypes: FormikValues = {
        select: <FormSelect options={options} attributes={attributes} />,
        radio: <FormRadio {...props} />,
        empty: null,
    }

    return (
        <FormFieldWrapper {...fieldWrapperProps}>
            {formFieldTypes[attributes.type || 'empty'] || (
                <Field {...attributes} />
            )}
        </FormFieldWrapper>
    )
}
export default FormField
