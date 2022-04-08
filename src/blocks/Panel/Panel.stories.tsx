import React from 'react'
import { Meta } from '@storybook/react'
import Panel from './Panel'
import ButtonCTA from '@components/ButtonCTA/ButtonCTA'

export default {
    title: `Blocks/Panel`,
    component: Panel,
} as Meta

// Base Panel
export const Base = () => (
    <Panel title='This is the title'>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            convallis neque quis enim eleifend luctus. Aliquam erat volutpat.
            Praesent malesuada dapibus turpis, a aliquam lacus mollis vel.
        </p>
    </Panel>
)

// Base Panel with Link
export const BasePanelWithLink = () => (
    <Panel title='This is the title'>
        <p>
            Lorem ipsum <a href='https://carleton.ca/'>dolor</a> sit amet,
            consectetur adipiscing elit. Cras convallis neque quis enim eleifend
            luctus. Aliquam erat volutpat. Praesent malesuada dapibus turpis, a
            aliquam lacus mollis vel.
        </p>
    </Panel>
)

// Panel with Heading and Button
export const PanelWithHeadingAndButton = () => (
    <Panel titleWithHeading='Ideas@Carleton'>
        <h3>This is the title</h3>
        <p>
            Lorem ipsum sit amet, consectetur adipiscing elit. Cras convallis
            neque quis enim eleifend luctus. Aliquam erat volutpat. Praesent
            malesuada dapibus turpis, a aliquam lacus mollis vel.
        </p>
        <ButtonCTA link='https://carleton.ca' text='Text' />
    </Panel>
)

// Panel with Image
export const PanelWithImage = () => (
    <Panel title='This is the title'>
        <img src='https://via.placeholder.com/640x480' alt='image' />
        <p>
            Lorem ipsum <a href='https://carleton.ca/'>dolor</a> sit amet,
            consectetur adipiscing elit. Cras convallis neque quis enim eleifend
            luctus. Aliquam erat volutpat. Praesent malesuada dapibus turpis, a
            aliquam lacus mollis vel.
        </p>
    </Panel>
)

// Panel with CTA Button
export const PanelWithCTAButton = () => (
    <Panel title='This is the title'>
        <img src='https://via.placeholder.com/640x480' alt='image' />
        <p>
            Lorem ipsum <a href='https://carleton.ca/'>dolor</a> sit amet,
            consectetur adipiscing elit. Cras convallis neque quis enim eleifend
            luctus. Aliquam erat volutpat. Praesent malesuada dapibus turpis, a
            aliquam lacus mollis vel.
        </p>
        <ButtonCTA
            link='https://ravendesignsystem.github.io/rds//dev/components/buttons/cta-button/'
            text='More about CTA buttons'
        />
    </Panel>
)

export const PanelWithIcons = () => (
    <Panel icon='light-bulb' titleWithHeading='Ideas@Carleton'>
        <h3>This is the title</h3>
        <p>
            Lorem ipsum sit amet, consectetur adipiscing elit. Cras convallis
            neque quis enim eleifend luctus. Aliquam erat volutpat. Praesent
            malesuada dapibus turpis, a aliquam lacus mollis vel.
        </p>
        <ButtonCTA
            link='https://carleton.ca'
            icon='arrow-down'
            text='Download now'
        />
    </Panel>
)
