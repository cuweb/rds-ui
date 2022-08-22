import React, { useState } from 'react'
import Ublock from '@components/Ublock/Ublock'
import useWindowSize from '@hooks/useWindowSize'
import Overlay from '@layouts/Overlay/Overlay'
import MastheadActions, {
    MastheadActionsTypes,
} from '@blocks/Masthead/components/MastheadActions'
import MastheadTitle, {
    MastHeadBrand,
} from '@blocks/Masthead/components/MastheadTitle'
import MastheadMobileButton from '@blocks/Masthead/components/MastheadMobileButton'
import NavMenu from '@components/NavMenu/NavMenu'
import { NavMenuItemTypes } from '@components/NavMenu/components/NavMenuItem'
import theme from 'config/theme'

export interface MastheadProps {
    title: string
    url?: string
    wrapLink?: any
    brand?: MastHeadBrand
    actions?: MastheadActionsTypes
    menu?: NavMenuItemTypes[]
    children?: React.ReactNode
}

const Masthead: React.FC<MastheadProps> = ({
    title,
    url = '/',
    wrapLink,
    brand,
    actions,
    menu,
    children,
}): JSX.Element => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const isMobile = useWindowSize().width < theme.breakpoints.tablet
    const hasMobileMenu = isMobile && isOpen
    const hasMobileButton = isMobile

    return (
        <>
            <Ublock id='id-masthead' full>
                <div className='b-masthead'>
                    <MastheadTitle title={title} url={url} brand={brand} />
                    <div className='b-masthead__extra'>
                        <ul className='masthead__actions'>
                            {actions && (
                                <MastheadActions
                                    items={actions}
                                    isMobile={isMobile}
                                    wrapLink={wrapLink}
                                />
                            )}
                            {hasMobileButton && (
                                <MastheadMobileButton
                                    isOpen={isOpen}
                                    setIsOpen={setIsOpen}
                                />
                            )}
                        </ul>
                        {!isMobile && (
                            <div className='b-masthead__content'>
                                {children}
                            </div>
                        )}
                    </div>
                </div>
            </Ublock>
            {hasMobileMenu && (
                <Overlay type='menu'>
                    {menu && (
                        <NavMenu
                            type='top'
                            menu={menu}
                            wrapLink={wrapLink}
                            isMobile
                        />
                    )}
                    <div className='b-masthead__content'>{children}</div>
                </Overlay>
            )}
        </>
    )
}
export default Masthead
