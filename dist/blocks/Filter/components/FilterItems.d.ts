import React from 'react';
interface FilterItemsProps {
    isMenuOpen: boolean;
    isSelected: (name: string) => boolean | undefined;
    handleSelect: (name: string) => void;
    handleApply: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    handleReset: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    contentFilters: {
        title: string;
        items: {
            id?: string;
            name: string;
        }[];
    }[];
}
declare const FilterItems: React.FC<FilterItemsProps>;
export default FilterItems;
