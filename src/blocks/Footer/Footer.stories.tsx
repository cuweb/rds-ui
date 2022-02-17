import React from 'react'
import { Meta, Story } from '@storybook/react'
import getVariation from '@functions/getVariation'
import Footer from './Footer'
import data from './FooterData.json'

const { variations } = data

export default {
    component: Footer,
    title: `Blocks/Footer`,
} as Meta

const Template: Story = (args: any) => <Footer {...args} />

//  Brand Footer
export const Brand = Template.bind({})
Brand.args = {
    type: getVariation('brand', variations).type,
}

//  Simple Footer
export const Simple = Template.bind({})
const simpleFoter = getVariation('simple', variations)
Simple.args = {
    type: simpleFoter.type,
    name: simpleFoter.data.name,
    email: simpleFoter.data.email,
    address: simpleFoter.data.address,
    map: simpleFoter.data.map,
    contact: simpleFoter.data.contact,
    days: simpleFoter.data.days,
    start: simpleFoter.data.hours.start,
    end: simpleFoter.data.hours.end,
    phone: simpleFoter.data.phone,
    fax: simpleFoter.data.fax,
}

//  Sitemap Footer
export const Sitemap = Template.bind({})
Sitemap.args = {
    type: getVariation('sitemap', variations).type,
}
