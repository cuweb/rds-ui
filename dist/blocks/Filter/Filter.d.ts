import React from 'react';
interface FilterProps {
    handleFilterItems: (items: string[]) => void;
    contentFilters: {
        title: string;
        items: {
            id: string;
            name: string;
        }[];
    }[];
}
declare const Filter: React.FC<FilterProps>;
export default Filter;
