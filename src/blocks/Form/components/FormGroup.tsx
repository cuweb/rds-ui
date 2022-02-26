import React, { FC } from 'react'

interface FormGroupProps {
    legend?: string
}
const FormGroup: FC<FormGroupProps> = ({ legend, children }): JSX.Element => {
    return (
        <div className='form__field form__field--group'>
            <fieldset>
                {legend && <legend>{legend}</legend>}
                {children}
            </fieldset>
        </div>
    )
}
export default FormGroup
