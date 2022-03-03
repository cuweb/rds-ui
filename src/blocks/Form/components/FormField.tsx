import React, { FC, InputHTMLAttributes, TextareaHTMLAttributes } from 'react'
import { FormikValues, Field } from 'formik'
import FormFieldWrapper from './FormFieldWrapper'

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

const FormField: FC<FieldType> = ({
    attributes,
    heading,
    options,
}): JSX.Element => {
    const fieldTypes: FormikValues = {
        submit: 'button',
        empty: null,
    }
    const formFieldProps = {
        type: fieldTypes[attributes.type || 'empty'] || attributes.type,
        label: heading?.label,
        description: heading?.description,
    }

    return (
        <FormFieldWrapper {...formFieldProps}>
            <Field {...attributes}>
                {options &&
                    options.map((option: FormikValues, optionIndex: number) => (
                        <option key={optionIndex} value={option.value}>
                            {option.text}
                        </option>
                    ))}
            </Field>
        </FormFieldWrapper>
    )
}
export default FormField
