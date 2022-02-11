import React, { FC, useState } from 'react'
import Icon from '@src/components/Icon/Icon'
import Ublock from '@src/components/Ublock/Ublock'
import Overlay from '@src/layouts/Overlay/Overlay'
import SearchForm, {
    SearchFormProps,
} from '@src/components/SearchForm/SearchForm'

const MastheadSearch: FC<SearchFormProps> = (props): JSX.Element => {
    const { title } = props
    const [isOpen, setIsOpen] = useState(false)

    if (!isOpen) {
        return (
            <li className='masthead__search'>
                <button
                    type='button'
                    aria-label='Open Search'
                    className='masthead__searchbtn u-icon u-icon--notext-s'
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <Icon icon='search' />
                    {title && <span className='u-hide-s'>{title}</span>}
                </button>
            </li>
        )
    }

    return (
        <>
            <li className='masthead__close-modals'>
                <button
                    type='button'
                    aria-label='Close Modals'
                    className='masthead__closebtn u-icon u-icon--notext'
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <Icon icon='X' />
                </button>
            </li>
            <Overlay type='search' isHidden={!isOpen}>
                <Ublock color='grey'>
                    <div className='b-search'>
                        <SearchForm {...props} />
                    </div>
                </Ublock>
            </Overlay>
        </>
    )
}
export default MastheadSearch
