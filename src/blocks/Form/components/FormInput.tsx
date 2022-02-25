import React, { FC, HTMLInputTypeAttribute } from 'react'

interface FormInputProps {
    label?: string
    description?: string
    type: HTMLInputTypeAttribute
    id?: string
    name?: string
    placeholder?: string
}
const FormInput: FC<FormInputProps> = ({
    id,
    type,
    label,
    description,
    name,
    placeholder,
}): JSX.Element => {
    return (
        <div className='form__field form__field--text'>
            <label htmlFor={id}>{label}</label>
            {description && <p className='form__description'>{description}</p>}
            <input id={id} type={type} name={name} placeholder={placeholder} />
        </div>
    )
}
export default FormInput
