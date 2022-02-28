import React from 'react'
import FilterFormField from './FilterFormField'
import FilterResetButton from './FilterResetButton'

interface FilterItemsProps {
    isMenuOpen: boolean
    isSelected: (name: string) => boolean | undefined
    handleSelect: (name: string) => void
    handleApply: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    handleReset: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    contentFilters: {
        title: string
        items: {
            id?: string
            name: string
        }[]
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
