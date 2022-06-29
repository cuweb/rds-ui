import React, { useRef, useState } from 'react'
import Overlay from './Overlay'
import Banner from '../../blocks/Banner/Banner'
import PanelHeader from '@blocks/Panel/components/PanelHeader'
import PanelBody from '@blocks/Panel/components/PanelBody'
import Panel from '@blocks/Panel/Panel'
import useEscToClose from '@hooks/useEscKey'
import useOnClickOutside from '@hooks/useOnClickOutside'
import Masthead from '@blocks/Masthead/Masthead'

export default {
    component: Overlay,
    title: 'Main Concepts/Layouts/Overlay',
}

export const Default = () => {
    const [isHidden, setIsHidden] = useState<boolean>(true)
    return (
        <div className='example'>
            <button
                className='c-buttoncta'
                onClick={() => setIsHidden(!isHidden)}
            >
                Open Dialog
            </button>
            <Overlay
                isHidden={isHidden}
                type='banner'
                className='custom__class'
            >
                <Banner title='Banner Dialog'>
                    <button
                        className='c-buttoncta'
                        onClick={() => setIsHidden(!isHidden)}
                    >
                        Close Dialog
                    </button>
                </Banner>
            </Overlay>
        </div>
    )
}

export const TransparentBackground = () => {
    const [isHidden, setIsHidden] = useState<boolean>(true)

    const modalRef = useRef(null)
    useOnClickOutside(modalRef, () => setIsHidden(true))
    useEscToClose(modalRef, () => setIsHidden(true))

    return (
        <>
            <Masthead title={'raven design system '} />
            <div className='example' style={{ marginTop: '100px' }}>
                <button
                    className='c-buttoncta'
                    onClick={() => setIsHidden(!isHidden)}
                >
                    Open Panel
                </button>
                <Overlay isHidden={isHidden} trasparentBackground>
                    <Panel>
                        <div ref={modalRef}>
                            <PanelHeader> Setting Panel</PanelHeader>
                            <PanelBody>
                                <button
                                    className='c-buttoncta'
                                    onClick={() => setIsHidden(!isHidden)}
                                >
                                    Close Dialog
                                </button>
                            </PanelBody>
                        </div>
                    </Panel>
                </Overlay>
            </div>
        </>
    )
}

export const OverlayNav = () => {
    const [isHidden, setIsHidden] = useState<boolean>(true)

    const modalRef = useRef(null)
    useOnClickOutside(modalRef, () => setIsHidden(true))
    useEscToClose(modalRef, () => setIsHidden(true))

    return (
        <>
            <Masthead title={'raven design system '} />
            <div className='example' style={{ marginTop: '100px' }}>
                <button
                    className='c-buttoncta'
                    onClick={() => setIsHidden(!isHidden)}
                >
                    Open Panel
                </button>
                <Overlay isHidden={isHidden} trasparentBackground overlayNav>
                    <Panel>
                        <div ref={modalRef}>
                            <PanelHeader> Setting Panel</PanelHeader>
                            <PanelBody>
                                <button
                                    className='c-buttoncta'
                                    onClick={() => setIsHidden(!isHidden)}
                                >
                                    Close Dialog
                                </button>
                            </PanelBody>
                        </div>
                    </Panel>
                </Overlay>
            </div>
        </>
    )
}
