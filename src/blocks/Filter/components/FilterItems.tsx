import Icon from '@src/components/Icon/Icon'
import React from 'react'
// import FilterButton from './FilterButton'
import FilterFormField from './FilterFormField'
// import FilterResetButton from './FilterResetButton';

const FilterItems = (props) => {
    const { isMenuOpen, contentFilters } = props
    const menuClass = isMenuOpen ? `content-filter__dialog--open e-shadow` : ''
    const closeButtonProps = {
        ...props,
        type: 'close',
        icon: 'X',
    }

    return (
        <div className={`content-filter__dialog ${menuClass}`}>
            <div className='content-filter__header'>
                <h4 className='content-filter__title'>Filter Content</h4>
                {/* <FilterButton {...closeButtonProps} /> */}
                <button
                    className={`content-filter__button content-filter__button--${closeButtonProps.type}`}
                    onClick={() =>
                        closeButtonProps.setIsMenuOpen(
                            !closeButtonProps.isMenuOpen
                        )
                    }
                >
                    <figure className='content-filter__icon'>
                        <Icon icon='X' size={12} />
                    </figure>

                    {closeButtonProps.title && (
                        <span className='content-filter__button-text'>
                            {closeButtonProps.title}
                        </span>
                    )}
                </button>
            </div>
            <form className='b-form'>
                {contentFilters.sort().map((filter, index) => {
                    const itemProps = {
                        filter,
                        ...props,
                    }
                    return <FilterFormField {...itemProps} key={index} />
                })}
                {/* <FilterResetButton {...props} /> */}
            </form>
        </div>
    )
}

export default FilterItems
