import React from 'react'
import { Meta } from '@storybook/react'
import Panel from './Panel'
import ButtonCTA from '@components/ButtonCTA/ButtonCTA'
import PanelFooter from './components/PanelFooter'
import PanelBody from './components/PanelBody'
import PanelHeader from './components/PanelHeader'
import Listing from '@blocks/Listing/Listing'
import Icon from '@components/Icon/Icon'

export default {
    title: `Blocks/Panel`,
    component: Panel,
} as Meta

// Base Panel
export const Base = () => (
    <Panel>
        <PanelHeader>Base Panel</PanelHeader>
        <PanelBody>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                convallis neque quis enim eleifend luctus. Aliquam erat
                volutpat. Praesent malesuada dapibus turpis, a aliquam lacus
                mollis vel.
            </p>
        </PanelBody>
    </Panel>
)

export const WithShadow = () => (
    <Panel shadow>
        <PanelHeader>Panel With Shadow</PanelHeader>
        <PanelBody>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                convallis neque quis enim eleifend luctus. Aliquam erat
                volutpat. Praesent malesuada dapibus turpis, a aliquam lacus
                mollis vel.
            </p>
        </PanelBody>
    </Panel>
)

const actions = {
    menu: [
        {
            title: 'Item 1',
            link: '#',
        },
        {
            title: 'Item 2',
            link: '#',
            separator: true,
        },
        {
            title: 'Item 3',
            link: '#',
            className: 'item-classname',
        },
        {
            title: 'Item 4',
            link: '#',
        },
    ],
}

export const WithActions = () => (
    <Panel actions={actions}>
        <PanelHeader>Panel With Actions</PanelHeader>
        <PanelBody>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                convallis neque quis enim eleifend luctus. Aliquam erat
                volutpat. Praesent malesuada dapibus turpis, a aliquam lacus
                mollis vel.
            </p>
        </PanelBody>
    </Panel>
)

export const WithIcon = () => (
    <Panel>
        <PanelHeader icon='light-bulb'>Panel With Icon</PanelHeader>
        <PanelBody>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                convallis neque quis enim eleifend luctus. Aliquam erat
                volutpat. Praesent malesuada dapibus turpis, a aliquam lacus
                mollis vel.
            </p>
        </PanelBody>
    </Panel>
)

export const WithContent = () => (
    <Panel>
        <PanelHeader>Panel With Actions</PanelHeader>
        <PanelBody>
            <p>
                Lorem ipsum <a href='https://carleton.ca/'>dolor</a> sit amet,
                consectetur adipiscing elit. Cras convallis neque quis enim
                eleifend luctus. Aliquam erat volutpat. Praesent malesuada
                dapibus turpis, a aliquam lacus mollis vel.
            </p>
            <img src='https://via.placeholder.com/640x480' alt='image' />
            <p>
                Lorem ipsum <a href='https://carleton.ca/'>dolor</a> sit amet,
                consectetur adipiscing elit. Cras convallis neque quis enim
                eleifend luctus. Aliquam erat volutpat. Praesent malesuada
                dapibus turpis, a aliquam lacus mollis vel.
            </p>
            <ButtonCTA
                link='https://carleton.ca'
                icon='arrow-down'
                text='Download now'
            />

            <p>
                Lorem ipsum <a href='https://carleton.ca/'>dolor</a> sit amet,
                consectetur adipiscing elit. Cras convallis neque quis enim
                eleifend luctus. Aliquam erat volutpat. Praesent malesuada
                dapibus turpis, a aliquam lacus mollis vel.
            </p>
        </PanelBody>
    </Panel>
)

