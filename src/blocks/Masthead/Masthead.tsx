import Ublock from '@src/components/Ublock/Ublock'
import Icon from '@src/components/Icon/Icon'
import React from 'react'

interface MastheadProps {
    title: string
    children: React.ReactNode
}

const Masthead: React.FC<MastheadProps> = ({ title, children }): JSX.Element => {
    return (
        <Ublock id='id-masthead' full>
            <div className='b-masthead'>
                <h1>
                    <a href='https://ravendesignsystem.github.io/rds/'>
                        <Icon icon='cushield' size={24} />
                        {title}
                    </a>
                </h1>
                {children}
            </div>
        </Ublock>
    )
}
export default Masthead
