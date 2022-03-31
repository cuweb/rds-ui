import { Field, FormikValues } from 'formik'
import React, { FC } from 'react'
import { FieldType } from './FormField'

const FormSelect: FC<FieldType> = ({ attributes, options }): JSX.Element => {
    return (
        <Field {...attributes}>
            {options &&
                options.map((option: FormikValues, optionIndex: number) => (
                    <option key={optionIndex} value={option.value}>
                        {option.text}
                    </option>
                ))}
        </Field>
    )
}
export default FormSelect
