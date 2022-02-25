import React from 'react'
import { Meta } from '@storybook/react'
import Form from './Form'

export default {
    component: Form,
    title: `Blocks/Form`,
} as Meta

export const Base = () => (
    <Form onSubmit={() => alert('test')}>
        With Action
        <button className='c-buttoncta' type='submit'>
            submit
        </button>
    </Form>
)
