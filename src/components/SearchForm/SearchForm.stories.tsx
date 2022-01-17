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

export const BaseSearchForm = Template.bind({})
const baseBaseSearchForm = getVariation('base', variations)
BaseSearchForm.args = {
    labelContent: baseBaseSearchForm.labelContent,
    spanContent: baseBaseSearchForm.spanContent
}