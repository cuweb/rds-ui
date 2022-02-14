import React, { useState } from 'react'
import Ublock from '@src/components/Ublock/Ublock'
import useWindowSize from '@src/hooks/useWindowSize'
import Overlay from '@src/layouts/Overlay/Overlay'
import MastheadActions from '@src/blocks/Masthead/components/MastheadActions'
import MastheadTitle from '@src/blocks/Masthead/components/MastheadTitle'
import { Brand, Actions, Menu } from '@src/blocks/Masthead/MastHeadTypes'
import MastheadMenu from '@src/blocks/Masthead/components/MastheadMenu'
import MastheadMobileButton from '@src/blocks/Masthead/components/MastheadMobileButton'

export interface MastheadProps {
    title: string
    url: string
    brand?: Brand
    actions?: Actions
    menu?: Menu
}

const Masthead: React.FC<MastheadProps> = ({
    title,
    url,
    brand,
    actions,
    menu,
}): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false)
    const isMobile = useWindowSize().width < 1024
    const hasMenu = menu && !isMobile
    const hasActions = actions && !isMobile
    const hasMobileMenu = isMobile && isOpen

    return (
        <>
            <Ublock id='id-masthead' full>
                <div className='b-masthead'>
                    <MastheadTitle title={title} url={url} brand={brand} />
                    {hasMenu && <MastheadMenu menu={menu} />}
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
                    {menu && <MastheadMenu menu={menu} />}
                </Overlay>
            )}
        </>
    )
}
export default Masthead
