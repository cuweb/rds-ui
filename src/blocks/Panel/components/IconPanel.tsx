import React from 'react'
import Ublock from '@src/components/Ublock/Ublock'

export interface IconPanelProps {
    titleIcon?: string
    heading?: string
    content: string
    buttonIcon?: ButtonIconProps
}

interface ButtonIconProps {
    content: string
}

const IconPanel: React.FC<IconPanelProps> = ({
    titleIcon,
    heading,
    content,
    buttonIcon,
}): JSX.Element => (
    <Ublock>
        <div className='b-sidebar'>
            {titleIcon && (
                <h2 className='sidebar__heading'>
                    <span className='u-icon'>
                        <svg
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'
                            aria-hidden='true'
                        >
                            <path d='M12 0C7.47 0 3.75 3.285 3.75 7.5c0 1.38.825 3.375 1.5 4.5 2.01 3.375 2.67 4.17 3 6v1.5h7.5V18c.33-1.83.99-2.625 3-6 .675-1.125 1.5-3.12 1.5-4.5C20.25 3.285 16.53 0 12 0zm5.46 11.22c-.375.66-.705 1.2-1.005 1.665-1.29 2.115-1.875 3.09-2.175 4.845-.03.075-.03.165-.03.255h-4.5c0-.09 0-.195-.03-.255-.3-1.755-.885-2.745-2.175-4.845-.3-.465-.63-1.005-1.005-1.665-.63-1.05-1.29-2.745-1.29-3.72 0-3.3 3.03-6 6.75-6 1.83 0 3.54.63 4.83 1.785C18.075 4.41 18.75 5.91 18.75 7.5c0 .99-.66 2.67-1.29 3.72zM8.25 21h7.5c-.345 1.71-1.95 3-3.75 3s-3.405-1.29-3.75-3z' />
                        </svg>
                        {titleIcon}
                    </span>
                </h2>
            )}
            {heading && <h3 dangerouslySetInnerHTML={{ __html: heading }} />}
            <p dangerouslySetInnerHTML={{ __html: content }} />
            {buttonIcon && (
                <a className='c-buttoncta' href='https://carleton.ca'>
                    <span className='u-icon'>
                        <svg
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'
                            aria-hidden='true'
                        >
                            <path d='M16.8 9.6V0H7.2v9.6H0L12 24 24 9.6z' />
                        </svg>
                        {content}
                    </span>
                </a>
            )}
        </div>
    </Ublock>
)
export default IconPanel
