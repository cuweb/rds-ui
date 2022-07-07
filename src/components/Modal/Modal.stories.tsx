import Masthead from '@blocks/Masthead/Masthead'
import Avatar from '@components/Avatar/Avatar'
import NavMenu from '@components/NavMenu/NavMenu'
import useEscToClose from '@hooks/useEscKey'
import useOnClickOutside from '@hooks/useOnClickOutside'
import Overlay from '@layouts/Overlay/Overlay'
import React, { ReactNode, useRef, useState } from 'react'
import { UserInfoType } from 'types/UserInfo'
import SettingModal from './SettingModal'

export default {
    component: SettingModal,
    title: 'Components/Modal',
}

export const ModalSetting = () => {
    const [isOpen, setisOpen] = useState<boolean>(false)
    const [content, setContent] = useState<ReactNode>(<p>sample content </p>)

    const user: UserInfoType = {
        image: {
            src: 'https://i.carleton.ca/wp-content/uploads/2016/10/danny-brown-1-1-300x300.jpg',
            alt: '',
        },
        firstName: 'Danny',
        lastName: 'Brown',
    }
    const caption = 'Director, Enterprise Application'

    const args = [
        {
            title: 'User Settings',
            handleAction: () => {
                setContent(
                    <p>
                        user setting
                        <Avatar
                            user={user}
                            caption={caption}
                            rounded
                            className='u-margin-auto '
                        />
                        <p>
                            Officia mollit ea voluptate proident anim proident
                            est. Occaecat dolore excepteur occaecat in est. Anim
                            Lorem incididunt mollit consequat cillum ea nulla
                            eiusmod fugiat. Eu sunt esse elit duis minim velit
                            sunt exercitation. Qui labore ullamco officia dolor
                            sint velit cillum pariatur qui aute id. Et aute
                            magna sit sunt quis elit voluptate. Pariatur esse
                            proident commodo proident. Dolore cillum proident
                            aliquip ex quis culpa ipsum exercitation eiusmod
                            consectetur exercitation. Sunt aliqua commodo
                            ullamco do in laborum quis culpa in non. Ex culpa
                            quis amet dolor adipisicing ullamco sit commodo ea
                            ut consequat qui. Cillum do deserunt exercitation
                            minim enim. Esse dolor reprehenderit ut dolor in
                            sint minim laboris commodo voluptate eu.
                            Exercitation duis nisi labore enim excepteur sunt
                            enim sint veniam et voluptate velit eu. Proident
                            proident irure eiusmod do ex occaecat ipsum pariatur
                            fugiat officia do culpa minim mollit. Eu Lorem
                            commodo eiusmod nostrud reprehenderit exercitation
                            labore anim voluptate veniam ut laborum. Fugiat
                            officia proident magna fugiat. Cupidatat incididunt
                            culpa mollit nulla in fugiat ut id enim magna ad.
                            Amet id pariatur elit reprehenderit. Nisi enim esse
                            nulla dolore do amet ipsum nulla. Ad elit
                            consectetur amet laborum proident aliqua ad ea
                            adipisicing proident nostrud velit. Aute nisi
                            voluptate voluptate id ipsum et voluptate nisi. Enim
                            in veniam sunt minim nisi velit commodo anim non
                            duis. Reprehenderit nisi labore eu ipsum ipsum.
                            Nulla incididunt mollit qui adipisicing. In qui
                            pariatur qui enim laboris et fugiat. Fugiat aliquip
                            anim amet irure ad. Mollit Lorem sint enim ipsum do
                            quis cillum dolor eiusmod proident sit tempor aliqua
                            eu. Sunt et amet occaecat laborum sit excepteur
                            quis. Minim cillum adipisicing aliqua ut adipisicing
                            aliquip non veniam voluptate. Dolore voluptate
                            proident consectetur officia aliquip dolore. Sint
                            dolor ipsum cupidatat incididunt. Sunt nulla id qui
                            sint mollit sint laboris magna. Cillum ad labore
                            aliqua amet pariatur commodo. Elit sint irure
                            occaecat magna dolor minim minim exercitation tempor
                            consectetur dolore laboris. Qui ullamco fugiat esse
                            qui. Laborum officia aliqua consectetur nostrud
                            minim eu sit mollit irure laboris duis aliqua. Non
                            pariatur dolore fugiat consectetur proident id.
                            Cillum dolor amet ut cupidatat est veniam. Fugiat
                            excepteur cupidatat nisi ex incididunt ex cupidatat
                            amet exercitation. Proident ut aliqua labore tempor
                            do in laborum laboris incididunt nisi. Anim sunt
                            anim tempor id esse ut in ullamco do dolor irure
                            reprehenderit proident. Consectetur cillum qui
                            occaecat pariatur adipisicing quis reprehenderit
                            consectetur. Voluptate ad consectetur incididunt
                            quis nisi ut in pariatur ad anim sit ea incididunt.
                            Culpa nulla ea laboris eu occaecat minim sunt sunt
                            sit. Dolor Lorem proident minim veniam officia
                            incididunt. Anim adipisicing do labore aute aliquip
                            enim Lorem cupidatat enim pariatur occaecat. Eu
                            proident consectetur nisi ea ad commodo labore.
                            Excepteur occaecat proident adipisicing est
                            excepteur. Quis ad qui magna ex sit esse. Elit
                            consequat laboris ea quis nulla ullamco officia
                            proident anim laborum laboris in elit do. Enim minim
                            ex consectetur nulla. Duis veniam ex tempor
                            consectetur qui ex irure aute fugiat laboris. Est
                            aute ullamco fugiat commodo eiusmod voluptate
                            excepteur ea sit velit. Ipsum mollit mollit amet
                            tempor aliquip dolor est.
                        </p>
                    </p>
                )
            },
            preventDefault: true,
        },
        {
            title: 'Applications',
            handleAction: () => setContent('Hello from Applications'),
            preventDefault: true,
            subMenu: [
                {
                    title: 'Resource',
                    handleAction: () =>
                        setContent('hello Applications resource'),
                    preventDefault: true,
                },
                {
                    title: 'Application1',
                    handleAction: () => setContent(' Application 1'),
                    preventDefault: true,
                },
            ],
        },
        {
            title: 'Links',
            handleAction: () => setContent('Hello from Link Applications'),
            preventDefault: true,
            subMenu: [
                {
                    title: 'Resource',
                    handleAction: () => setContent('hello Link resource'),
                    preventDefault: true,
                },
                {
                    title: 'Application1',
                    handleAction: () => setContent(' Link Application 1'),
                    preventDefault: true,
                },
            ],
        },
    ]

    const modelContainer = useRef(null)
    useOnClickOutside(modelContainer, () => setisOpen(false))
    useEscToClose(modelContainer, () => setisOpen(false))

    return (
        <>
            <Masthead title={'Raven Design '} />
            <div>
                <button
                    className='c-buttoncta'
                    onClick={() => setisOpen(!isOpen)}
                    style={{ marginTop: '100px' }}
                >
                    Setting Modal
                </button>

                <Overlay isHidden={!isOpen} trasparentBackground>
                    <div className='u-settings-layout' ref={modelContainer}>
                        <div className='u-settings-sideBar'>
                            <h3> Setting</h3>
                            <NavMenu type='modalMenu' menu={args} />
                        </div>
                        <div className='u-settings-content'>{content}</div>
                    </div>
                </Overlay>
            </div>
        </>
    )
}
