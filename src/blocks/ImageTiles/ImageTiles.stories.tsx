import React from 'react'
import { Meta, Story } from '@storybook/react'
import getVariation from '@src/functions/getVariation'
import ImageTiles from './ImageTiles'
import data from './ImageTilesData.json'

const { variations } = data

export default {
    component: ImageTiles,
    title: `Blocks/Image Tiles`,
} as Meta

const Template: Story = (args: any) => <ImageTiles {...args} />

export const Base = Template.bind({})
const baseImageTiles = getVariation('base', variations)
Base.args = {
    data: baseImageTiles.data,
}
