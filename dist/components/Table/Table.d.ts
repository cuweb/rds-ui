import React from 'react';
export interface TableProps {
    columns: string[];
    rows: string[][];
}
declare const Table: React.FC<TableProps>;
export default Table;
