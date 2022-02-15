import React from 'react'
import { Meta, Story } from '@storybook/react'
import getVariation from '@src/functions/getVariation'
import Panel from './Panel'
import data from './PanelData.json'

// const { title, variations } = data

const { variations } = data

export default {
    title: `Blocks/Panel`,
    component: Panel,
} as Meta

const Template: Story = (args: any) => <Panel {...args} />

// const Template = args => <Panel {...args} />

//  Base Panel
const basePanel = getVariation('basePanel', variations)
export const Base = Template.bind({})
// Base.args = {
//     type: basePanel.cardType,
//     title: basePanel.title,
//     content: basePanel.content,
// }
Base.args = { ...basePanel }

// //  Base Panel with Note
// const baseNotes = getVariation('basePanelWithNote', variations)
// export const baseWithNotes = Template.bind({})
// baseWithNotes.args = { ...baseNotes }

// //  Base Heading vs Title Panel
// export const basebaseHeadingTitlePanel = Template.bind({})
// basebaseHeadingTitlePanel.args = {}

// //  Panel with Image
// export const panelWithImage = Template.bind({})
// panelWithImage.args = {}

// //  Panel with CTA Button
// export const panelWithCTAButton = Template.bind({})
// panelWithCTAButton.args = {}

// //  Entire Panel Into CTA
// export const entirePanelIntoCTA = Template.bind({})
// entirePanelIntoCTA.args = {}

// //  Panel with Icons
// export const panelWithIcons = Template.bind({})
// panelWithIcons.args = {}
