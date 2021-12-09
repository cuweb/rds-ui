import Ublock from '@src/components/Ublock/Ublock'
import Icon from '@src/components/Icon/Icon'
import React from 'react'

const Masthead: React.FC = (): JSX.Element => {
    return (
        <Ublock id='id-masthead' full>
            <div className='b-masthead'>
                <h1>
                    <a href='https://ravendesignsystem.github.io/rds/'>
                        <Icon icon='cushield' size={24} />
                        Raven Design System
                    </a>
                </h1>
            </div>
        </Ublock>
    )
}
export default Masthead
