import React from 'react'
import Icon from '@components/Icon/Icon'

interface FilterResetButtonProps {
    handleReset: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
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
