import React from 'react'
import FilterFormField from './FilterFormField'
import FilterResetButton from './FilterResetButton'

interface FilterItemsProps {
    isMenuOpen: boolean
    isSelected: Function
    handleSelect: Function
    handleApply: Function
    handleReset: Function
    contentFilters: {
        title: string
        items: []
    }[]
}
const FilterItems: React.FC<FilterItemsProps> = ({
    isSelected,
    handleSelect,
    handleApply,
    isMenuOpen,
    contentFilters,
    handleReset,
}): JSX.Element => {
    const menuClass = isMenuOpen ? `content-filter__dialog--open e-shadow` : ''

    return (
        <div className={`content-filter__dialog ${menuClass}`}>
            <form className='b-form'>
                {contentFilters &&
                    contentFilters.sort().map((filter, index) => {
                        const itemProps = {
                            filter,
                            isSelected,
                            handleSelect,
                            handleApply,
                        }
                        return <FilterFormField {...itemProps} key={index} />
                    })}
                <FilterResetButton handleReset={handleReset} />
            </form>
        </div>
    )
}

export default FilterItems
