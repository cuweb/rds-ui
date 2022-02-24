import React from 'react'
import Icon from '@src/components/Icon/Icon'
import useVisible from '../../../functions/useVisible.js'

interface FilterFormFieldProps {
    filter: {
        title: string
        items: {
            id?: string
            name: string
        }[]
    }
    isSelected: (name: string) => boolean | undefined
    handleSelect: (name: string) => void
    handleApply: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
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
    const { title, items } = filter
    return (
        <div
            className={`form__field form__field--checkbox ${
                isVisible ? `form__field--dropdown` : ''
            }`}
        >
            <fieldset>
                <div
                    role='button'
                    className='form__group--dropdown-button'
                    onClick={() => setIsVisible(!isVisible)}
                    onKeyDown={() => setIsVisible(!isVisible)}
                    tabIndex={0}
                >
                    {title}
                    <figure className='form__icon'>
                        <Icon icon='chevron-down' size={12} />
                    </figure>
                </div>
                {isVisible && (
                    <div className='form__group--dropdown' ref={ref}>
                        <div className='form__group--dropdown-content'>
                            {items && items.length === 0 && (
                                <div className='form__group'>No Items</div>
                            )}
                            {items &&
                                items.map((item, index) => {
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
                                                    handleSelect(name)
                                                }
                                                defaultChecked={isSelected(
                                                    name
                                                )}
                                            />
                                            <label htmlFor={id}>{name}</label>
                                        </div>
                                    )
                                })}
                        </div>
                        <div className='form__group--dropdown-footer'>
                            <button
                                type='button'
                                className='content-filter__button content-filter__button--apply'
                                onClick={(e) => {
                                    setIsVisible(false)
                                    handleApply(e)
                                }}
                            >
                                Apply Filters
                            </button>
                        </div>
                    </div>
                )}
            </fieldset>
        </div>
    )
}
export default FilterFormField
