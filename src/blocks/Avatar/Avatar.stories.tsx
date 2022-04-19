import React from 'react'
import Avatar from './Avatar'
import Panel from '@blocks/Panel/Panel'
import { Story } from '@storybook/react'

export default {
    component: Avatar,
    title: `Blocks/Avatar`,
}

const Template: Story = (args: any) => <Avatar {...args} />

export const Base = Template.bind({})

Base.args = {
    imageUrl:
        'https://i.carleton.ca/wp-content/uploads/2016/10/danny-brown-1-1-300x300.jpg',
    alt: 'abc',
}

export const BaseWithClick = Template.bind({})

BaseWithClick.args = {
    imageUrl:
        'https://i.carleton.ca/wp-content/uploads/2016/10/danny-brown-1-1-300x300.jpg',
    alt: 'abc',
    handleClick: () => alert('You clicked the photo!'),
}

export const WithCaption = Template.bind({})

WithCaption.args = {
    imageUrl:
        'https://i.carleton.ca/wp-content/uploads/2016/10/danny-brown-1-1-300x300.jpg',
    alt: 'abc',
    caption: {
        topText: 'Danny Brown',
        bottomText: 'Director, Enterprise Applications',
    },
}

export const WithInitials = Template.bind({})

WithInitials.args = {
    firstName: 'Danny',
    lastName: 'Brown',
    caption: {
        topText: 'Danny Brown',
        bottomText: 'Director, Enterprise Applications',
    },
    isRound: false,
}

export const NotRound = Template.bind({})

NotRound.args = {
    imageUrl:
        'https://i.carleton.ca/wp-content/uploads/2016/10/danny-brown-1-1-300x300.jpg',
    alt: 'abc',
    caption: {
        topText: 'Danny Brown',
        bottomText: 'Director, Enterprise Applications',
    },
    isRound: false,
}

const TemplateWithChildren: Story = (args: any) => (
    <Panel title='Profile'>
        <Avatar {...args}>
            <>
                <dt>Phone</dt>
                <dd>000-000 00 00</dd>
                <dt>Ext</dt>
                <dd>514</dd>
            </>
            <>
                <dt>Mobile</dt>
                <dd>123-123 45 67</dd>
            </>
        </Avatar>
    </Panel>
)

export const WithDetails = TemplateWithChildren.bind({})

WithDetails.args = {
    imageUrl:
        'https://i.carleton.ca/wp-content/uploads/2016/10/danny-brown-1-1-300x300.jpg',
    alt: 'abc',
    firstName: 'Danny',
    lastName: 'Brown',
    caption: {
        topText: 'Danny Brown',
        bottomText: 'Director, Enterprise Applications',
    },
    handleClick: () => alert('You clicked the photo!'),
}

export const WithDetailsLeft = TemplateWithChildren.bind({})

WithDetailsLeft.args = {
    imageUrl:
        'https://i.carleton.ca/wp-content/uploads/2016/10/danny-brown-1-1-300x300.jpg',
    alt: 'abc',
    firstName: 'Danny',
    lastName: 'Brown',
    caption: {
        topText: 'Danny Brown',
        bottomText: 'Director, Enterprise Applications',
    },
    sideDetails: true,
    isRound: false,
    handleClick: () => alert('You clicked the photo!'),
}
