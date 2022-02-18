import React from 'react'
import FilterFormField from './FilterFormField'
import FilterResetButton from './FilterResetButton'

interface FilterItemsProps {
    isMenuOpen: boolean
    contentFilters: string[]
    filterItems: {
        id: string
        name: string
        taxonomy: string
    }[]
}
const FilterItems: React.FC<FilterItemsProps> = ({
    isMenuOpen,
    contentFilters,
    filterItems,
}): JSX.Element => {
    const menuClass = isMenuOpen ? `content-filter__dialog--open e-shadow` : ''

    return (
        <div className={`content-filter__dialog ${menuClass}`}>
            <form className='b-form'>
                {contentFilters.sort().map((filter, index) => {
                    const itemProps = {
                        filter,
                        isMenuOpen,
                        contentFilters,
                        filterItems,
                    }
                    return <FilterFormField {...itemProps} key={index} />
                })}
                <FilterResetButton
                    handleReset={() => undefined}
                    filterSelectedItems={[]}
                />
            </form>
        </div>
    )
}

export default FilterItems
