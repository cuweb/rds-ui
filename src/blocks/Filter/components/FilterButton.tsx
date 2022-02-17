import Icon from '@src/components/Icon/Icon'
import React from 'react'

const FilterButton = (props) => {
    const {
        isMenuOpen,
        setIsMenuOpen,
        type = 'menu',
        icon = 'X',
        title,
    } = props
    return (
        <button
            className={`content-filter__button content-filter__button--${type}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
            <figure className='content-filter__icon'>
                <Icon icon={icon} size={12} />
            </figure>

            {title && (
                <span className='content-filter__button-text'>{title}</span>
            )}
        </button>
    )
}
export default FilterButton
