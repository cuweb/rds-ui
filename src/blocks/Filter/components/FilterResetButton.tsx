import Icon from '@src/components/Icon/Icon'
import React from 'react'

interface FilterResetButtonProps {
    handleReset: Function
}

const FilterResetButton: React.FC<FilterResetButtonProps> = ({
    handleReset,
}): JSX.Element => {
    return (
        <div className='form__field'>
            <div className='form__group form__group--reset'>
                <button
                    type='submit'
                    className='form__button form__button--reset'
                    onClick={(e) => handleReset(e)}
                >
                    Reset Filters
                    <figure className='form__icon'>
                        <Icon icon='sync' size={12} />
                    </figure>
                </button>
            </div>
        </div>
    )
}
export default FilterResetButton
