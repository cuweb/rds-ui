import React from 'react';
import Listing from './Listing';
import data from './ListingData.json';
import getVariation from '../../functions/getVariation';
import { Meta, Story } from '@storybook/react';

const { title, variations } = data

export default {
    component: Listing,
    title: `Blocks/${title}`,
}as Meta

const Template: Story = (args: any) => <Listing {...args} />

export const BaseListing = Template.bind({})
const baseListing = getVariation('base', variations)
BaseListing.args = {
    type: baseListing.listType,
    header: baseListing.header,
    noborder: baseListing.noborder,
    data: baseListing.data,
}

export const WithSubtitles = Template.bind({})
const withSubtitles = getVariation('withSubtitles', variations)
WithSubtitles.args = {
    type: withSubtitles.listType,
    header: withSubtitles.header,
    noborder: withSubtitles.noborder,
    data: withSubtitles.data,
}

export const WithImage = Template.bind({})
const withImage = getVariation('withImage', variations)
WithImage.args = {
    type: withImage.listType,
    header: withImage.header,
    noborder: withImage.noborder,
    data: withImage.data,
}

export const WithBadge = Template.bind({})
const withBadge = getVariation('withBadge', variations)
WithBadge.args = {
    type: withBadge.listType,
    header: withBadge.header,
    noborder: withBadge.noborder,
    data: withBadge.data,
}

export const WithIcon = Template.bind({})
const withIcon = getVariation('withIcon', variations)
WithIcon.args = {
    type: withIcon.listType,
    header: withIcon.header,
    noborder: withIcon.noborder,
    data: withIcon.data,
}

export const IconAndSubtitle = Template.bind({})
const iconAndSubtitle = getVariation('iconsAndSubtitles', variations)
IconAndSubtitle.args = {
    type: iconAndSubtitle.listType,
    header: iconAndSubtitle.header,
    noborder: iconAndSubtitle.noborder,
    data: iconAndSubtitle.data,
}