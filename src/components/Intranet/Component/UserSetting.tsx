/**
 * @name UserSettings
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

import Panel from '@blocks/Panel/Panel'
import Ublock from '@components/Ublock/Ublock'
import Ugrid from '@components/Ugrid/Ugrid'
import React, { useRef, useState } from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IUserSettings {}

const UserSettings: React.FC<IUserSettings> = (): JSX.Element => {
    const [currentView, setCurrentView] = useState('personal')

    const modalRef = useRef(null)
    // useOnClickOutside(modalRef, () => setModalIsOpen(false))
    // useEscToClose(modalRef, () => setModalIsOpen(false))

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const views: { [key: string]: any } = {
        personal: {
            title: 'Personal User Settings',
            content: (
                <p className='u-margin-auto'>
                    Cillum aliqua nostrud et sit irure nulla dolor deserunt
                    ullamco est pariatur cillum ad. Incididunt quis culpa dolore
                    cillum proident exercitation est eiusmod minim labore et.
                    Esse laborum pariatur amet cillum eu duis in aute fugiat et
                    et proident. Excepteur esse voluptate veniam velit fugiat
                    minim laboris. Duis tempor ullamco pariatur pariatur est
                    aute eu cupidatat eu ea qui do. Ut quis aute laborum mollit
                    labore sint est ullamco veniam cillum irure reprehenderit
                    sit elit. Anim officia sunt velit aute incididunt aute
                    voluptate officia quis commodo proident ex do mollit.
                    Consectetur magna non magna ea sit irure. Proident veniam
                    ipsum proident consectetur minim id esse. Excepteur enim
                    exercitation commodo est cillum excepteur enim anim
                    cupidatat amet eiusmod magna. Ex tempor et qui ullamco
                    occaecat sunt dolore enim minim do. Nostrud dolore labore
                    aliqua est mollit ullamco fugiat commodo sint. Ea
                    exercitation occaecat nisi laborum nisi nulla culpa nisi.
                    Esse nostrud nisi et mollit pariatur labore sint Lorem
                    dolore. Velit Lorem pariatur duis velit magna culpa sit
                    deserunt incididunt sint commodo velit pariatur id. Laborum
                    minim ipsum excepteur dolore aute mollit nulla officia
                    pariatur voluptate. Aliqua nulla consequat occaecat sunt ut
                    id sint reprehenderit est id occaecat eiusmod commodo.
                    Cupidatat consequat ad quis duis aliquip duis. In fugiat
                    nostrud excepteur voluptate non sint. Voluptate minim enim
                    cupidatat duis adipisicing proident. Laborum sint ut id est
                    nostrud velit magna officia nulla excepteur amet excepteur
                    culpa. Mollit nulla dolore magna culpa irure ipsum veniam
                    officia ea nostrud sit irure. Adipisicing veniam aliqua
                    Lorem esse esse fugiat commodo excepteur enim enim. Amet eu
                    ad adipisicing ex aute et velit laboris occaecat ipsum
                    minim. Aute reprehenderit occaecat est aute. Reprehenderit
                    sit labore ea magna duis duis nulla aliqua duis irure. Id
                    magna est pariatur sit est commodo esse adipisicing tempor.
                    Anim tempor eiusmod exercitation nisi adipisicing duis est
                    sit voluptate. Officia ullamco minim aliqua eu id est dolor
                    quis esse deserunt consectetur nostrud mollit culpa. Tempor
                    nisi veniam mollit qui minim voluptate amet et. Cillum
                    aliqua nostrud et sit irure nulla dolor deserunt ullamco est
                    pariatur cillum ad. Incididunt quis culpa dolore cillum
                    proident exercitation est eiusmod minim labore et. Esse
                    laborum pariatur amet cillum eu duis in aute fugiat et et
                    proident. Excepteur esse voluptate veniam velit fugiat minim
                    laboris. Duis tempor ullamco pariatur pariatur est aute eu
                    cupidatat eu ea qui do. Ut quis aute laborum mollit labore
                    sint est ullamco veniam cillum irure reprehenderit sit elit.
                    Anim officia sunt velit aute incididunt aute voluptate
                    officia quis commodo proident ex do mollit. Consectetur
                    magna non magna ea sit irure. Proident veniam ipsum proident
                    consectetur minim id esse. Excepteur enim exercitation
                    commodo est cillum excepteur enim anim cupidatat amet
                    eiusmod magna. Ex tempor et qui ullamco occaecat sunt dolore
                    enim minim do. Nostrud dolore labore aliqua est mollit
                    ullamco fugiat commodo sint. Ea exercitation occaecat nisi
                    laborum nisi nulla culpa nisi. Esse nostrud nisi et mollit
                    pariatur labore sint Lorem dolore. Velit Lorem pariatur duis
                    velit magna culpa sit deserunt incididunt sint commodo velit
                    pariatur id. Laborum minim ipsum excepteur dolore aute
                    mollit nulla officia pariatur voluptate. Aliqua nulla
                    consequat occaecat sunt ut id sint reprehenderit est id
                    occaecat eiusmod commodo. Cupidatat consequat ad quis duis
                    aliquip duis. In fugiat nostrud excepteur voluptate non
                    sint. Voluptate minim enim cupidatat duis adipisicing
                    proident. Laborum sint ut id est nostrud velit magna officia
                    nulla excepteur amet excepteur culpa. Mollit nulla dolore
                    magna culpa irure ipsum veniam officia ea nostrud sit irure.
                    Adipisicing veniam aliqua Lorem esse esse fugiat commodo
                    excepteur enim enim. Amet eu ad adipisicing ex aute et velit
                    laboris occaecat ipsum minim. Aute reprehenderit occaecat
                    est aute. Reprehenderit sit labore ea magna duis duis nulla
                    aliqua duis irure. Id magna est pariatur sit est commodo
                    esse adipisicing tempor. Anim tempor eiusmod exercitation
                    nisi adipisicing duis est sit voluptate. Officia ullamco
                    minim aliqua eu id est dolor quis esse deserunt consectetur
                    nostrud mollit culpa. Tempor nisi veniam mollit qui minim
                    voluptate amet et.
                </p>
            ),
        },
        applications: {
            title: 'Applications',
            // content: <EditResourceList resourceType='application' />,
            content: <p className='u-margin-auto'> Hello from Applications</p>,
        },
        links: {
            title: 'Links',
            // content: <EditResourceList resourceType='link' />,
            content: (
                <p className='u-margin-auto'> Hello from Link Applications</p>
            ),
        },
    }

    return (
        <Panel
            block={{ noPadding: true, wide: true }}
            className='u-margin-top-s u-h-fix u-o-sroll'
        >
            <div ref={modalRef}>
                <Ugrid isLayout gap={1} className='u-no-padding'>
                    <Ublock
                        color='grey'
                        heading={{
                            title: 'Settings',
                        }}
                        className='u-h-full'
                    >
                        <p onClick={() => setCurrentView('personal')}>
                            User Settings
                        </p>
                        <p onClick={() => setCurrentView('applications')}>
                            Applications
                        </p>
                        <p onClick={() => setCurrentView('links')}>Links</p>
                    </Ublock>

                    <Ugrid columns={1}>{views[currentView].content}</Ugrid>
                </Ugrid>
            </div>
        </Panel>
    )
}

// u-margin-top-s
export default UserSettings
