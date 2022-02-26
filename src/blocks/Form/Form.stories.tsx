import React from 'react'
import { Meta } from '@storybook/react'
import Form from './Form'
import FormInput, { FormInputProps, InputType } from './components/FormInput'

export default {
    component: Form,
    title: `Blocks/Form`,
} as Meta

const handleChange = (e: InputType) => console.log(e.target?.valueOf)

export const TextLabel = () => (
    <Form>
        <FormInput
            id='input'
            type='text'
            label='Text Label'
            description='This example has the description above the input field'
            placeholder='This field has a placeholder'
            onChange={handleChange}
        />
    </Form>
)
