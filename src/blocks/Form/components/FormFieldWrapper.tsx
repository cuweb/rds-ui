import React, { FC, HTMLInputTypeAttribute } from 'react'

export interface FormFieldWrapperProps {
    id?: string
    label?: string
    description?: string
    type?: HTMLInputTypeAttribute | 'textarea' | 'select' | 'button'
}
const FormFieldWrapper: FC<FormFieldWrapperProps> = ({
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
export default FormFieldWrapper