export const WithFooter = () => (
    <Panel shadow>
        <PanelHeader icon='light-bulb'>With Footer</PanelHeader>
        <PanelBody>
            <p>
                Lorem ipsum sit amet, consectetur adipiscing elit. Cras
                convallis neque quis enim eleifend luctus. Aliquam erat
                volutpat. Praesent malesuada dapibus turpis, a aliquam lacus
                mollis vel.
            </p>
        </PanelBody>
        <PanelFooter>
            <div className='text-center'>
                <p>
                    This is a footer with centered text and a{' '}
                    <a href='#' className='link--red'>
                        red link
                    </a>
                </p>
            </div>
        </PanelFooter>
    </Panel>
)

export const WhiteHeader = () => (
    <Panel shadow>
        <PanelHeader color='white'>White Header</PanelHeader>
        <PanelBody>
            <p>
                Lorem ipsum sit amet, consectetur adipiscing elit. Cras
                convallis neque quis enim eleifend luctus. Aliquam erat
                volutpat. Praesent malesuada dapibus turpis, a aliquam lacus
                mollis vel.
            </p>
        </PanelBody>
        <PanelFooter>
            <ButtonCTA
                link='https://carleton.ca'
                icon='arrow-down'
                text='Download now'
                grey
                shadow={false}
                full
            />
        </PanelFooter>
    </Panel>
)

export const GreyFooter = () => (
    <Panel shadow>
        <PanelHeader>Grey Footer</PanelHeader>
        <PanelBody>
            <p>
                Lorem ipsum sit amet, consectetur adipiscing elit. Cras
                convallis neque quis enim eleifend luctus. Aliquam erat
                volutpat. Praesent malesuada dapibus turpis, a aliquam lacus
                mollis vel.
            </p>
        </PanelBody>
        <PanelFooter color='grey'>This is a grey footer</PanelFooter>
    </Panel>
)
export const GreyBody = () => (
    <Panel shadow>
        <PanelHeader color='white'>Grey Footer</PanelHeader>
        <PanelBody color='grey'>
            <p>
                Lorem ipsum sit amet, consectetur adipiscing elit. Cras
                convallis neque quis enim eleifend luctus. Aliquam erat
                volutpat. Praesent malesuada dapibus turpis, a aliquam lacus
                mollis vel.
            </p>
        </PanelBody>
        <PanelFooter>
            <ButtonCTA
                link='https://carleton.ca'
                icon='arrow-down'
                text='Download now'
                shadow={false}
                full
                grey
            />
        </PanelFooter>
    </Panel>
)

export const IntranetExample = () => (
    <Panel actions={actions} shadow>
        <PanelHeader icon='light-bulb' color='white'>
            Ideas@Carleton
        </PanelHeader>
        <PanelBody>
            <Listing
                noUblock
                data={[
                    {
                        src: '#',
                        title: 'White-necked Raven',
                    },
                    {
                        src: '#',
                        title: 'Common raven',
                    },
                    {
                        src: '#',
                        title: 'Australian raven',
                    },
                    {
                        src: '#',
                        title: 'Thick-billed raven',
                    },
                ]}
            />
        </PanelBody>
        <PanelFooter>
            <ButtonCTA
                link='https://carleton.ca'
                icon='arrow-down'
                text='Download now'
                grey
                shadow={false}
                full
            />
        </PanelFooter>
    </Panel>
)

export const FullWidth = () => (
    <Panel actions={actions} shadow block={{ wide: true }}>
        <PanelHeader icon='light-bulb' color='white'>
            Ideas@Carleton
        </PanelHeader>
        <PanelBody>
            <Listing
                noUblock
                data={[
                    {
                        src: '#',
                        title: 'White-necked Raven',
                    },
                    {
                        src: '#',
                        title: 'Common raven',
                    },
                    {
                        src: '#',
                        title: 'Australian raven',
                    },
                    {
                        src: '#',
                        title: 'Thick-billed raven',
                    },
                ]}
            />
        </PanelBody>
        <PanelFooter>
            <ButtonCTA
                link='https://carleton.ca'
                icon='arrow-down'
                text='Download now'
                grey
                shadow={false}
                full
            />
        </PanelFooter>
    </Panel>
)
