import React, { useEffect, useState } from 'react'
// import FilterButton from './components/FilterButton'
// import FilterItems from './components/FilterItems'
import useVisible from '../../functions/useVisible'
import Icon from '@src/components/Icon/Icon'

interface FilterProps {
    contentFilterSave: Function
    filterItems: {
        title: string
        items: { id: string; name: string }[]
    }[]
}

const Filter: React.FC<FilterProps> = ({
    contentFilterSave,
    // contentFilters,
    filterItems,
}): JSX.Element => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    const [selectedItems, setSelectedItems] = useState<string[]>([])
    const menuClass: string = isMenuOpen ? `content-filter__dialog--open e-shadow` : ''

    const { ref, isVisible, setIsVisible } = useVisible(
        false,
        'form__dropdown-button'
    )

    const getSelected = (name: string, id: string) => `${name}${id}`
    const isSelected = (name: string, id: string) =>
        selectedItems.includes(getSelected(name, id))

    const handleSelect = (name: string, id: string) => {
        const selected: string = getSelected(name, id)
        if (!selectedItems.includes(selected)) {
            return setSelectedItems([...selectedItems, selected])
        }
        return setSelectedItems(
            [...selectedItems].filter((item) => item !== selected)
        )
    }
    const handleApply = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
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
   
    return (
        <div className='content-filter'>
            <div className={`content-filter__dialog ${menuClass}`}>
                <form className='b-form'>
                    <p>dsfsdsd</p>
                    {filterItems.map((filterItem, index) => {
                        const { title, items } = filterItem
                        return (
                            <div
                            key={index}
                                className={`form__field form__field--checkbox ${
                                    isVisible ? `form__field--dropdown` : ''
                                }`}
                            >
                                <fieldset>
                                    <div
                                        className='form__group--dropdown-button'
                                        onClick={() => setIsVisible(!isVisible)}
                                    >
                                        {title}
                                        <figure className='form__icon'>
                                            <Icon
                                                icon='chevron-down'
                                                size={12}
                                            />
                                        </figure>
                                    </div>
                                    {isVisible && (
                                        <div
                                            className='form__group--dropdown'
                                            ref={ref}
                                        >
                                            <div className='form__group--dropdown-content'>
                                                {items &&
                                                    items.length ===
                                                        0 && (
                                                        <div className='form__group'>
                                                            No Items
                                                        </div>
                                                    )}
                                                {items &&
                                                    items.map(
                                                        (item, index) => {
                                                            const { id, name } = item
                                                            return (
                                                                <div
                                                                    className='form__group'
                                                                    key={index}
                                                                >
                                                                    <input
                                                                        id={
                                                                            id
                                                                        }
                                                                        type='checkbox'
                                                                        name={
                                                                            name
                                                                        }
                                                                        className='form__input--checkbox'
                                                                        onChange={() =>
                                                                            handleSelect(name, id)
                                                                        }
                                                                        defaultChecked={isSelected(
                                                                            name,
                                                                            id
                                                                        )}
                                                                    />
                                                                    <label
                                                                        htmlFor={
                                                                            item.id
                                                                        }
                                                                    >
                                                                        {
                                                                            item.name
                                                                        }
                                                                    </label>
                                                                </div>
                                                            )
                                                        }
                                                    )}
                                            </div>
                                            <div className='form__group--dropdown-footer'>
                                                <a
                                                    href='#'
                                                    className='content-filter__button content-filter__button--apply'
                                                    onClick={(e) => {
                                                        setIsVisible(false)
                                                        handleApply(e)
                                                    }}
                                                >
                                                    Apply Filters
                                                </a>
                                            </div>
                                        </div>
                                    )}
                                </fieldset>
                            </div>
                        )
                    })}
                </form>
            </div>
        </div>
    )
}
export default Filter
