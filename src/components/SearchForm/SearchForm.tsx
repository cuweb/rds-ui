/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import Icon from '@components/Icon/Icon'

export interface SearchFormProps {
    title?: string
    placeholder?: string
    action?: string
    onSubmit?: React.FormEventHandler
}

const SearchForm: React.FC<SearchFormProps> = ({
    title = 'Search',
    placeholder,
    action,
    onSubmit,
}): JSX.Element => {
    return (
        <form
            className='c-searchform'
            role='search'
            method='get'
            onSubmit={onSubmit}
            action={action}
        >
            <label htmlFor='searchform__input'>{title}</label>
            <input
                id='searchform__input'
                name='s'
                type='search'
                autoComplete='off'
                placeholder={placeholder}
            />
            <button type='submit' title={title}>
                <Icon icon='search' size={20} />
                <span className='u-visually-hidden'>Search button</span>
            </button>
        </form>
    )
}

export default SearchForm
