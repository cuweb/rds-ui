import React, { FC, HTMLProps } from 'react'
import FormField from './FormField'

export interface FormInputProps {
    label?: string
    description?: string
    min?: number
    max?: number
    maxLength?: number
    minLength?: number
    onChange?: (e: unknown) => void
    required?: boolean
    disabled?: boolean
    readonly?: boolean
}

export type InputType = HTMLProps<HTMLInputElement>

const FormInput: FC<FormInputProps & InputType> = ({
    id,
    type,
    label,
    description,
    name,
    placeholder,
    max,
    min,
    maxLength,
    minLength,
    onChange,
    required,
    disabled,
    readOnly,
}): JSX.Element => {
    return (
        <FormField id={id} type={type} label={label} description={description}>
            <input
                id={id}
                type={type}
                name={name}
                max={max}
                min={min}
                maxLength={maxLength}
                minLength={minLength}
                placeholder={placeholder}
                onChange={onChange ? (e) => onChange(e) : undefined}
                required={required}
                disabled={disabled}
                readOnly={readOnly}
            />
        </FormField>
    )
}
export default FormInput
