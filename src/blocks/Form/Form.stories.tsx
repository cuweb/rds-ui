import React from 'react'
import { Meta } from '@storybook/react'
import Form from './Form'
import FormInput from './components/FormInput'

export default {
    component: Form,
    title: `Blocks/Form`,
} as Meta

export const TextLabel = () => (
    <Form>
        <FormInput
            type='text'
            label='Text Label'
            description='This example has the description above the input field'
            placeholder='This field has a placeholder'
        />
    </Form>
)
