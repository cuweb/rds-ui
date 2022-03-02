import React from 'react'
import { Meta } from '@storybook/react'
import Form from './Form'
import FormInput from './components/FormInput'

export default {
    component: Form,
    title: `Blocks/Form/Input`,
} as Meta

const content = {
    description: 'This example has the description above the input field',
    placeholder: 'This field has a placeholder',
}
const handleChange = (e: any) => console.log(e.target.value)

export const Text = () => (
    <Form>
        <FormInput
            id='input-text'
            type='text'
            name='input-text'
            label='Text Label'
            description={content.description}
            placeholder={content.placeholder}
            maxLength={20}
            minLength={1}
            onChange={handleChange}
            required={true}
        />
    </Form>
)

export const Number = () => (
    <Form>
        <FormInput
            id='input-number'
            type='number'
            label='Number Label'
            max={10}
            min={1}
            description={content.description}
            placeholder={content.placeholder}
            onChange={handleChange}
        />
    </Form>
)

export const Password = () => (
    <Form>
        <FormInput
            id='input-password'
            type='password'
            label='Password Label'
            maxLength={20}
            minLength={1}
            description={content.description}
            placeholder={content.placeholder}
            onChange={handleChange}
        />
    </Form>
)
export const Email = () => (
    <Form>
        <FormInput
            id='input-email'
            type='email'
            label='Email Label'
            description={content.description}
            placeholder={content.placeholder}
            onChange={handleChange}
        />
    </Form>
)

export const Disabled = () => (
    <Form>
        <FormInput
            id='input-disabled'
            type='text'
            name='input-text'
            label='Disabled Label'
            description={content.description}
            placeholder='This field is disabled'
            disabled={true}
        />
    </Form>
)

export const ReadOnly = () => (
    <Form>
        <FormInput
            id='input'
            type='text'
            name='input-text'
            label='Read Only Label'
            description={content.description}
            placeholder={'This field is read only'}
            readOnly={true}
        />
    </Form>
)
