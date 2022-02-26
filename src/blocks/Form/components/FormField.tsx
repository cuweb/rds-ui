import React, { FC, HTMLInputTypeAttribute } from 'react'

interface FormFieldProps {
    id?: string
    label?: string
    description?: string
    type?: HTMLInputTypeAttribute | 'textarea' | 'select' | 'button'
}
const FormField: FC<FormFieldProps> = ({
    type = 'text',
    id,
    label,
    description,
    children,
}): JSX.Element => {
    return (
        <div className={`form__field form__field--${type}`}>
            <label htmlFor={id}>{label}</label>
            {description && <p className='form__description'>{description}</p>}
            {children}
        </div>
    )
}
export default FormField
