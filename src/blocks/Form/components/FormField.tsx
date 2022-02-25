import React, { FC } from 'react'

interface FormFieldProps {
    id?: string
    label?: string
    description?: string
}
const FormField: FC<FormFieldProps> = ({
    id,
    label,
    description,
    children,
}): JSX.Element => {
    return (
        <div className='form__field form__field--text'>
            <label htmlFor={id}>{label}</label>
            {description && <p className='form__description'>{description}</p>}
            {children}
        </div>
    )
}
export default FormField
