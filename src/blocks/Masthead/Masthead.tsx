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
    const hasMenu = menu && !isMobile
    const hasMobileMenu = isMobile && isOpen
    const hasMobileButton = isMobile

    return (
        <Ublock id='id-masthead' full>
            <div className='b-masthead'>HI</div>
        </Ublock>
    )
}
export default Masthead
