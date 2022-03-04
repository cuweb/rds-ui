import Icon from '@components/Icon/Icon'
import { Field } from 'formik'
import React, { FC } from 'react'
import { FieldType } from './FormField'

const FormFile: FC<FieldType> = ({ attributes }): JSX.Element => {
    return (
        <div className='form__upload'>
            <Icon icon='file-upload' />
            <Field {...attributes} />
        </div>
    )
}
export default FormFile
