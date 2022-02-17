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

export interface MastheadProps {
    title: string
    url: string
    brand?: MastHeadBrand
    actions?: MastheadActionsTypes
    menu?: Array<NavMenuItemTypes>
}

const Masthead: React.FC<MastheadProps> = ({
    title,
    url,
    brand,
    actions,
    menu,
}): JSX.Element => {
    const [isOpen, setIsOpen] = useState(true)
    const isMobile = useWindowSize().width < 1024
    const hasMenu = menu && !isMobile
    const hasActions = actions && !isMobile
    const hasMobileMenu = isMobile && isOpen && menu

    return (
        <>
            <Ublock id='id-masthead' full>
                <div className='b-masthead'>
                    <MastheadTitle title={title} url={url} brand={brand} />
                    {hasMenu && <NavMenu type='top' menu={menu} />}
                    {hasActions && <MastheadActions items={actions} />}
                    {isMobile && (
                        <MastheadMobileButton
                            isOpen={isOpen}
                            setIsOpen={setIsOpen}
                        />
                    )}
                </div>
            </Ublock>
            {hasMobileMenu && (
                <Overlay type='menu'>
                    <NavMenu type='top' menu={menu} />
                </Overlay>
            )}
        </>
    )
}
export default Masthead
