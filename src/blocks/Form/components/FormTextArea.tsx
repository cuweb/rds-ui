import React, { FC, HTMLInputTypeAttribute } from 'react'

interface FormTextAreaProps {
    label?: string
    description?: string
    type: HTMLInputTypeAttribute
    id?: string
    name?: string
    placeholder?: string
}
const FormTextArea: FC<FormTextAreaProps> = ({
    id,
    type,
    label,
    description,
    name,
    placeholder,
}): JSX.Element => {
    return (
        <div className='form__field form__field--textarea'>
            <label htmlFor='textarea'>Text Area Label</label>
            <p className='form__description'>
                This example has the description above the input field
            </p>
            <textarea
                id='textarea'
                name='textarea'
                rows={8}
                placeholder='This field has a placeholder'
            />
        </div>
    )
}
export default FormTextArea
