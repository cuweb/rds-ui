import React, { FC, HTMLProps } from 'react'
import FormField from './FormField'

export interface FormInputProps {
    label?: string
    description?: string
    onChange: (e: unknown) => void
}

export type InputType = HTMLProps<HTMLInputElement>

const FormInput: FC<FormInputProps & InputType> = ({
    id,
    type,
    label,
    description,
    name,
    placeholder,
    onChange,
}): JSX.Element => {
    return (
        <FormField id={id} type={type} label={label} description={description}>
            <input
                id={id}
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={(e) => onChange(e)}
            />
        </FormField>
    )
}
export default FormInput
