import { Field, FormikValues } from 'formik'
import React, { FC, Fragment } from 'react'
import { FieldType } from './FormField'

const FormMultiple: FC<FieldType> = (props): JSX.Element => {
    const { attributes, options } = props

    return (
        <div
            role='group'
            aria-labelledby={`${attributes.type}-group`}
            className='form__group'
        >
            {options &&
                options.map((option: FormikValues, optionIndex: number) => {
                    const optionId = `${
                        attributes.name
                    }-${optionIndex.toString()}`
                    return (
                        <Fragment key={optionIndex}>
                            <Field
                                id={optionId}
                                value={option.value}
                                type={attributes.type}
                                name={attributes.name}
                            />
                            <label htmlFor={optionId} {...option}>
                                {option.text}
                            </label>
                        </Fragment>
                    )
                })}
        </div>
    )
}
export default FormMultiple
