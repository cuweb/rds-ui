import React from 'react'
import SearchForm from './SearchForm'
import data from './SearchFormData.json'
import getVariation from '../../functions/getVariation'
import { Meta, Story } from '@storybook/react'

const { title, variations } = data

export default {
    component: SearchForm,
    title: `Components/${title}`,
} as Meta

const Template: Story = (args: any) => <SearchForm {...args} />

export const Base = Template.bind({})
const baseBaseSearchForm = getVariation('base', variations)
Base.args = {
    title: baseBaseSearchForm.title,
    placeholder: baseBaseSearchForm.placeholder,
    onSubmit: (e: any) => {
        e.preventDefault()
        alert('test')
    },
}

export const WithAction = Template.bind({})
const withActionSearchForm = getVariation('base', variations)
WithAction.args = {
    title: withActionSearchForm.title,
    placeholder: withActionSearchForm.placeholder,
    action: withActionSearchForm.action,
}
