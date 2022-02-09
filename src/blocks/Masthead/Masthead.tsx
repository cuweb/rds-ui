import Ublock from '@src/components/Ublock/Ublock'
import Icon from '@src/components/Icon/Icon'
import React from 'react'
import MastheadActions from './MastheadActions'

interface MastheadProps {
    title: string
    actions?: Array<MastheadItemsProps>
}

interface MastheadItemsProps {
    text: string
    link: string
}

const Masthead: React.FC<MastheadProps> = ({ title, actions }): JSX.Element => {
    return (
        <Ublock id='id-masthead' full>
            <div className='b-masthead'>
                <h1>
                    <a href='https://ravendesignsystem.github.io/rds/'>
                        <Icon icon='cushield' size={24} />
                        {title}
                    </a>
                </h1>
                {actions && <MastheadActions items={actions} />}
            </div>
        </Ublock>
    )
}
export default Masthead
