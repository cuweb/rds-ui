import React from 'react'
import { Meta } from '@storybook/react'
import Panel from './Panel'
import ButtonCTA from '@components/ButtonCTA/ButtonCTA'
import PanelFooter from './components/PanelFooter'
import PanelBody from './components/PanelBody'
import PanelHeader from './components/PanelHeader'
import Listing from '@blocks/Listing/Listing'
import Avatar from '@components/Avatar/Avatar'
import Ublock from '@components/Ublock/Ublock'
import Link from '@components/Link/Link'
import { UserInfoType } from 'types/UserInfo'

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
                Lorem ipsum <Link href='https://carleton.ca/'>dolor</Link> sit
                amet, consectetur adipiscing elit. Cras convallis neque quis
                enim eleifend luctus. Aliquam erat volutpat. Praesent malesuada
                dapibus turpis, a aliquam lacus mollis vel.
            </p>
            <img src='https://via.placeholder.com/640x480' alt='image' />
            <p>
                Lorem ipsum <Link href='https://carleton.ca/'>dolor</Link> sit
                amet, consectetur adipiscing elit. Cras convallis neque quis
                enim eleifend luctus. Aliquam erat volutpat. Praesent malesuada
                dapibus turpis, a aliquam lacus mollis vel.
            </p>
            <ButtonCTA
                link='https://carleton.ca'
                icon='arrow-down'
                text='Download now'
            />

            <p>
                Lorem ipsum <Link href='https://carleton.ca/'>dolor</Link> sit
                amet, consectetur adipiscing elit. Cras convallis neque quis
                enim eleifend luctus. Aliquam erat volutpat. Praesent malesuada
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
                    <Link href='#' className='link--red'>
                        red link
                    </Link>
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

export const PanelModal = () => {
    const user: UserInfoType = {
        image: {
            src: 'https://i.carleton.ca/wp-content/uploads/2016/10/danny-brown-1-1-300x300.jpg',
            alt: '',
        },
        firstName: 'Danny',
        lastName: 'Brown',
    }
    return (
        <>
            <Panel className='u-h-fix u-o-sroll'>
                <PanelBody>
                    <Ublock>
                        <Avatar
                            user={user}
                            rounded
                            size='xl'
                            className='u-margin-auto'
                        />
                        <p>
                            Laborum do fugiat ea enim non ipsum labore Lorem
                            voluptate ea exercitation ullamco aliquip. Non ut ex
                            adipisicing amet labore. Voluptate ex excepteur
                            ipsum pariatur anim sit. Voluptate ad laborum
                            excepteur adipisicing amet cillum ipsum ea tempor
                            nostrud. Non ipsum excepteur velit non est aliqua.
                            Aliqua enim quis ea est adipisicing laborum velit.
                            Fugiat commodo dolore nostrud ipsum cillum duis enim
                            ea velit amet exercitation dolore. Nisi deserunt
                            duis non reprehenderit ut. Duis consectetur
                            voluptate nostrud id consectetur exercitation
                            deserunt cupidatat eiusmod exercitation qui. Ullamco
                            quis enim incididunt sunt amet. Ea amet labore
                            cupidatat elit et dolore. Adipisicing exercitation
                            veniam laborum proident ullamco velit laboris quis.
                            Irure dolore sunt voluptate exercitation esse
                            nostrud ut aliqua exercitation in minim ad sunt ad.
                            Anim sunt exercitation consectetur enim adipisicing
                            pariatur mollit aliqua ex ex. Aliquip magna occaecat
                            irure est id consequat est ipsum do sunt do. Est
                            exercitation cillum labore voluptate anim
                            consectetur enim reprehenderit aliqua pariatur.
                            Tempor sunt id aliquip commodo consectetur enim qui
                            do nostrud dolore. Veniam occaecat elit aute in non
                            consectetur ex reprehenderit adipisicing dolor.
                            Dolor non consequat enim nostrud eu quis elit enim
                            adipisicing ipsum. Ad labore sunt magna culpa amet
                            deserunt officia occaecat proident ullamco. Quis
                            magna ex voluptate deserunt mollit voluptate
                            excepteur id velit anim esse culpa eiusmod.
                            Excepteur labore Lorem officia in excepteur est
                            tempor fugiat. Adipisicing ad non non adipisicing
                            exercitation Lorem minim est in elit amet do ea
                            enim. Deserunt in commodo consectetur quis qui
                            incididunt. Aute ullamco mollit fugiat in laboris
                            deserunt pariatur duis dolore exercitation deserunt
                            Lorem. Irure adipisicing anim aute pariatur.
                            Incididunt dolor laboris ad nisi voluptate ullamco
                            sunt qui. Sit pariatur dolor sit deserunt. Nulla
                            irure mollit voluptate quis.
                        </p>
                    </Ublock>
                </PanelBody>
            </Panel>
        </>
    )
}
