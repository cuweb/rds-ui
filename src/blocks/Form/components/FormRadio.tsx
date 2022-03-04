import { Field, FormikValues } from 'formik'
import React, { FC, Fragment } from 'react'
import { FieldType } from './FormField'

const FormRadio: FC<FieldType> = (props): JSX.Element => {
    const { attributes, options } = props

    return (
        <div role='group' aria-labelledby='radio-group' className='form__group'>
            {options &&
                options.map((option: FormikValues, optionIndex: number) => (
                    <Fragment key={optionIndex}>
                        <Field
                            id={optionIndex.toString()}
                            value={option.value}
                            type={attributes.type}
                            name={attributes.name}
                        />
                        <label htmlFor={optionIndex.toString()} {...option}>
                            {option.text}
                        </label>
                    </Fragment>
                ))}
        </div>
    )
}
export default FormRadio
