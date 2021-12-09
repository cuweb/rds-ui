import Icon from '@src/components/Icon/Icon'
import React from 'react'

const Masthead: React.FC = (): JSX.Element => {
    return (
        <div id='id-masthead' className='u-block u-block--full'>
            <div className='b-masthead'>
                <h1>
                    <a href='https://ravendesignsystem.github.io/rds/'>
                        <Icon icon='cushield' size={24} />
                        Raven Design System
                    </a>
                </h1>
            </div>
        </div>
    )
}
export default Masthead
