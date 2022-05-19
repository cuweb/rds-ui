import React from 'react'
import { Meta } from '@storybook/react'
import Panel from '@blocks/Panel/Panel'
import PanelBody from '@blocks/Panel/components/PanelBody'

import Avatar from '@components/Avatar/Avatar'
import Ublock from '@components/Ublock/Ublock'
import { UserInfoType } from 'types/UserInfo'

export default {
    component: Panel,
    title: 'Components/Example',
} as Meta

export const UserSetting = () => {
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
