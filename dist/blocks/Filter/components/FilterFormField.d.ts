import React from 'react';
interface FilterFormFieldProps {
    filter: {
        title: string;
        items: {
            id?: string;
            name: string;
        }[];
    };
    isSelected: (name: string) => boolean | undefined;
    handleSelect: (name: string) => void;
    handleApply: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
declare const FilterFormField: React.FC<FilterFormFieldProps>;
export default FilterFormField;
