import React from 'react';
export interface SearchFormProps {
    title?: string;
    placeholder?: string;
    action?: string;
    onSubmit?: React.FormEventHandler;
}
declare const SearchForm: React.FC<SearchFormProps>;
export default SearchForm;
