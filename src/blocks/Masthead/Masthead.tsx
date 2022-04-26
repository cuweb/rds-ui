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
    brand?: MastHeadBrand
    actions?: MastheadActionsTypes
    menu?: NavMenuItemTypes[]
}

const Masthead: React.FC<MastheadProps> = ({
    title,
    url = '/',
    brand,
    actions,
    menu,
    children,
}): JSX.Element => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const isMobile = useWindowSize().width < theme.breakpoints.tablet
    const hasMenu = menu && !isMobile
    const hasMobileMenu = isMobile && isOpen && menu
    const hasMobileButton = isMobile && menu
    const hasActions = actions || (isMobile && menu)

    return (
        <>
            <Ublock id='id-masthead' full>
                <div className='b-masthead'>
                    <MastheadTitle title={title} url={url} brand={brand} />
                    {hasMenu && <NavMenu type='top' menu={menu} />}
                    <div className='b-masthead__extra'>
                        {hasActions && (
                            <ul className='masthead__actions'>
                                {actions && <MastheadActions items={actions} />}
                                {hasMobileButton && (
                                    <MastheadMobileButton
                                        isOpen={isOpen}
                                        setIsOpen={setIsOpen}
                                    />
                                )}
                            </ul>
                        )}
                        {!isMobile && (
                            <div className='b-masthead__menu-item'>
                                {children}
                            </div>
                        )}
                    </div>
                </div>
            </Ublock>
            {hasMobileMenu && (
                <Overlay type='menu'>
                    <NavMenu type='top' menu={menu} isMobile />
                    <div className='b-masthead__menu-item'>{children}</div>
                </Overlay>
            )}
        </>
    )
}
export default Masthead
