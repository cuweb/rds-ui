import React from 'react'
import { Meta } from '@storybook/react'
import Form from './Form'
import FormInput from './components/FormInput'

export default {
    component: Form,
    title: `Blocks/Form`,
} as Meta

const handleChange = (e: any) => console.log(e.target.value)

export const Text = () => (
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

export const Number = () => (
    <Form>
        <FormInput
            id='input'
            type='number'
            label='Number Label'
            max={10}
            min={1}
            description='This example has the description above the input field'
            placeholder='This field has a placeholder'
            onChange={handleChange}
        />
    </Form>
)
