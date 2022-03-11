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

export const EventVariant = Template.bind({})
const eventVariant = getVariation('event', variations)
EventVariant.args = {
    type: eventVariant.listType,
    header: eventVariant.header,
    noborder: eventVariant.noborder,
    data: eventVariant.data,
}

export const NewsVariant = Template.bind({})
const newsVariant = getVariation('news', variations)
NewsVariant.args = {
    type: newsVariant.listType,
    header: newsVariant.header,
    noborder: newsVariant.noborder,
    data: newsVariant.data,
}

export const NewsImageVariant = Template.bind({})
const newsImageVariant = getVariation('newsImage', variations)
NewsImageVariant.args = {
    type: newsImageVariant.listType,
    header: newsImageVariant.header,
    noborder: newsImageVariant.noborder,
    data: newsImageVariant.data,
}

export const PeopleVariant = Template.bind({})
const peopleVariant = getVariation('people', variations)
PeopleVariant.args = {
    type: peopleVariant.listType,
    header: peopleVariant.header,
    noborder: peopleVariant.noborder,
    data: peopleVariant.data,
}

export const VideoVariant = Template.bind({})
const videoVariant = getVariation('video', variations)
VideoVariant.args = {
    type: videoVariant.listType,
    header: videoVariant.header,
    noborder: videoVariant.noborder,
    data: videoVariant.data,
}

export const TwoColumn = Template.bind({})
const twoColumn = getVariation('twoColumn', variations)
TwoColumn.args = {
    type: twoColumn.listType,
    header: twoColumn.header,
    noborder: twoColumn.noborder,
    data: twoColumn.data,
    columndata: twoColumn.columndata,
    
}