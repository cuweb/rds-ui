import Icon from '@src/components/Icon/Icon'
import React from 'react'

interface FilterResetButtonProps {
    handleReset: Function
    filterSelectedItems: []
}

const FilterResetButton: React.FC<FilterResetButtonProps> = ({
    handleReset,
    filterSelectedItems,
}): JSX.Element => {
    const isDisable = filterSelectedItems.length === 0
    return (
        <div className='form__field'>
            <div className='form__group form__group--reset'>
                <button
                    type='submit'
                    className='form__button form__button--reset'
                    onClick={(e) => handleReset(e)}
                    disabled={isDisable}
                >
                    Reset Filters
                    <figure className='form__icon'>
                        <Icon icon={'sync'} size={12} />
                    </figure>
                </button>
            </div>
        </div>
    )
}
export default FilterResetButton
