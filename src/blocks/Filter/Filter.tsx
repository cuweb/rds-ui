import React, { useState } from 'react'
// import FilterButton from './components/FilterButton'
import FilterItems from './components/FilterItems'
import useVisible from '../../functions/useVisible'
import Icon from '@src/components/Icon/Icon'
interface FilterProps {
    contentFilterSave: Function
    contentFilters: string[]
    filterItems: {
        id: string
        name: string
        taxonomy: string
    }[]
}

const Filter: React.FC<FilterProps> = ({
    contentFilterSave,
    contentFilters,
    filterItems,
}): JSX.Element => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [selectedItems, setSelectedItems] = useState([])
    const menuClass = isMenuOpen ? `content-filter__dialog--open e-shadow` : ''

    const { ref, isVisible, setIsVisible } = useVisible(
        false,
        'form__dropdown-button'
    )

    const itemTitle = 'Categories'

    // const getSelected = (taxonomy, id) => `${taxonomy}${id}`
    // const isSelected = (taxonomy, id) =>
    //     selectedItems.includes(getSelected(taxonomy, id))

    // const handleSelect = (taxonomy, id) => {
    //     const selected = getSelected(taxonomy, id)
    //     if (!selectedItems.includes(selected)) {
    //         return setSelectedItems([...selectedItems, selected])
    //     }
    //     return setSelectedItems(
    //         [...selectedItems].filter((item) => item !== selected)
    //     )
    // }
    const handleApply = (e: Event) => {
        e.preventDefault()
        setIsMenuOpen(false)
        contentFilterSave(selectedItems)
    }

    const handleReset = (e: Event) => {
        e.preventDefault()
        setIsMenuOpen(false)
        setSelectedItems([])
        contentFilterSave([])
    }

    const globalProps = {
        contentFilterSave,
        contentFilters,
        isMenuOpen,
        setIsMenuOpen,
        // isSelected,
        // handleSelect,
        handleApply,
        handleReset,
        filterItems,
    }

    // const menuButtonProps = {
    //     ...globalProps,
    //     type: 'menu',
    //     title: 'Filter Options',
    //     icon: 'settings',
    // }

    return (
        <div className='content-filter'>
            <div className={`content-filter__dialog ${menuClass}`}>
                <form className='b-form'>
                    <div
                        className={`form__field form__field--checkbox ${
                            isVisible ? `form__field--dropdown` : ''
                        }`}
                    >
                        <fieldset>
                            <div
                                className='form__group--dropdown-button'
                                onClick={() => setIsVisible(!isVisible)}
                            >
                                {itemTitle}
                                <figure className='form__icon'>
                                    <Icon icon='chevron-down' size={12} />
                                </figure>
                            </div>
                            {isVisible && (
                                <div
                                    className='form__group--dropdown'
                                    ref={ref}
                                >
                                    <div className='form__group--dropdown-content'>
                                        {filterItems &&
                                            filterItems.length === 0 && (
                                                <div className='form__group'>
                                                    No Items
                                                </div>
                                            )}
                                        {filterItems &&
                                            filterItems.map((item, index) => {
                                                const { id, name, taxonomy } =
                                                    item
                                                return (
                                                    <div
                                                        className='form__group'
                                                        key={index}
                                                    >
                                                        <input
                                                            id={id}
                                                            type='checkbox'
                                                            name={name}
                                                            className='form__input--checkbox'
                                                            // onChange={() =>
                                                            //     handleSelect(taxonomy, id)
                                                            // }
                                                            // defaultChecked={isSelected(
                                                            //     taxonomy,
                                                            //     id
                                                            // )}
                                                        />
                                                        <label htmlFor={id}>
                                                            {name}
                                                        </label>
                                                    </div>
                                                )
                                            })}
                                    </div>
                                    <div className='form__group--dropdown-footer'>
                                        <a
                                            href='#'
                                            className='content-filter__button content-filter__button--apply'
                                            onClick={(e) => {
                                                setIsVisible(false)
                                                // handleApply(e)
                                            }}
                                        >
                                            Apply Filters
                                        </a>
                                    </div>
                                </div>
                            )}
                        </fieldset>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Filter
