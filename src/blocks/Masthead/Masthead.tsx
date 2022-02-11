import Ublock from '@src/components/Ublock/Ublock'
import React from 'react'
import MastheadActions from './MastheadActions'
import MastheadTitle from './MastheadTitle'
import { Brand, Actions, Menu } from './MastHeadTypes'
import MastheadMenu from './MastheadMenu'

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
    return (
        <Ublock id='id-masthead' full>
            <div className='b-masthead'>
                <MastheadTitle title={title} url={url} brand={brand} />
                {menu && <MastheadMenu menu={menu} />}
                {actions && <MastheadActions items={actions} />}
            </div>
        </Ublock>
    )
}
export default Masthead
