import React, { FC } from 'react'
import { InputAttributesTypes } from './FormField'

export interface FormFieldWrapperProps {
    id?: string
    label?: string
    description?: string
    type?: InputAttributesTypes
}
const FormFieldWrapper: FC<FormFieldWrapperProps> = ({
    type = 'text',
    id,
    label,
    description,
    children,
}): JSX.Element => {
    const isMultiple = ['checkbox', 'radio'].includes(type.toString())

    if (isMultiple) {
        return (
            <div className={`form__field form__field--${type}`}>
                <fieldset>
                    <legend>{label}</legend>
                    {description && (
                        <p className='form__description'>{description}</p>
                    )}
                    <div className='form__group'>{children}</div>
                </fieldset>
            </div>
        )
    }

    return (
        <div className={`form__field form__field--${type}`}>
            {label && <label htmlFor={id}>{label}</label>}
            {description && <p className='form__description'>{description}</p>}
            {children}
        </div>
    )
}
export default FormFieldWrapper
