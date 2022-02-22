import React from 'react'
import Icon from '@src/components/Icon/Icon'
import useVisible from '../../../functions/useVisible'

interface FilterFormFieldProps {
    filter: {
        title: string
        items: []
    }
    isSelected: Function
    handleSelect: Function
    handleApply: Function
}

const FilterFormField: React.FC<FilterFormFieldProps> = ({
    filter,
    isSelected,
    handleSelect,
    handleApply,
}): JSX.Element => {
    const { ref, isVisible, setIsVisible } = useVisible(
        false,
        'form__dropdown-button'
    )

    return (
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
                    {filter.title}
                    <figure className='form__icon'>
                        <Icon icon='chevron-down' size={12} />
                    </figure>
                </div>
                {isVisible && (
                    <div className='form__group--dropdown' ref={ref}>
                        <div className='form__group--dropdown-content'>
                            {filter.items && filter.items.length === 0 && (
                                <div className='form__group'>No Items</div>
                            )}
                            {filter.items &&
                                filter.items.map((item, index) => {
                                    const { id, name } = item
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
                                                onChange={() =>
                                                    handleSelect(name, id)
                                                }
                                                defaultChecked={isSelected(
                                                    name,
                                                    id
                                                )}
                                            />
                                            <label htmlFor={id}>{name}</label>
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
}
export default FilterFormField
