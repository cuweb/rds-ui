import React from 'react'
import getVariation from '../../functions/getVariation'
import Footer from './Footer'
import data from './FooterData.json'

const { title, variations } = data

export default {
    component: title,
    title: `Blocks/${title}`,
}

const Template: React.FC = (args: any) => <Footer {...args} />

//  Brand Footer
export const Brand = Template.bind({})
Brand.args = {
    title: getVariation('brand', variations).title,
    type: getVariation('brand', variations).type,
}

//  Simple Footer
export const Simple = Template.bind({})
Simple.args = {
    title: getVariation('simple', variations).title,
    type: getVariation('simple', variations).type,
}

//  Sitemap Footer
export const Sitemap = Template.bind({})
Sitemap.args = {
    title: getVariation('sitemap', variations).title,
    type: getVariation('sitemap', variations).type,
}
