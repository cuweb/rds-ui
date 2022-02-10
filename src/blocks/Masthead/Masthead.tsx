import Ublock from '@src/components/Ublock/Ublock'
import React from 'react'
import MastheadActions from './MastheadActions'
import MastheadTitle from './MastheadTitle'
import { MastheadProps } from './MastHeadInterfaces'

const Masthead: React.FC<MastheadProps> = ({
    title,
    url,
    brand,
    actions,
}): JSX.Element => {
    return (
        <Ublock id='id-masthead' full>
            <div className='b-masthead'>
                <MastheadTitle title={title} url={url} brand={brand} />
                {actions && <MastheadActions items={actions} />}
            </div>
        </Ublock>
    )
}
export default Masthead
